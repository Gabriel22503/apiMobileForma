const DbConfig = require('../db')
class Session {
    session = async (formationId) => {
        const req = 'SELECT * FROM session WHERE ID_FORMATION = ?';
        const param = [formationId];
        const result = await DbConfig.query(req, param);
        return result;
    }

}
module.exports = new Session();