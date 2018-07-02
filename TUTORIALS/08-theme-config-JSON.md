# Introduction to Publii Theming (Tutorial 08): The Theme Config JSON file, `config.json`

Every theme has a configuration file called `config.json` in its root folder. JSON is a JavaScript file written in [JavaScript Object Notation](https://www.json.org) format (a subset of JavaScript). It contains the theme config settings.

**Important: read the Publii Dev documentation on the theme `config.json`: [https://getpublii.com/dev/theme-configjson-file/](https://getpublii.com/dev/theme-configjson-file/).**

The theme `config.json` sets up the theme in Publii. Some of its settings are not exposed to the theme user in the admin area and some are exposed there as user-configurable settings. These are in the Publii admin **Settings**.

| Sections in `config.json`         | Where these are configured (or not) in the Publii admin | Summary                                                                                                                                                                          |
| --------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Theme "name", "version", "author" | Not user-configurable                                   |                                                                                                                                                                                  |
| `"menus": { }`                    | Menus                                                   | Name the menu(s) according to their location(s) in your theme.                                                                                                                   |
| `"renderer": { }`                 | Not user-configurable                                   |                                                                                                                                                                                  |
| `"config": [ ]`                   | Theme > Basic settings                                  |                                                                                                                                                                                  |
| `"customConfig": [ ]`             | Theme > Custom settings                                 | For the user setting up sidebars, number of featured posts, number of tags, number of authors, etc.                                                                              |
| `"customConfig": [ ]`             | Theme > Custom settings                                 | Also configurable here are user-overridable CSS styles (using `visual-override.js`).                                                                                             |
| `"postConfig": [ ]`               | Theme > Custom settings > Post options tab              | General settings for date format, displaying category, displaying social share buttons, etc. on posts. (Some of these can be overridden in the post editor on individual posts.) |                                                     |
| `"files": { }`                    | Not user-configurable                                   | Informs the website renderer of the image sizes required for generating responsive images.                                                                                       |
| `"customElements": [ ]`           | In the WYSIWYG editor of each post                      | Add special formatting HTML elements (tags and CSS classes) as required for your theme.                                                                                          |

**Notes:** 

1. The `config.json` file is used only when the theme is set for your website. Therefore whenever you make changes to this file, you wil also need to re-select this theme. 

2. If your `config.json` file has responsive image settings (in `"files": {}`), then Publii will want to regenerate the various sizes for your images every time you switch to your theme. But you can click **Skip regeneration** so that you don't allow this to happen.

3. The `"config": []` section must have settings in it (you can change the values from those in the example below) – or else the Publii renderer will stall. (If you delete any of these settings and then try to preview your website, you will get irreversibly stuck with an unfinished preview render. Then your only option is to force-quit Publii, and then switch themes, correct your config then switch back again).

Here is an example _minimum workable_ `config.json` file:

```
{
    "name": "InsertYourThemeNameHere",
    "version": "0.0.0.1",
    "author": "Insert your (author/ theme dev) name here",
    "menus": {
        "menu": "Menu"
    },
    "renderer": {
        "relatedPostsNumber": 3,
        "renderRelatedPosts": true,
        "renderSimilarPosts": false,
        "renderPrevNextPosts": true,
        "createContentStructure": false,
        "createSearchPage": true,
        "create404page": true,
        "customHTML": {
            "beforePost": "Before every post",
            "afterPost": "After every post"
        }
    },
    "config": [
        {
            "name": "postsPerPage",
            "label": "Posts per page",
            "value": 10,
            "type": "number"
        },
        {
            "name": "tagsPostsPerPage",
            "label": "Tags posts per page",
            "value": 10,
            "type": "number"
        },
        {
            "name": "authorsPostsPerPage",
            "label": "Authors posts per page",
            "value": 10,
            "type": "number"
        },
        {
            "name": "excerptLength",
            "label": "Excerpt length",
            "value": 25,
            "type": "number"
        },
        {
            "name": "logo",
            "label": "Website logo",
            "value": "",
            "type": "upload",
            "upload": true
        }
    ],
    "customConfig": [],
    "postConfig": [],
    "files": {},
    "customElements": []
}
```

## Explanation of the sections in `config.json` sections

This will be split over a number of tutorials.

### (1.) Compulsory entries

All themes should have a "name", a "version" and an "author".

The theme "name" must be set or else Publii will not find your theme _when Publii is started_. Therefore, if you change the name of your theme, close Publii and open it again.

The theme "name" must be identical to the name of the root folder for your theme. The theme name must not have spaces or any other character disallowed in folder naming.

### (2.) Menus

This is where you set the menu(s) for your theme. This Bootstrap starter theme for Publii has two menus (we covered this in an earlier tutorial in this series):

```
"menus": {
    "navbarMenu": "Navbar menu",
    "moduleMenu1": "Module menu 1"
},
```

### (3.) Renderer

This is where The Publii website rendering engine (a.k.a. renderer) recieves settings required for rendering the website. These settings can be altered by theme developers and advanced users, but they cannot be altered within the Publii Admin GUI's Theme Options.

You can change these values to suit your theme design and its intended usage.

```
"renderer": {
    "relatedPostsNumber": 3,
    "renderRelatedPosts": true,
    "renderSimilarPosts": false,
    "renderPrevNextPosts": true,
    "createContentStructure": false,
    "createSearchPage": true,
    "create404page": true,
    "customHTML": {
        "beforePost": "Before every post",
        "afterPost": "After every post"
    }
},
```

### (4.) Compulsory Config Settings

These are _site wide_ settings that you want theme users to be able to set in the Publii Admin GUI. Users will find these settings in **Theme > Basic Settings**. This is where you should have settings that are typical for (most) blog themes.

```
    "config": [
        {
            "name": "postsPerPage",
            "label": "Posts per page",
            "value": 10,
            "type": "number"
        },
        {
            "name": "tagsPostsPerPage",
            "label": "Tags posts per page",
            "value": 10,
            "type": "number"
        },
        {
            "name": "authorsPostsPerPage",
            "label": "Authors posts per page",
            "value": 10,
            "type": "number"
        },
        {
            "name": "excerptLength",
            "label": "Excerpt length",
            "value": 25,
            "type": "number"
        },
        {
            "name": "logo",
            "label": "Website logo",
            "value": "",
            "type": "upload",
            "upload": true
        }
    ],
```

The settings that must go in **config** are as follows:

- (Index) Posts per page (set the number of posts)

- Tags posts per page (set the number of posts)

- Authors posts per page (set the number of posts)

- Excerpt length (set the number of words)

- Website logo (uploader – don't set a value here)