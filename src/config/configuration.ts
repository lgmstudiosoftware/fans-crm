import { ConfigProps } from './configuration.interface';

export const Configuration = (): ConfigProps => ({
  mysql: {
    port: parseInt(process.env.MYSQL_TCP_PORT),
    host: 'localhost',
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});