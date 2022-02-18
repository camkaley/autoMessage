const Rcon = require("rcon");

//server details
var server = "139.180.167.128";
var port = "27015";
var pass = "1mshf7";
var command = "say TEST";
//in seconds * 1000ms
var messageInterval = 5 * 1000;

//rcon options
var options = {
  tcp: true,
  challenge: false,
};

//Create connection
conn = new Rcon(server, port, pass, options);

//handle events
conn
  .on("auth", function () {
    console.log("Authenticated");

    //Every interval send command
    setInterval(() => {
      conn.send(command);
    }, messageInterval);
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
