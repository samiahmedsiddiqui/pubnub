// Publish a status message
p.publish({
  channel: "ch-user-a-status",
  message: {
    author: "user-a",
    status: "I am reading about Advanced Channel Groups!",
    timestamp: Date.now() / 1000
  },
  callback: function(m) {
    console.log("PUB: ", m);
  }
});
