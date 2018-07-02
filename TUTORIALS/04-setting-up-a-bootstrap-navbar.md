# Introduction to Publii Theming (Tutorial 04): Setting up a Bootstrap Navbar

We will now set up the Bootstrap navbar in the template partial file we created in **Tutorial 2**, `partials/navbar.hbs`.

First, copy the outer structure of the navbar from the [navbar in the Bootstrap docs](https://getbootstrap.com/docs/4.1/components/navbar/) -- and set up the "navbar-brand" URL and name using the Handlebars commands as follows:

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="{{@website.url}}">{{@website.name}}</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">

            <!-- One navbar menu will go here -->

        </ul>
        
        <!-- The navbar search form will go here -->
    </div>
</nav>

<!-- The navbar search JavaScript will go here -->
```

**Note\:**  Bootstrap havbars can take two menus (left and right), but in this example I will build only one menu. I am using the [utility class](https://getbootstrap.com/docs/4.1/utilities/spacing/) `.ml-auto` to push the menu to the right.

Then in the header I called `{{> navbar }}` and rendered a preview. All is working OK: 

1. The partial was called and the navbar appeared. 
2. Publii also obeyed the Handlebars commands to get my test website's Brand and "homepage" hyperlink in their correct places.

## (1.) Registering menus

You need to register the navbar menu in your theme's config file, `config.json`. 

1. In `config.json`, find the place where it says `"menus"`. There you will see the Publii [Starter](https://getpublii.com/marketplace/starter-publii-theme.html) theme's **main menu** is already registered.

	```
   "menus": {
       "mainMenu": "Main menu"
   },
   ```

   You can register your Bootstrap navbar menu by copying and modifying what was already done for the main menu. For this tutorial series, I am going to set up (at least) two menus – this navbar menu and a sidebar menu (for use in a later tutorial). So instead of the original main menu I registered these two menus, separated by a comma `,`:

   ```
   "menus": {
       "navbarMenu": "Navbar menu",
       "sidebarMenu": "Sidebar menu"
   },
   ```

2. Understand that the config file configures the theme _when the theme is selected in the **Site Settings**_. Therefore, you will need to switch to another theme temporarily (skip the thumbnail regeneration), and then switch back to the theme that you are developing, in order for the new configurations to take effect.

	Only after doing these two steps will your new menu appear in Publii's **Menus**, in the dropdown where you can assign a Publii menu to it.
	
That's all the information that Publii needs to know for **where to build** your navbar menu -- it knows to build the `navbarMenu` in `navbar.hbs` (which is in the header of your webpage). Now we need to set up the menu in `navbar.hbs so that Publii knows **how to build** the menu.

## (2.) Setting up a simple navbar menu

Here is all you need for the menu `#each` listing if you will have only one level of Bootstrap navbar menu items (no sub-menus):

```
{{#each items}}

<li class="nav-item">

	{{#if link}}
	<a class="nav-link" href="{{menuUrl}}"{{#if title}} title="{{title}}"{{/if}}>{{label}}</a>
	{{else}}
	<span class="nav-link disabled" {{#if title}} title="{{title}}"{{/if}}>{{label}}</span>
	{{/if}}

</li>

{{/each}}
```

**Explanation:** for each menu item assigned to this menu in Publii, this adds a `<li class="nav-item">` containing either an `<a class="nav-link">` or a `<span class="nav-link disabled">`. (The disabled links are used for "dividing lines" in your menu).

## (3.) Setting up a complex navbar menu (with Bootstrap dropdowns)

What about having the capability for dropdown menus within the navbar menu -- so that sub-menus (child menus) can be displayed? The Bootstrap navbar can handle these level-2 menus (but not level-3 or beyond). And this (below) shows you how to set it up in a Publii template.

```
{{#each items}}
	{{#if items}}

	<li class="nav-item dropdown">

		{{#if link}}
    	<a class="nav-link dropdown-toggle" href="{{menuUrl}}"{{#if title}} title="{{title}}"{{/if}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{label}}</a>
		{{else}}
		<span class="nav-link disabled dropdown-toggle" {{#if title}} title="{{title}}"{{/if}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{label}}</span>
    	{{/if}}

    	<div class="dropdown-menu dropdown-menu-right">
		{{#each items}}
			{{#if link}}
			<a class="dropdown-item" href="{{menuUrl}}"{{#if title}} title="{{title}}"{{/if}}>{{label}}</a>
			{{else}}
			<span class="dropdown-item" {{#if title}} title="{{title}}"{{/if}}>{{label}}</span>
			{{/if}}
		{{/each}}
		</div>

	</li>

	{{else}}

	<li class="nav-item">

		{{#if link}}
		<a class="nav-link" href="{{menuUrl}}"{{#if title}} title="{{title}}"{{/if}}>{{label}}</a>
		{{else}}
		<span{{#if title}} class="nav-link disabled" title="{{title}}"{{/if}}>{{label}}</span>
		{{/if}}

	</li>

	{{/if}}
{{/each}}
```

(Publii can handle level-3 menus, and beyond. But you will have to do without that possibility if you are using a Bootstrap navbar -- unless you modify it. But that is beyond the scope of this tutorial.)

## (4.) Adding a Search Form to the Navbar

The Publii [Starter](https://getpublii.com/marketplace/starter-publii-theme.html) theme comes with a simple search form that can be connected to [Google Custom Search](https://cse.google.com/cse/). This form can easily be copied, relocated and modified (e.g. adding in some Bootstrap form classes and utility classes).

The search form placeholder text comes from the `{your_theme_name}.lang.json` file.

I also included a button with a [Font Awesome 5 search icon](https://fontawesome.com/icons/search?style=solid) (magnifying glass) in it.

Here's the search form code that I finished with, in the navbar:

```
<form action="{{@website.searchUrl}}" class="form-inline my-2 my-lg-0">
    <input
      type="search"
    name="{{@config.custom.searchParam}}"
    placeholder="{{ translate 'search.placeholder' }}"
    class="form-control form-control-sm mr-sm-1"/>
  <button class="btn btn-outline-secondary btn-sm my-1 my-sm-0" type="submit">
      <i class="fas fa-search"></i>
  </button>
</form>
```

You will also need to copy across the Google Custom Search form scripts (as modified for Publii) from the Starter theme. I included these in the partial `menu-navbar.hbs`, below the navbar itself:

```
<script>
    (function () {
        var cx = '{{@config.custom.searchId}}';
        var gcse = document.createElement('script');
        gcse.type  = 'text/javascript';
        gcse.async = true;
        gcse.src   = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();
</script>

<gcse:searchresults-only></gcse:searchresults-only>
```

You will also need to [follow the instructions to set up Google Custom Search](https://getpublii.com/docs/search-configuration.html) from the Publii documentation.
