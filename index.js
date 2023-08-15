const app = require('./app');

const PORT = 4000;

module.exports = app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});