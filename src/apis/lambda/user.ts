import { useInject } from '@midwayjs/hooks';
import { UserService } from '../service';

export const findUser = async () => {
  const data = await (await useInject(UserService)).findUser();
  return {data};
};