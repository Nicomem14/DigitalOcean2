const Model = Sequelize.Model;

class gamesStats extends Model { }
gamesStats.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'gamesStats'
        // options
    });
