<script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.0.6.js"></script>
<script src="http://cdn.rawgit.com/scalabl3/pubnub-flex-history/v1.05/pubnub-flex-history-min.js"></script>
  
<script>
// Call Init first to create a PubNub instance, then add the wrapper method to that object
var p = new PubNub({
    publishKey: 'demo',
    subscribeKey: 'demo'
});
  
// ** REQUIRED ** Add flex_history method to your PubNub object
p.flex_history = pubnub_flex_history;
  
// Example of a generic callback, but of course you can use your own
var flex_history_callback = function(result) {
    if (!result.error) {
        console.log(result.operation + " completed", result);
    }
    else {
        console.warn(result.operation + " failed", result);
    }
}
</script>
