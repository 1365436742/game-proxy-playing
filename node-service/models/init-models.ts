import type { Sequelize } from "sequelize";
import { wxuser as _wxuser } from "./wxuser";
import type { wxuserAttributes, wxuserCreationAttributes } from "./wxuser";

export {
  _wxuser as wxuser,
};

export type {
  wxuserAttributes,
  wxuserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const wxuser = _wxuser.initModel(sequelize);


  return {
    wxuser: wxuser,
  };
}
