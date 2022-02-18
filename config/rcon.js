const details = {
  server: "139.180.167.128",
  port: "27015",
  pass: "1mshf7",
  command: "say TEST",
  options: {
    tcp: true,
    challenge: false,
  }
};

const serverMessage = "JOIN THE DISCORD"

const intervalInSeconds = 30

module.exports = Object.freeze({
    rconDetails: details,
    message: serverMessage,
    interval: intervalInSeconds
});