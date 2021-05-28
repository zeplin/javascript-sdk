const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const { ZeplinApi, Configuration } = require("@zeplin/sdk");

const accessToken = process.env.ZEPLIN_ACCESS_TOKEN;
const projectId = process.env.ZEPLIN_PROJECT_ID;

const configuration = new Configuration({ accessToken });

const zeplinApi = new ZeplinApi(configuration);

const imagePath = path.resolve("image.png");

// Create a screen by publishing a local image file to the Zeplin project.
zeplinApi.screens.createScreen(projectId, {
    name: "My Screen",
    image: {
        file: fs.createReadStream(imagePath),
        type: "png"
    },
    commitMessage: "Initial commit"
}).then(response => {
    const { data: { id } } = response;

    return id;
}).then(screenId => {
    console.log(`Created screen with id: ${screenId}`);

    return fetch("https://placekitten.com/400/320")
        .then(resp => resp.buffer())
        .then(buffer => {
            // Create a new version for the screen we just created.
            return zeplinApi.screens.createScreenVersion(projectId, screenId, {
                image: {
                    file: buffer,
                    type: "png"
                },
                commitMessage: "Secondary commit"
            });
        });
}).then(response => {
    const { data: { id } } = response;

    return id;
}).then(versionId =>
    console.log(`Created screen version with id: ${versionId}`)
).catch(err => console.log(err));
