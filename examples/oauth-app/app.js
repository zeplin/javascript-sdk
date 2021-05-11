const express = require("express");
const { ZeplinApi, Configuration } = require("@zeplin/sdk");

const PORT = 3000;
const CLIENT_ID = "CLIENT_ID";
const CLIENT_SECRET = "CLIENT_SECRET";
const REDIRECT_URI = "http://localhost:3000/oauth/callback";

const app = express();

function htmlPage(content) {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Zeplin app</title>
    </head>
    <body>
        ${content}
    </body>
</html>`
}

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send(
        htmlPage(`<p>
            Heyo Zepliner! 🙋<br><br>
            Click <a href="/oauth/authorize">here</a> to authorize this app.
        </p>`)
    );
});

app.get("/oauth/authorize", (req, res) => {
    const zeplinClient = new ZeplinApi();

    res.redirect(zeplinClient.authorization.getAuthorizationUrl({
        clientId: CLIENT_ID,
        redirectUri: REDIRECT_URI
    }));
});

app.get("/oauth/callback", async (req, res) => {
    const authCode = req.query.code;
    let zeplinClient = new ZeplinApi();

    // Create an access token using the authorization code
    const { data: tokenData } = await zeplinClient.authorization.createToken({
        code: authCode,
        clientId: CLIENT_ID,
        redirectUri: REDIRECT_URI,
        clientSecret: CLIENT_SECRET
    });

    // Get current user's details
    zeplinClient = new ZeplinApi(new Configuration({ accessToken: tokenData.accessToken }))
    const { data: userData } = await zeplinClient.users.getCurrentUser();

    res.set("Content-Type", "text/html");
    res.send(
        htmlPage(`<p>
            Welcome back, <strong>${userData.username}</strong>! 🙋
        </p>`)
    );
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});