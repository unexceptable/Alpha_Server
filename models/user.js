module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    username: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    score: {type: DataTypes.INTEGER, defaultValue: 0}
  })
}