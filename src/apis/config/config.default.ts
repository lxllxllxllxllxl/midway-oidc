import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// import { IConfig as LzdxConfig } from '../dto/lz';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1620454215012_2292';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  config.security = {
    csrf: false,
  };

  config.orm = {
    type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'midway-oidc',
      synchronize: false,
      logging: false,
  }

  config.secret = "hykj";

  return config;
}
