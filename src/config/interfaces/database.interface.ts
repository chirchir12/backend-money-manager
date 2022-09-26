export interface DatabaseConfigAttr {
  username: string;
  password: string;
  host: string;
  port: number | string;
  database: string;
  type: string;
  synchronize: boolean;
  autoLoadEntities: boolean;
  logging: boolean;
  entities?: string[];
  migrations?: string[];
  cli: object;
}
