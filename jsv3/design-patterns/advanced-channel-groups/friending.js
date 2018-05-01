// ************************************
// * User A and User B become friends
// ************************************
 
// Add User B to User A's groups: Add ch-user-b-present to cg-user-a-friends
p.channel_group_add_channel({
  channel_group: "cg-user-a-friends",
  channel: "ch-user-b-present",
  callback: function(m) {
    console.log("CG-Add: ", m);
  }
});
 
// Add User B to User A's groups: ch-user-b-status to cg-user-a-status-feed
p.channel_group_add_channel({
  channel_group: "cg-user-a-status-feed",
  channel: "ch-user-b-status",
  callback: function(m) {
    console.log("CG-Add: ", m);
  }
});
 
// Add User A to User B's groups: Add ch-user-a-present to cg-user-b-friends
p.channel_group_add_channel({
  channel_group: "cg-user-b-friends",
  channel: "ch-user-a-present",
  callback: function(m) {
    console.log("CG-Add: ", m);
  }
});
 
// Add User B to User A's groups: ch-user-a-status to cg-user-b-status-feed
p.channel_group_add_channel({
  channel_group: "cg-user-b-status-feed",
  channel: "ch-user-a-status",
  callback: function(m) {
    console.log("CG-Add: ", m);
  }
});
