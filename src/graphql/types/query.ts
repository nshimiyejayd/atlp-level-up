import { queryType } from 'nexus';
import { Context } from '../../context';
import { LoginType } from './LoginType';
import { getCardsType } from './getCardsType';

export const Query = queryType( {
  definition(t) {
    t.field( 'welcome', {
      type: 'String',
      resolve: () => 'Wecome to Typescript world',
    });

    t.field( 'userLogin', {
      type: LoginType,
      } );

    t.field ( 'getCards', {
      type: getCardsType,
      resolve: async( _, _args, { prisma, userId }: Context ) => {
        try{
          if(!userId){
            throw new Error("Unauthorized");
          }
          const userCards = await prisma.user.findUnique({
            where: {
              id: userId,
            },
            include: {
              cards: true,
            },
          });
          return userCards
        }catch(err){
          const error = err as any;
          return new Error(error.message);
        }
      },
    } );
    }
})
