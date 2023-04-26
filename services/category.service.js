const DB = require('../database/database');

async function get() {
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
exports.get = get;
