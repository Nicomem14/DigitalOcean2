const Model = Sequelize.Model;

class levelPerms extends Model { }
levelPerms.init({
    levelperms_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userPerms: {
        type: Sequelize.INTEGER
    }
}, {
        sequelize,
        modelName: 'levelPerms'
        // options
    });