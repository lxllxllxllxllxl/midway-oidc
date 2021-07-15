import { useInject } from '@midwayjs/hooks';
import { Ok } from '../common/response';
import { UserService } from '../service';

export const login = async (username:string,password:string) => {
  const data = await (await useInject(UserService)).login(username,password);
  if(data == true){
    return Ok("登录成功");
  } else {
    return data;
  }
};

