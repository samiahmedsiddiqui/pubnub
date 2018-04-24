// Get the List of Friends
p.channelGroups.listChannels(
        {
            channelGroup: "cg-user-a-friends"
        },
        function (status, response) {
                if (status.error) {
            console.log("operation failed w/ error:", status)
        }
        else {
                        console.log("FRIENDLIST: ", response)
                }

    }
);

// Which Friends are online right now
p.hereNow(
        {
            channelGroups: ["cg-user-a-friends"]
    },
        function (status, response) {
        if (status.error) {
            console.log("operation failed w/ error:", status)
        }
        else {
                        console.log("ONLINE NOW: ", response)
                }
    }
);
 
p.addListener({
    message: function(message) {
        console.log("FRIEND PRESENCE: ", message)
    }
});

// Watch Friends come online / go offline
p.subscribe({
        channelGroups: ["cg-user-a-friends-pnpres"]
});
