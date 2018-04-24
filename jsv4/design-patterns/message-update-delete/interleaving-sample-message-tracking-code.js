var message_ids = {}
var deleted_ids = {};
var message_list = {};
var my_channel = "jasdeep-status";

function display_messages(message, channel) {
    (typeof message_list[channel] === 'undefined' ? message_list[channel] = {});
    (typeof message_ids[channel] === 'undefined' ? message_ids[channel] = []);
    (typeof deleted_ids[channel] === 'undefined' ? deleted_ids[channel] = []);

    // if new message, add to list
    if (message_ids[channel].indexOf(message.message_id) &lt; 0) {
        message_ids[channel].push(message.message_id);
        message_list[channel][message_id] = message;
    }
    else {
        if (message.deleted) {
            deleted_ids[channel].push(message.message_id);

            // delete from message list
            delete message_list[channel][message_id];

            // update UI, remove message from display
            // ...
        }
        else {
            // replace content (same as adding new one, because of identical message_id)
            message_list[channel][message_id] = message;
            
            // update UI, update display content
            // ...
        }
    }
}
pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNUnknownCategory") {
                if ( statusEvent.errorData.message !== "Not Found" ) {
                    net.setState(
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
    channels: [my_channel]
});
