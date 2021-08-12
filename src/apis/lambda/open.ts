import { useInject } from '@midwayjs/hooks';
import { Nok, Ok } from '../common/response';
import { UserDTO } from '../dto/user.dto';
import { UserService } from '../service/user';

/**
 * 用户登录
 * @param username 用户名
 * @param password 密码
 * @returns 
 */
export const login = async (username:string,password:string) => {
  const data = await (await useInject(UserService)).login(username,password);
  if(data == 1){
    return Ok("登录成功");
  } else {
    return Nok("登录失败");
  }
};

/**
 * 查看用户名是否已经被使用
 * @param username 用户名
 * @returns 
 */
 export const availableAccount = async ( username:string) => {
  let data = await (await useInject(UserService)).availableAccount(username);
  if(data == 1) {
    return Ok();
  } else {
    return Nok("用户名已经存在");
  }
};


/**
 * 注册用户
 * @param username 用户名
 * @param password 密码
 * @returns 
 */
export const register = async ( userDto:UserDTO) => {
  await (await useInject(UserService)).register(userDto.name,userDto.pwd);
  return Ok("注册成功");
};

