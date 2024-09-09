import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Configuration } from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

const
  configuration = Configuration();

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration]
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: configuration.mysql.host,
      port: configuration.mysql.port,
      username: configuration.mysql.username,
      password: configuration.mysql.password,
      database: configuration.mysql.database,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
