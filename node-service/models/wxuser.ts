import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wxuserAttributes {
  uid: string;
  openid?: string;
  nick_name?: string;
  avatar_url?: string;
  create_time?: Date;
}

export type wxuserPk = "uid";
export type wxuserId = wxuser[wxuserPk];
export type wxuserOptionalAttributes = "openid" | "nick_name" | "avatar_url" | "create_time";
export type wxuserCreationAttributes = Optional<wxuserAttributes, wxuserOptionalAttributes>;

export class wxuser extends Model<wxuserAttributes, wxuserCreationAttributes> implements wxuserAttributes {
  uid!: string;
  openid?: string;
  nick_name?: string;
  avatar_url?: string;
  create_time?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof wxuser {
    return sequelize.define('wxuser', {
    uid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "用户id"
    },
    openid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "wx用户openid"
    },
    nick_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "用户昵称"
    },
    avatar_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "用户头像"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    }
  }, {
    tableName: 'wxuser',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
    ]
  }) as typeof wxuser;
  }
}
