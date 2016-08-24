# Subscribe

`subscribe()` function causes the client to create an open TCP socket to the PubNub Real-Time Network and begin listening for messages on a specified channel.

```
PubNub.addListener({
    status: function(statusEvent) {
        if (statusEvent.category === "PNConnectedCategory") {
            var newState = {
                new: 'connected'
            };
            PubNub.setState(
                { 
                    state: newState 
                }, 
                function (status) {
                    console.log('connected', status)
                }
            );
        } else if (statusEvent.category === "PNUnknownCategory") {
            var newState = {
                new: 'error'
            };
            PubNub.setState(
                { 
                    state: newState 
                }, 
                function (status) {
                    console.log(statusEvent.errorData.message)
                }
            );
        } else if (statusEvent.category === "PNNetworkIssuesCategory") {
            var newState = {
                new: 'disconnected'
            };
            PubNub.setState(
                { 
                    state: newState 
                }, 
                function (status) {
                    console.log('disconnected', status)
                }
            );
        }
		else if (statusEvent.category === "PNReconnectedCategory") {
            var newState = {
                new: 'reconnect'
            };
            PubNub.setState(
                { 
                    state: newState 
                }, 
                function (status) {
                    console.log('reconnected', status)
                }
            );
        }
    },
    message: function(message) {
        console.log(message)
    },
    presence: function(presenceEvent) {
		console.log(presenceEvent)
    }
})
 
PubNub.subscribe({ 
    channels: ['my_channel'] 
});
```

To have a basic [example] (), Please go to: 
