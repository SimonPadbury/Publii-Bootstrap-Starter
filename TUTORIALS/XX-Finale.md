# Introduction to Publii Theming (Tutorial XX): Finale)

Development on a Publii themes takes place on an _installed_ theme within the test website that you use during development: `sites/{website name}/input/themes/{your theme}`.

## Renaming, (Re-)Installing and Sharing Themes

1. Rename the theme root folder. E.g. I used `bootstrap-starter`. Do not use spaces (use hyphens or underscores instead).

2. Use the same folder name to rename the theme in the config file. You must include any hyphens or underscores. You can capitalize the words as appropriate for your theme name. E.g. I have used:

	```
	{
		"name": "Bootstrap-Starter",
		"version": "0.9",
		"author": "Simon Padbury",
		. . .
	}
	```
	
	**Publii uses this theme name in paths when it looks for assets and the `______.lang.json`) file**

3. Use the same folder-name to rename the `______.lang.json` file.

4. Test everything works by doing this:
	1. Copy your entire theme root folder into `Publii/themes/`
		1. **Note:** instead of deleting your theme (3. below), you can advance the version number in your `Publii/themes/{your theme}` config file.
	2. Switch to a `different` theme
	3. Delete your theme from `sites/{website name}/input/themes/` (if you did not do 4.1.1)
	3. (Re-)install your theme

That should all work OK. 

Now that you have proved to your own satisfaction that your theme is transportable and installable, you will be confident to share ith with other people.