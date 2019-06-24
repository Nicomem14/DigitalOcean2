const Model = Sequelize.Model;

class countryList extends Model { }
countryList.init({
    country_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    country_code: {
        type: Sequelize.STRING,
    },
    country_name: {
        type: Sequelize.STRING,
    },
}, {
        sequelize,
        modelName: 'countryList'
    });