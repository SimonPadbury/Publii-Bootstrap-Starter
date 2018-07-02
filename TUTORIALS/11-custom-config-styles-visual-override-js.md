# Introduction to Publii Theming (Tutorial 11): Custom Config: User-Settable Styles and `visual-override.js`

As part of Publii's website render, it copies the content of `assets/css/main.css` and minifies all these styles and outputs the the stylesheet `assets/css/style.css`. It can also append to it some **user-generated** CSS overrides. 

(It is only the minified stylesheet that is linked in the `<head>` of pages in the rendered website.)

Custom configuration of user-defined CSS overrides is to be done in `config.json`, in the section `"customConfig": []` – the same way as for other theme customizations. But the CSS overrides then need to be outputted to the CSS file – and this is handled by a JavaScript file in the theme root folder, named `visual-overrides.js`. 

You, the theme developer, have control of the outputted overrides because the user's custom settings are stored in variables that you get to define.

Here's how you do it:

## (1.) Start with an empty visual override generator

Delete the content of `visual-override.js` (maybe bank it first). Then place in this script an empty `generateOverride` generator:

```
/*
 * Custom function used to generate the output of the override CSS
 */

var generateOverride = function (params) {
	let output = '';

	// Your optional overrides will go in here

   return output;
}

module.exports = generateOverride;
```

At this stage, this generates an empty output – `output = '';`. Later, your overrides will be appended to this output using `output += ...` (i.e. they will be the added to the end of `assets/css/style.css`, after all the style rules already added by `assets/css/main.css`).

## (2.) Add a controller unit to the custom config file

You need to provide the theme user with a control, in which they can input (or select) a style that will be used in the override. This can be a simple text input. For colors, Publii supplies a color-picker that you can utilize.

For example: a background-color picker. (If it doesn't exist, htis will also create a **Custom settings** tab named **Style overrides**.)

```
"customConfig": [
	{
		"name": "siteBackgroundColor",
		"label": "Site background color",
		"group": "Style overrides",
		"value": "#ffffff",
		"type": "colorpicker"
	},
	...
]
```

Here I have initially set the website background color as white `#ffffff`. This value will be stored in a parameter (variable) that I have named `"siteBackgroundColor"`. And I have set the the type of this controller unit to `"colorpicker"` so that Publii will add its color-picker to this unit.

## (2.) For outputting this user-set _value_, add an `if` statement to the visual override script 

Publii needs to know what to do with the value in this variable. So, in the override generation in `visual-overrides.js`, add your first `if` statement:

```
/*
 * Custom function used to generate the output of the override CSS
 */

var generateOverride = function (params) {
	let output = '';
	
	if(params.siteBackgroundColor !== '#ffffff') {
    	output += `
    	body {
			background-color: ${params.siteBackgroundColor};
		}`;
	}
	
	return output;
}

module.exports = generateOverride;
```

If the `"siteBackgroundColor"` still has the value white (`#ffffff`), there is no need to output an override. If the site background color parameter does not equal white (`!== #ffffff`), then this script will append this `body {}` style rule to the outputted CSS in `assets/css/style.css`. And when it does append this style rule, it will recieve the user's chosen value for its background-color.

## Different types of controller unit for CSS overrides

Use different config controller unit types for different style rules:

* `"type": "colorpicker"` – for input of colors and background-colors.

* `"type": "select"` – for selecting only those inputs that you (the developer) have built into a set of `"options": []`.

* `"type": "text"` – for input of text strings that can contain any (string) value.

In situations where you need to give an explanation to the user, you can add a `"note"` to the config controller unit.

Example config controller unit with _no_ initial value set (but developers can also pre-set a value in the same way):

```
{
	"name": "somethingMaxWidth",
	"label": "Something max-width",
	"group": "Style Overrides",
	"note":	"Use of REM units recommended but you can also use others (px, vw, %)",
	"value": "",
	"type": "text"
},
```

Its corresponding part in the visual override script:

```
if(params.somethingMaxWidth !== '') {
    output += `
    .something {
        max-width: ${params.somethingMaxWidth};
    }`;
}
```

Here, if `params.somethingMaxWidth ` _doesn't_ have no value (i.e. is not empty), then the CSS class `.something {}` style rule will be appended (with its max-width being set to the value of `somethingMaxWidth`.


## Advice: Don’t override Bootstrap CSS this way

Multiple style rules can be appended to the the stylesheet in this way – I leave it to your imagination!

However, in a Publii theme built on a CSS framework, such as my Bootstrap 4 starter theme, you may be making life unnecessarily diffifult for yourself if you use CSS overrides to modify the styles of the framework. (E.g. think about what is really involved if you wish your theme user to be able to override the colors or all _primary_ buttons, alerts, tables, utilities etc.)

So, use CSS overrides only for providing optional modification of _your_ theme styles in `assets/css/main.css`.

Bootsrap 4 itself can be modified by precompiling from the SCSS files (see [https://getbootstrap.com/docs/4.1/getting-started/theming/](https://getbootstrap.com/docs/4.1/getting-started/theming/)), or by using a pre-themed alternative such as one of the options in [Bootswatch](https://bootswatch.com).

