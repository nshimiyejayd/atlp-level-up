import { objectType } from 'nexus';
import { cardsType } from './cardType';

export const getCardsType = objectType({
  name: 'getCardsType',
  definition(t) {
    t.int('userId')
    t.list.field('cards', {
      type: cardsType,
    });
  },
});