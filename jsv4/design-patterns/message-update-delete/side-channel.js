pubnub.publish({
        message: {
                message_id: 10001,
                channel: "jasdeep-status-updates",
                original_timetoken:
                user: "jasdeep",
                status: "Writing up design patterns...",
                usecase: "update",
                deleted: false,
                is_update: true
        },
        channel: "jasdeep-status"
})
