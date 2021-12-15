
module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "studies",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      study_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      created_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
    },
    {
      timestamps: false,
      charset: "utf8"
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("studies");