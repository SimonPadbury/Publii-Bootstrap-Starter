# Introduction to Publii Theming (Tutorial 03): Adding Stylesheets and JavaScripts

Before doing much modification of the Starter templates, we need to remove the content of the stylesheet (called `main.css`) and then add Bootstrap (CSS and JS) jQuery, Popper (two JavaScripts that power Bootstrap JS) and Font Awesome 5 JS.

All these files can be used two ways:

1. Download and place these files in your theme and link to them there;
2. Link to these files on a [Content Delivery Network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network).

We will be going down the CDN route.

##(1.) Disengage the "Starter" Stylesheets

The theme stylesheets are found in `assets/css/`. The front end stylesheet is always called `main.css`. Supposing that you may need the content of `main.css` in future, it may be best to duplicate the stylesheet and name it e.g. `main-ORIGINAL.css` – and then you are at liberty to delete the content of `main.css`. Keep this filesheet empty but existent, so that when you do your own desinging, you can add your styles into it.

Publii will [minify](https://en.wikipedia.org/wiki/Minification_(programming)) whatever is in `main.css`, outputting a file named `style.css` in the same folder.

When Publii bulds the website (preview or deployable version), it will link to `style.css` in the HTML `<head>` of your web posts/pages. In the `partials/header.hbs` the link to this stylesheet is a handlebars link:

```
<link rel="stylesheet" href="{{css "style.css" }}">
``` 

**Tip:** During theme development, if you wish to temporarily disengage this stylesheet you can use Handlebars comments to "comment-out" this line, so that it is not rendered:

```
{{!-- <link rel="stylesheet" href="{{css "style.css" }}"> --}}
```

Publii is configured to look in your theme's `assets/css/` folder for stylesheets.

There is also a WYSIWYG editor stylesheet in the same folder, named `editor.css`. We will not change this at present. When we are ready to make the future editor style look like the front-end style, we may and a Bootstrap CSS `@import` at the top of this file. But that is for a later tutorial in this series.

##(2.) Add the Stylesheets and JavaScripts

In `partials/header.hbs`, just before the link to `style.css`:

1. Add **Font Awesome 5.0.13** (from CDN).

	```
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	```

2. Add **Bootstrap 4.1.1** CSS link from CDN to `parials/header.hbs`, before the theme link to `style.css`.

	```
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	```

3. In `partals.footer.hbs`, just before the the Handlebars link to your theme's `scripts.min.js` (this JavaScript will be explored later in this tutorial series), add the following links to jQuery, Popper and Bootstrap JS:

	```
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
	```
	
##(3.) Preview / Test your Theme

In Publii, click the **Preview your changes** button. Publii will then try to render a preview version of your website and open (or refresh) the proview in your preferred web browser.

Don't worry about what the website looks like yet – we have not edited any of the templates. At this point, we're just wanting to verify that the stylesheets and scripts are hooked up correctly.

You can use the browser inspector to view the source code of any of your web pages, to see whether these stylesheets and JavaScripts are being linked.