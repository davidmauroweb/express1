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


static async list(q) {
 try {
    let qry = "SELECT categories.description, SUM(products.stock) AS qstock FROM categories INNER JOIN products ON categories.idcategory = products.idcategory  GROUP BY categories.description HAVING SUM(products.stock) > CASE WHEN @q IS NULL THEN 0 ELSE @q END";
    let pool = await DB.connect();
    console.log(q);
    let lista = await pool.request().input('q', sql.Int, q).query(qry);
    if(lista.rowsAffected > 0) return lista.recordset; 
    else return [];  
 }
  catch (err) {
      throw 'Error obteniendo lista de productos'
  }
}

}
module.exports = CategoryService; 
