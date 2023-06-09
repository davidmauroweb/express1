const sql = require('mssql');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

var config = {
    user: dotenv.DB_USER || 'SA',
    password: dotenv.DB_PASSWORD || 'Jupilandia1978',
    server: dotenv.DB_SERVER || 'localhost', 
    database: dotenv.DB_DATABASE || 'STOCK',
    options: {
      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
      },
      trustServerCertificate: true,
      encrypt: true
    }
  }

class DB {
  
    constructor(){ }
  
    static async connect() {
    let pool = sql.connect(config);
    return pool;
    }

}

module.exports = DB;