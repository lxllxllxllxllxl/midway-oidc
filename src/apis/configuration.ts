import { hooks, createConfiguration } from '@midwayjs/hooks';
import bodyParser from 'koa-bodyparser';
import { join } from 'path';
import * as orm from '@midwayjs/orm';

export default createConfiguration({
  imports: [
    hooks({
      middleware: [bodyParser()],
    }),
    orm
  ],
  importConfigs: [join(__dirname, './config')],
});
