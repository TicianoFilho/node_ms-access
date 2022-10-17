const conn = require('./db/connection');

const execute = async () => {
  await conn
  .query('select * from prof where matricula=109798.9')
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.log(JSON.stringify({ err }));
  });
};

execute();
