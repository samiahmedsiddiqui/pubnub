# Here Now Channel Groups Example

This example contains the `subscribe()`, `addChannels()` and `hereNow()` working example. You need to change the keys by your PubNub Provided Key. This example Subscribe to the Channel, set the state and obtain the information of channel.

# Subscribe

`subscribe()` function causes the client to create an open TCP socket to the PubNub Real-Time Network and begin listening for messages on a specified channel.

# Adding Channels

`addChannels()` function is used to add the channels under the channel group.

# Here Now

`hereNow()` is used to obtain information about the current state of a channel including a list of unique user-ids currently subscribed to the channel and the total occupancy count of the channel by calling the `hereNow()` function in your application.
