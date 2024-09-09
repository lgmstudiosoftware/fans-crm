interface IMySQL {
  host: string
  port: number
  username: string
  password: string
  database: string
}

export interface ConfigProps {
  mysql: IMySQL
}