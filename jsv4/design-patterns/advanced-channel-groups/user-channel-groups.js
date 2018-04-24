// Add ch-user-a-present to cg-user-a-friends
p.channelGroups.addChannels(
        {
                channels: ["ch-user-a-present"],
                channelGroup: "cg-user-a-friends",
        },
        function (status) {
                console.log("CG-Add: ", status);
    }
);
 
// Add ch-user-a-present to cg-user-a-status-feed
p.channelGroups.addChannels(
        {
                channels: ["ch-user-a-present"],
                channelGroup: "cg-user-a-status-feed",
    },
        function (status) {
                console.log("CG-Add: ", status);
    }
);
