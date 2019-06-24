const Model = Sequelize.Model;

class provinceList extends Model { }
provinceList.init({
    province_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    province_code: {
        type: Sequelize.STRING,
    },
    province_name: {
        type: Sequelize.STRING,
    },
}, {
        sequelize,
        modelName: 'provinceList'
    });