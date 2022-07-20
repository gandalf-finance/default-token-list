const buildList = require("./buildList");
(async () => {
  const list = await buildList();
  console.log(JSON.stringify(list, null, 2));
})();
