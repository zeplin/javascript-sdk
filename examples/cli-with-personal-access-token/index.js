const { ZeplinApi, Configuration } = require("@zeplin/sdk");

const accessToken = process.env.ZEPLIN_ACCESS_TOKEN;

const configuration = new Configuration({ accessToken });

const zeplinApi = new ZeplinApi(configuration);


zeplinApi.users.getCurrentUser()
    .then(({ data }) => console.log(JSON.stringify(data, null, 2)));

zeplinApi.projects.getProjects({status: "active" })
    .then(({ data }) => console.log(JSON.stringify(data, null, 2)));

