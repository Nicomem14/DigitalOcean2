const Model = Sequelize.Model;

class employee extends Model { }
employee.init({
    employee_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastname: {
        type: Sequelize.STRING,
    },
    firstname: {
        type: Sequelize.STRING,
    },
    sex: {
        type: Sequelize.STRING(10),
    },
    email: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    passwd: {
        type: Sequelize.STRING,
    },
    birthday: {
        type: Sequelize.DATE,
    },
    newsletter: {
        type: Sequelize.BOOLEAN,
    },
    company_name: {
        type: Sequelize.STRING,
    },
    company_cif: {
        type: Sequelize.STRING,
    },
    company_address1: {
        type: Sequelize.STRING,
    },
    company_address2: {
        type: Sequelize.STRING,
    },
    company_postalcode: {
        type: Sequelize.INTEGER,
    },
    company_country: {
        type: Sequelize.STRING,
    },
    company_Province: {
        type: Sequelize.STRING,
    },
    company_city: {
        type: Sequelize.STRING,
    },
    company_phone: {
        type: Sequelize.STRING,
    },
    company_mobile: {
        type: Sequelize.STRING,
    },
    company_vat_number: {
        type: Sequelize.STRING,
    },
    active: {
        type: Sequelize.BOOLEAN,
    },
    ip: {
        type: Sequelize.STRING,
    },
    last_connection_date: {
        type: Sequelize.DATE,
    },
}, {
        sequelize,
        modelName: 'employee'
        // options
    });