const { timeStamp } = require("console");

module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "SeriesStudies",
      {
        series_id: {
            allowNull: false,
            references: {
              model: 'series',
              key: 'id'
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
        study_id: {
            allowNull: false,
            references: {
              model: 'studies',
              key: 'id'
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
      },

      {
        timestamps: false,
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("SeriesStudies");