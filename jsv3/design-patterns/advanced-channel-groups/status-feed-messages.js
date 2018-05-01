// Get Status Feed Messages
p.subscribe({
  channel_group: "cg-user-a-status-feed",
  message: function(m,a,b,c) {
    console.log("STATUS: ", m,a,b,c);
  }
});
