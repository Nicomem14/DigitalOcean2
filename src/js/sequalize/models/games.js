const Model = Sequelize.Model;

class games extends Model { }
games.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'games'
        // options
    });
