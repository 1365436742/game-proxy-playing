// config.ts
interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  modelsOutput: string; // 模型输出目录
}

export const MYSQL_DB_CONFIG: DatabaseConfig = {
  host: "localhost",
  port: 3306,
  database: "test",
  username: "root",
  password: "root",
  modelsOutput: "./models",
};
