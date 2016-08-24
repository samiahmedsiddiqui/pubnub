// Publish a status message
p.publish(
    {
        message: { 
                author: "user-a",
                status: "I am reading about Advanced Channel Groups!", 
                timestamp: Date.now() / 1000 
            },
        channel: "ch-user-a-status"
    }, 
    function (status, response) {
        if (status.error) {
            console.log(status)
        } else {
            console.log("message Published w/ timetoken", response.timetoken)
        }
    }
);
