const ngrok = require("ngrok");
(async function () {
  const url = await ngrok.connect();
  console.info("NGROK is open at: ", url);
})();
