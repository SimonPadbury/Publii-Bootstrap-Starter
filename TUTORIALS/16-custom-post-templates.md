# Introduction to Publii Theming (Tutorial 08): Creating a custom post template

You can create custom post templates in Publii.

As there is (at present, June 2018) no dedicated page system in Publii (only posts), in my Publii Bootstrap starter theme I have created a custom post template for use as a "page" (for, e.g. "about.html").

## (1.) Setting up a custom post template

I created my custom post "page" template as follows:

1. Duplicate `post.hbs` in the theme root folder, and name it as `post-page.hbs`.
2. In `config.json` add the following:

	```
	"postTemplates": {
		"page": "Custom Page template"
	},
	```
	– I added this below `"postConfig"`.

I modified `post-page.hbs` to make it suitable as a standalone page template: I removed the post metas: (a.) the date and category from the article `<header>` and (b.) social sharing buttons, related posts etc. from the article `<footer>`.

You can create other custom post templates in a similar way: create a template `post-{custom-name}.hbs` and then configure it in the `"postConfig"`:

```
"postTemplates": {
	"page": "Custom Page template",
	"{custom-name}": "Your custom post template"
},
```

**Note:** Your `{custom-name}` must be in lowercase.

## (2.) Selecting a custom post template

The user can select a custom post template on a per-post basis.

The post-template selector dropdown can be found in the **Other options** section in the **Post settings** sidebar of the post editor.

**Notes:** 

1. For posts that the user doesn't want included in listings (such as  custom posts intended for use as "pages"), they must also toggle the switch in the **Status** section to "Hide this post from listings".
2. Posts hidden from listings will by rendered as part of a website, but they will only be connected to the other webpages if the user adds them to a menu. (E.g. remember to add "About" and "Contact" to the navbar menu.)