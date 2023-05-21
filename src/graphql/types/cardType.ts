import { objectType } from 'nexus';

export const cardsType = objectType({
    name: 'cardsType',
    definition(t) {
      t.int('id');
      t.string('question');
      t.string('answer');
      t.boolean('isDone');
      t.int('userId');
    },
  });