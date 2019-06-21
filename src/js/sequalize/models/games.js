const Model = Sequelize.Model;

class games extends Model { }
games.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    localteam_id: {
        type: Sequelize.INTEGER,
    },
    visitorteam_id: {
        type: Sequelize.INTEGER,
    },
}, {
        sequelize,
        modelName: 'games'
        // options
    });




