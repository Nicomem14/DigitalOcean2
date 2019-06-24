const Model = Sequelize.Model;

class gamesResults extends Model { }
gamesResults.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'gamesResults'
        // options
    });
