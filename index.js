const conn = require('./db/connection');

const todosRegistros = async () => {
  await conn
  .query('select * from pessoa_tbl')
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.log(JSON.stringify({ err }));
  });
};

todosRegistros();
