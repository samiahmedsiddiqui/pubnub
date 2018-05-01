// Get the List of Friends
p.channel_group_list_channels({
  channel_group: "cg-user-a-friends",
  callback: function(m) {
    console.log("FRIENDLIST: ", m);
  }
});
 
// Which Friends are online right now
p.here_now({
  channel_group: "cg-user-a-friends",
  callback: function(m) {
    console.log("ONLINE NOW: ", m);
  }
});
 
// Watch Friends come online / go offline
p.subscribe({
  channel_group: "cg-user-a-friends-pnpres",
  message: function(m,a,b,c) {
    console.log("FRIEND PRESENCE: ", m,a,b,c);
  }
});
