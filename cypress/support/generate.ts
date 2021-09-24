// @ts-ignore
import { build, fake } from 'test-data-bot';

export const builderUser = build('User').fields({
  firstName: fake((f: any) => f.name.lastName()),
  lastName: fake((f: any) => f.name.firstName()),
  email: fake((f: any) => f.internet.email()),
  password: fake((f: any) => f.internet.password()),
});
