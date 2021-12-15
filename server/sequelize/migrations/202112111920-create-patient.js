
module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "patient",
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
        created_date: {
          allowNull: false,
          type: DataTypes.DATE
        },
      },
      {
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("patient");