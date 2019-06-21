const Model = Sequelize.Model;

class players extends Model { }
players.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'players'
        // options
    });