import { objectType } from 'nexus';

export const LoginType = objectType({
  name: 'LoginType',
  definition(t) {
    t.string('email');
    t.string('token');
  },
});