const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Model User
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

// Model StandarSatuanHarga
const StandarSatuanHarga = sequelize.define('StandarSatuanHarga', {
    kodeKomponen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uraianKomponen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    spesifikasi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    satuan: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hargaSatuan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tkdn: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {});

// Sync all models
(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Database & tables created!");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

module.exports = { User, StandarSatuanHarga };
