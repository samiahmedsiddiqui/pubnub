# Publish

The `publish()` function is used to send a message to all subscribers of a channel. To publish a message you must first specify a valid publishKey at initialization.

```
PubNub.publish(
	{
		message: {
			such: 'object'
        },
		channel: 'my_channel',
		sendByPost: false,
		storeInHistory: false,
		meta: {
			"cool": "meta"
		}
	},
	function (status, response) {
 		if (status.error) {
			console.log(status)
        } else {
			console.log("message Published w/ timetoken", response.timetoken)
        }
    }
);
```

To have a basic working [example] (https://github.com/samiahmedsiddiqui/pubnub/tree/master/jsv4/examples/publish), Please go to: https://github.com/samiahmedsiddiqui/pubnub/tree/master/jsv4/examples/publish
