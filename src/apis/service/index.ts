import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Nok } from '../common/response';
import { User } from '../model/user';

@Provide()
export class UserService {

  @InjectEntityModel(User)
  user: Repository<User>;

  async findUser() {
    const data = this.user.findOne({id:"1"});
    return data;
  }
  
  async login(username:string,password:string) {
    const count = await this.user.count({name:username,pwd:password});
    if(count != 1) {
      return Nok("密码错误!!!");
    } else {
      return true;
    }
  }
}