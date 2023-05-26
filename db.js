
const mysql = require('mysql2/promise');

// permet de se connecter a la bdd et d'executer la requete en parametre
const connection = mysql.createPool({
    // host: '127.0.0.1',
    // user: 'root',
    // database: 'forma_mobile'
    host: '89.117.169.204',
    user: 'u638169303_QGabriel',
    password: 'Azerty31',
    database: 'u638169303_forma_mobile'
  });

class DbConfig{
    
      query = async (req, params) => {
        const response = await connection.execute(req, params);
        return response[0];
    }

}
module.exports = new DbConfig();


