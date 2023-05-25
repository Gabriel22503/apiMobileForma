const DbConfig = require('../db')
class Domaine {
    domaine = async () => {
        const req = 'SELECT * FROM domaine';
        const result = await DbConfig.query(req);
        return result;
    }

}
module.exports = new Domaine();