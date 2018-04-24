# Pub-Sub Example

This example contains the `publish()`, `subscribe()` and `unsubscribe()` working example. You need to change the keys by your PubNub Provided Key. This example Subscribe to the Channel, Publish to the channel and then unsubscribe from the channel after the 10 seconds.

# Publish

The `publish()` function is used to send a message to all subscribers of a channel. To publish a message you must first specify a valid publishKey at initialization.

# Subscribe

`subscribe()` function causes the client to create an open TCP socket to the PubNub Real-Time Network and begin listening for messages on a specified channel.

# Unsubscribe

When subscribed to a single channel, this function causes the client to issue a leave from the channel and close any open socket to the PubNub Network. 
