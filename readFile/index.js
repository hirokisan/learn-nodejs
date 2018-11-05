const query = require('./query');

(async () => {
  let obj = await query.get();
  obj.forEach((item, i) => {
    console.log(item);
    console.log(i);
  });
})();

