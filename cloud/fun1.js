Parse.Cloud.define("fun1", async (req) => {
    console.log('req.params: ', req.params)
    return 'ok'
});

Parse.Cloud.beforeSave("Review", (req) => {
    const comment = req.object.get("comment");
    if (comment.length > 14) {
      // Truncate and add a ...
      req.object.set("comment", comment.substring(0, 13) + "...");
    }
    req.object.set("commentShort", comment.substring(0, 10))

}, {
    fields: {
        stars: {
            required: true,
            options: (stars) => {
                return stars >= 1 && stars <= 5;
            },
            error: 'Your review must be between one and five stars'
        }
    }
});