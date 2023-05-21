import { mutationType, stringArg, nonNull, intArg, booleanArg } from 'nexus';
import { Context } from '../../context';
import { hashPassword } from '../../utils/security.utils';
import * as jwt  from 'jsonwebtoken';
import { verifyPassword } from '../../utils/security.utils';

export const Mutation = mutationType({  
  definition(t){
    t.boolean('registerUser', {
        args: {
            name: nonNull(stringArg()),
            email: nonNull(stringArg()),
            password: nonNull(stringArg())
        },
        resolve: async(_, args, { prisma }: Context) => {
            try{
              const hashedPassword = await hashPassword(args.password);
              await prisma.user.create({
                data: {
                  ...args,
                  password: hashedPassword
                }
              });
          
              return true;
            }  catch (err) {
              const errorCaught = err as any;
              if (errorCaught.code === 'P2002') {
                const errorMessage = `${errorCaught.meta.target.toString()} already exists`;
                return new Error(errorMessage);
              } else {
                return new Error(errorCaught.message);
              }
            }
          
        }
    }),

    t.field('login', {
      type: "LoginType",
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async ( _, args,{ prisma }: Context,) => {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: args.email,
            },
          });

          if (!user) {
            return new Error('No such user found');
          }
          const isValid = await verifyPassword(
            args.password,
            user.password,
          );
          if (!isValid) {
            return new Error('Invilid credentials');
          }
          const token = jwt.sign({ userId: user.id }, process.env.TOP_SECRET as jwt.Secret );

          return {
            email: user.email,
            token
          }
        } catch (err) {
          const errorCaught = err as any;
          return new Error(errorCaught.message);
        }
      },
    });

    t.boolean('createCard', {
      args: {
          question: nonNull(stringArg()),
          answer: nonNull(stringArg()),
          isDone:nonNull(booleanArg()),
      },
      resolve: async(_, args, { prisma, userId }: Context) => {
          try{
            if(!userId){
              throw new Error("Unauthorized");
            }
            await prisma.card.create({
              data: {
                ...args,
                userId
              }
            });
        
            return true;
          }  catch (err) {
            const error = err as any;
              return new Error(error.message);
            }
          }
      });
      
      t.boolean('markCard', {
        args: {
          cardId: nonNull(intArg()),
          isDone: nonNull(booleanArg()),
        },
        resolve: async (_, { cardId, isDone }, { prisma, userId }: Context) => {
          try {
            if (!userId) {
              throw new Error('Unauthorized');
            }
      
            const updatedCard = await prisma.card.update({
              where: {
                id: cardId,
              },
              data: {
                isDone,
              },
            });
      
            if (!updatedCard) {
              throw new Error('Card not found');
            }
      
            return true;
          } catch (err) {
            const error = err as any;
            return new Error(error.message);
          }
        },
      });
  }
})