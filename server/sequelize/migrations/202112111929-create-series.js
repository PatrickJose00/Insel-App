
module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "series",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED
        },
        series_name: {
          allowNull: false,
          type: DataTypes.STRING
        },
        created_date: {
          allowNull: false,
          type: DataTypes.DATE
        },
        modality_id: {
            allowNull: false,
            references: {
                key: "id",
                model:"modality"
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
      },
      {
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("series");