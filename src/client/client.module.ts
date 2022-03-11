import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import * as ormOptions from '../config/orm';
import { UserModule } from './user/user.module';
import User from '@/db/models/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/rocketseat.db',
      logging: true,
      entities: [User],
      migrations: [__dirname + '/src/db/migrations/*{.ts,.js}'],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
    UserModule
  ],
})
export class AppModule {}
