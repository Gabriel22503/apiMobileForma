
const mysql = require('mysql2/promise');

// permet de se connecter a la bdd et d'executer la requete en parametre
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'forma_mobile'
  });

class DbConfig{
    
      query = async (req, params) => {
        const response = await connection.execute(req, params);
        return response[0];
    }

}
module.exports = new DbConfig();


