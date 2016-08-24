// Add ch-user-a-present to cg-user-a-friends
p.channel_group_add_channel({
    channel_group: "cg-user-a-friends",
    channel: "ch-user-a-present",
    callback: function(m) {
        console.log("CG-Add: ", m);
    }
});
 
// Add ch-user-a-present to cg-user-a-status-feed
p.channel_group_add_channel({
    channel_group: "cg-user-a-status-feed",
    channel: "ch-user-a-present",
    callback: function(m) {
        console.log("CG-Add: ", m);
    }
});