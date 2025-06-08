// src/generate.ts
import { Sequelize } from "sequelize";
import sequelizeAuto from "sequelize-auto";
import * as fs from "fs";
import * as path from "path";
import { MYSQL_DB_CONFIG } from "../config/db";

// 初始化 Sequelize 实例
const sequelize = new Sequelize(
  MYSQL_DB_CONFIG.database,
  MYSQL_DB_CONFIG.username,
  MYSQL_DB_CONFIG.password,
  {
    host: MYSQL_DB_CONFIG.host,
    port: MYSQL_DB_CONFIG.port,
    dialect: "mysql",
    logging: false,
  }
);

async function generateModelsWithSequelizeAuto() {
  // 创建输出目录
  [MYSQL_DB_CONFIG.modelsOutput].forEach((dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // 使用 sequelize-auto 生成模型
  const auto = new sequelizeAuto(
    sequelize,
    MYSQL_DB_CONFIG.username,
    MYSQL_DB_CONFIG.password, // 表名映射函数（可选）
    {
      directory: MYSQL_DB_CONFIG.modelsOutput,
      lang: "ts", // 生成 TypeScript 代码
      singularize: true, // 使用单数形式的模型名
      useDefine: true, // 使用 Sequelize 的 define 方法
    }
  );
  await auto.run();
  console.log(`✅ 模型已生成到 ${MYSQL_DB_CONFIG.modelsOutput}`);
}

async function main() {
  try {
    await generateModelsWithSequelizeAuto();

    // 动态导入生成的模型（需确保模型文件已存在）
    const models: Record<string, any> = {};
    const modelFiles = fs.readdirSync(MYSQL_DB_CONFIG.modelsOutput);
    modelFiles.forEach((file) => {
      const modelName = path.basename(file, ".ts");
      models[modelName] = require(path.join(
        MYSQL_DB_CONFIG.modelsOutput,
        file
      )).default;
    });
    console.log("\n🎉 所有代码生成完成！");
  } catch (error) {
    console.error("❌ 生成失败:", error);
    process.exit(1);
  }
}

main();
