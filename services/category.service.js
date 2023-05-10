const { pool } = require('mssql');
const DB = require('../database/database');
const sql = require('mssql');
class CategoryService {

static async get() {
  let pool = await DB.connect();
  return new Promise(function (resolve, reject) {
    let qry = "SELECT * FROM categories";
    pool.request().query(qry, (err, categories) => {
      if (err) {
        reject(err);
      } else {
        resolve(categories.recordset);
      }
    });
  }) 
}
async create(categ) {
return DB.connect().then(pool => {
return pool.request()
.input('description', sql.VarChar(100), categ.description)
.output('idcategory', sql.Int)
.execute("spCreateCategory")})
.then(function(value) { return value.output })
.catch(function(err) { throw 'Error en la descripción' });
}

}
module.exports = CategoryService; 
