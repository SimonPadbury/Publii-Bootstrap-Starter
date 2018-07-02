# Introduction to Publii Theming (Tutorial 10): Custom Config: User-Settable CSS classes

You can add entries in the `"customConfig": []` block of the theme config file (`config.json`) that enable users to insert or select CSS styles in the theme.

## Example: adding a navbar color control

In `config.json` add dropdown-select a controller unit for `"navbarBackgroundColor"`:

```
{
	"name": "navbarBackgroundColor",
	"label": "Navbar background color",
	"group": "Navbar",
	"value": "navbar-dark bg-primary",
	"type": "select",
	"options": [
		{
			"label": "Primary",
			"value": "navbar-dark bg-primary"
		},
		{
	   	"label": "Secondary",
		   "value": "navbar-dark bg-secondary"
		},
		{
		   "label": "Success",
		   "value": "navbar-dark bg-success"
		},
		...
	]
},
```

Then in the navbar HTML (in this example, in `navbar.hbs`) simply add `{{@config.custom.navbarBackgroundColor}}` within the navbar CSS classes, in order to insert the _value_ of the user's selection:

```
<nav class="navbar {{@config.custom.navbarBackgroundColor}} navbar-expand-lg">
	...
</nav>
```

(Also in the Publii Bootstrap starter theme, I have done something similar for controlling the navbar search form button color.)
