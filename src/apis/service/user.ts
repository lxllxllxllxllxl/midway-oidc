import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../model/user';
import { v1 as uuidv1 } from 'uuid';
import { encrypt } from '../common/encrypt';

@Provide()
export class UserService {

  @InjectEntityModel(User)
  user: Repository<User>;
  
  async login(username:string,password:string) {
    console.log(encrypt(password));
    const count = await this.user.count({name:username,pwd:encrypt(password)});
    return count;
  }

  async register(username:string,password:string) {
    let key = uuidv1().replace(/-/g, '');
    await this.user.save({key:key, name:username,pwd:encrypt(password)});
  }

  async availableAccount(name: string) {
    const count = await this.user.count({name:name});
    return count;
  }
}