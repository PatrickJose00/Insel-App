const { timeStamp } = require("console");

module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "SeriesPatient",
      {
        series_id: {
            allowNull: false,
            references: {
              model: 'series',
              key: 'id'
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
        patient_id: {
            allowNull: false,
            references: {
              model: 'patient',
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
  
  module.exports.down = queryInterface => queryInterface.dropTable("SeriesPatient");