
module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "modality",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING
        },
      },
      {
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("modality");