const Model = Sequelize.Model;

class games extends Model { }
games.init({
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




