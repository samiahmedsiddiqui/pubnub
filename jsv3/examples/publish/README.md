# Publish

The `publish()` function is used to send a message to all subscribers of a channel. To publish a message you must first specify a valid publish_key at initialization.

```
pubnub.publish({
    channel : 'my_channel',
    message : 'Hello from the PubNub Javascript SDK!',
    store_in_history : false,
	callback : function(m){
        console.log(m)
    },
	error : function (error) {
		if(error) {
			console.log('Operation failed due to have an error: ', error);
		}
	}
});
```

To have a basic working [example] (https://github.com/samiahmedsiddiqui/pubnub/blob/master/jsv3/examples/publish/example.html), please go to: https://github.com/samiahmedsiddiqui/pubnub/blob/master/jsv3/examples/publish/example.html
