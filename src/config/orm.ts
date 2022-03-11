import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/rocketseat.db',
  logging: true,
  entities: [__dirname + '/src/db/models/*{.ts,.js}'],
  migrations: [__dirname + '/src/db/migrations/*{.ts,.js}'],
};

module.exports = options;
