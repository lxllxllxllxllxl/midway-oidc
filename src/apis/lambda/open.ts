import { useInject } from '@midwayjs/hooks';
import { Ok } from '../common/response';
import { UserService } from '../service/user';

/**
 * 用户登录
 * @param username 用户名
 * @param password 密码
 * @returns 
 */
export const login = async (username:string,password:string) => {
  const data = await (await useInject(UserService)).login(username,password);
  if(data == true){
    return Ok("登录成功");
  } else {
    return data;
  }
};

/**
 * 注册用户
 * @param username 用户名
 * @param password 密码
 * @returns 
 */
export const register = async (username:string,password:string) => {
  await (await useInject(UserService)).register(username,password);
  return Ok("注册成功");
};

