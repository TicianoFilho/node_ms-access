const adodb = require('node-adodb');

const DB_PATH = process.env.DB_PATH;
const PROVIDER = process.env.PROVIDER;
const PASSWORD = process.env.PASSWORD;

const fullConnStr = `Provider=${ PROVIDER };Data Source=${ DB_PATH };Jet OLEDB:Database Password=${ PASSWORD }`;

const connection  = adodb.open(fullConnStr);

module.exports = connection;
