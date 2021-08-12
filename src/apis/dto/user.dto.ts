import { Rule, RuleType } from '@midwayjs/decorator';

/**
 * 用户注册入参
 */
 export class UserDTO {

  @Rule(RuleType.string().required())
  name: string;

  @Rule(RuleType.string())
  phone: string;

  @Rule(RuleType.string().required())
  pwd: string;

}