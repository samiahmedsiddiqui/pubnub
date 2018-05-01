var message_ids  = {}
var deleted_ids  = {};
var message_list = {};
var my_channel   = "jasdeep-status";

function retrieve_update_deletes() {    
  pubnub.history({

  });
}

function display_messages(message, channel) {
  (typeof message_list[channel] === 'undefined' ? message_list[channel] = {});
  (typeof message_ids[channel] === 'undefined' ? message_ids[channel] = []);
  (typeof deleted_ids[channel] === 'undefined' ? deleted_ids[channel] = []);

  // if this is a new main channel message
  // and not in the deleted id's list,
  // add to message list
  if (channel.indexOf("-UPDATES") === -1) {
    if (deleted_ids.indexOf(message.message_id) === -1) {
      message_ids[channel].push(message.message_id);
      message_list[channel][message_id] = message;
    }
  }
  // else it came from side-channel
  else {
    if (message.deleted) {
      deleted_ids[channel].push(message.message_id);

      // delete from message list
      delete message_list[channel][message_id];

      // update UI, remove message from display
      // ...
    } else {
      // replace content (same as adding new one, because of identical message_id)
      message_list[channel][message_id] = message;

      // update UI, update display content
      // ...
    }
  }
}

// Subscribe to both the main content channel as well as the updates channel
pubnub.addListener({
  status: function(statusEvent) {
    if (statusEvent.category === "PNUnknownCategory") {
      if (statusEvent.errorData.message !== "Not Found") {
        pubnub.setState(
          {
            state: 'error'
          },
          function (status) {
            console.log(statusEvent);
          }
        );
      }
    }
  },
  message: function(msg) {
    display_messages(msg, msg.subscribedChannel);
  }
});
pubnub.subscribe({
  channels: [my_channel, my_channel + "-UPDATES"]
});
