# Zeplin JavaScript SDK
[![@latest](https://img.shields.io/npm/v/@zeplin/sdk.svg)](https://www.npmjs.com/package/@zeplin/sdk)
[![@latest](https://img.shields.io/npm/l/@zeplin/sdk.svg)](https://www.npmjs.com/package/@zeplin/sdk)

Official JavaScript interface to the [Zeplin API](https://docs.zeplin.dev). It works in both Node.js and web browser environments.

## Installation

```
npm install @zeplin/sdk
```

or

```
yarn add @zeplin/sdk
```

## Getting started

To get started with the SDK, you can create a personal access token from the web app under [Developer](https://app.zeplin.io/profile/developer) tab in your profile page.

You can use this token to make API calls for your own Zeplin account.

```js
import { ZeplinApi, Configuration } "@zeplin/sdk";

const zeplinClient = new ZeplinApi(new Configuration({ accessToken: "ACCESS_TOKEN" }));

const me = await zeplinClient.getCurrentUser();

```

### OAuth
If you want to build an application for other Zeplin users, you can also create a Zeplin app the [profile page](https://app.zeplin.io/profile/developer).


Check out this [example](./examples/oauth-app) to see how you can implement an OAuth flow using the SDK.

## Usage

The SDK exposes Zeplin API endpoints as methods. These methods are grouped into namespace objects by the type of object they interact with.

For example:
```js
import { ZeplinApi, Configuration, ScreenNoteColorNameEnum } "@zeplin/sdk";

const zeplinClient = new ZeplinApi(new Configuration({ accessToken: "ACCESS_TOKEN" }));

// Get colors in the styleguide
zeplinClient.colors.getStyleguideColors("STYLEGUIDE_ID");

// Add a note on the screen
zeplinClient.screens.createScreenNote("PROJECT_ID", "SCREEN_ID", {
    content: "Çaylar filiz! :turkish_tea:",
    position: { x: 0.1, y: 0.1 },
    color: ScreenNoteColorNameEnum.DEEP_PURPLE
});

// Invite a member to the workspace
zeplinClient.organizations.inviteOrganizationMember("ORGANIZATION_ID", {
    handle: "rooolan",
    role: "editor"
});
```

Check out the [API documentation](https://docs.zeplin.dev/reference) for complete list of endpoints and groups.

## Examples

- [Command-line app using personal access token](./examples/cli-with-personal-access-token)
- [Simple OAuth application](./examples/oauth-app)
- [Publishing screens and screen versions](./examples/publishing-screens)

## License

The project is available as open source under the terms of the [MIT License](LICENSE).

## Need help?

Ping us at dx@zeplin.io for any feedback or questions. You can also find us in the [Zeplin Developer Slack](https://zpl.io/zeplin-dev-slack) group!
