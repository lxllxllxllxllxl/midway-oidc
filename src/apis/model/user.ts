import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
/**
 * 事件上报
 */

 @EntityModel('user')
 export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  key: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  pwd: string;

}