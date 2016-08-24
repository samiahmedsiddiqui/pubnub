# Subscribe
`subscribe()` function causes the client to create an open TCP socket to the PubNub Real-Time Network and begin listening for messages on a specified channel.

```
pubnub.subscribe({
    channel : 'my_channel',
    connect : function(){
        console.log("Connected")
    },
    disconnect : function(){
        console.log("Disconnected")
    },
    error : function(){
        console.log("Network Error")
    },
	message : function( message, env, channel ){
        // RECEIVED A MESSAGE.
        console.log(message)
    },
	presence : function(m){
        console.log(m)
    },
	reconnect : function(){
        console.log("Reconnected")
    }
})
```

To have a basic working [example] (https://github.com/samiahmedsiddiqui/pubnub/blob/master/jsv3/examples/subscribe/example.html), please go to: https://github.com/samiahmedsiddiqui/pubnub/blob/master/jsv3/examples/subscribe/example.html
