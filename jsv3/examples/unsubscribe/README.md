# Unsubscribe
When subscribed to a single channel, this function causes the client to issue a leave from the channel and close any open socket to the PubNub Network.

```
pubnub.unsubscribe({
    channel: ['my_channel', 'my_channel_1'],
	channel_group : 'demo_group',
	callback: function(m) {
		console.log(m);
	}
})
```

To have a basic working [example](https://github.com/samiahmedsiddiqui/pubnub/blob/master/jsv3/examples/unsubscribe/example.html), please go to: https://github.com/samiahmedsiddiqui/pubnub/blob/master/jsv3/examples/unsubscribe/example.html
