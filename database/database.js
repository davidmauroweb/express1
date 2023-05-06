const sql = require('mssql');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

var config = {
    user: dotenv.DB_USER || 'pepe',
    password: dotenv.DB_PASSWORD || 'Miclave1234',
    server: dotenv.DB_SERVER || 'pepe', 
    database: dotenv.DB_DATABASE || 'DB',
    options: {
      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
      },
      trustServerCertificate: true,
      encrypt: false, 
      instanceName: 'SQLEXPRESS'
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