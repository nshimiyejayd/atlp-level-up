import { ApolloServer } from 'apollo-server';
import { getSchema } from './graphql/schema';
import { getMyPrismaClient } from './database';
import { Context } from './context';
import dotenv from 'dotenv';
import { decodeAuthHeader } from './middlewares/auth';

dotenv.config();

const main = async () => {
  const prisma = await getMyPrismaClient();
  const schema = getSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }): Context => {
      const token =
        req && req.headers.authorization
            ? decodeAuthHeader(req.headers.authorization)
            : null;
        return {
          prisma,
          userId: token?.userId 
        }
    },
  });

  apolloServer
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
};

main().catch((err) => {
  console.error(err);
});
