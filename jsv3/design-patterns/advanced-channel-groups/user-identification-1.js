
// Initialize with UUID (from successful authentication response with backend)
var p = PUBNUB.init({
    publish_key: "...",
    subscribe_key: "...",
    uuid: "0c2340c2-8cc1-4898-8868-444ba77d02d2::web"
});
