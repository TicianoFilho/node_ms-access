const adodb = require('node-adodb');

const DB_PATH = process.env.DB_PATH;
const PROVIDER = process.env.PROVIDER;

const fullStrConn = `Provider=${ PROVIDER };Data Source=${ DB_PATH }`;

const connection  = adodb.open(fullStrConn);

module.exports = connection;
