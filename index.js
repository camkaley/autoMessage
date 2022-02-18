const Rcon = require("rcon");
const config = require("./config/rcon");

//Create connection
conn = new Rcon(
  config.rconDetails.server,
  config.rconDetails.port,
  config.rconDetails.pass,
  config.rconDetails.options
);

//handle events
conn
  .on("auth", function () {
    console.log("Authenticated");

    //Every interval send command
    setInterval(() => {
      conn.send(`say ${config.message}`);
    }, config.interval);
    
  })
  .on("error", function (err) {
    console.log("Error: " + err);
  })
  .on("end", function () {
    console.log("Connection closed");
    process.exit();
  });

//connect to RCON
conn.connect();
