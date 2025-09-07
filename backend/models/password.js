const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Password = sequelize.define("Password", {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false   // ปิด updatedAt
});

module.exports = Password;
