import { makeSchema } from 'nexus';
import path from 'path';
import { Query } from './types/query';
import { Mutation } from './types/Mutation'

export const getSchema = () => {
  const schema = makeSchema({
    types: [Query, Mutation ],
    outputs: {
      schema: path.join(process.cwd(), 'nexus', 'schema.graphql'),
      typegen: path.join(process.cwd(), 'nexus', 'nexus.ts'),
    },
  });
  return schema;
};