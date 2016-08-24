
// Initialize with UUID (from successful authentication response with backend)
var p = PUBNUB.init({
    publish_key: "...",
    subscribe_key: "...",
    uuid: "user-a"
});
