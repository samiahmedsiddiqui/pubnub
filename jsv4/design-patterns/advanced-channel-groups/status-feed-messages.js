p.addListener({
    message: function(message) {
        console.log("STATUS: ", message)
    }
});

// Get Status Feed Messages
p.subscribe({
        channelGroups: ["cg-user-a-status-feed"]
});
