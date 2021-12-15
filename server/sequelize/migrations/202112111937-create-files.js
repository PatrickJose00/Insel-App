
module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "files",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED
        },
        patient_id: {
            allowNull: true,
            references: {
                key: "id",
                model:"patient"
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
        study_id: {
            allowNull: true,
            references: {
                key: "id",
                model:"studies"
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
        series_id: {
            allowNull: true,
            references: {
                key: "id",
                model:"series"
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
        file_path: {
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
  
  module.exports.down = queryInterface => queryInterface.dropTable("files");