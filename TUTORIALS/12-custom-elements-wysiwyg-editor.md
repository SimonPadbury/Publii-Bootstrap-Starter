# Introduction to Publii Theming (Tutorial 12): Adding Custom Elements to the WYSIWYG Editor

> **NOTE:** Not working. Not figured this out yet. 

***

You can add your own custom CSS classes to HTML elements to the posts WYSIWYG editor. 

In the editor you will see the **Formats** dropdown. The content of this dropdown is controlled by the section `"customElements": [] ` in `config.json`.

You (the theme developer) can set:

* What custom format label will be displayed in the dropdown
* What element tag will be used to wrap some text seleted in the editor
* What CSS class(es) will be assigned to that tag

## Example

Here simple setup for one custom format element – using the Bootstrap `.text-muted` class on a `<span>` tag:

```
"customElements": [
 	{
	  "label": "Muted text",
	  "cssClasses": "text-muted",
	  "selector": "span"
	}
]
```
 
**Note:** sets of curly braces `{}` need to be separated by a comma `,`.
