# directFileDownload
Directly download files from Discord without needing to open browser

# Install Guide
## First Time Setup
Vencord is not modular, so you have to build from source to add custom plugins.
Follow this guide for getting set up: https://docs.vencord.dev/installing/custom-plugins/

## How to install a plugin
1. Direct your terminal to the `userplugins` folder, e.g. `cd src/userplugins`. If you're confused, read the guide above
2. Each plugin post will contain a GitHub repo link, like `https://github.com/PluginAuthor/CoolPlugin`. Copy it
3. Inside your terminal, run
```sh
git clone https://github.com/...
```

## How to update plugins
You will have to make sure to keep up with the latest changes to fix issues and get new features. You can update a plugin by directing your terminal to its folder (`cd src/userplugins/coolPlugin`) and running:
```sh
git pull
```

The [Official Install Guide](https://discord.com/channels/1015060230222131221/1257038407503446176/1257038407503446176) is published in [Vencord's Discord Server](https://discord.gg/D9uwnFnqmd)
