const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'Usuarios' });


/* crea usuario*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Pablo',
    lastName: 'Ramirez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'Usuarios'
});

//actualiza registro
User.update({ firstName: "XXXXXXX" }, {
  where: {
    lastName: 'Gutierrez'
  }
}).then(() => {
  console.log("Done");
});
