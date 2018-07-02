# Introduction to Publii Theming (Tutorial 06): Setting up The Homepage Core Listing and Sidebar

## (1.)The Homepage Core

Within the homepage main section (below the featured posts) I want a wide main column and a sidebar. I will use Bootstrap flexbox column reordering to put the column on the _right_, but it will be _before_ the wide column in the DOM.

To keep things not looking too complicated, I have isolated the "index loop" to a separate partial, called `index-loop.hbs`. The index loop pagination is also a separate partial, called `pagination.hbs`

So, my completed `index.hbs` template code looks like this:

```
{{> head}}

<main>

	{{#if @renderer.isFirstPage}}
   	{{> homepage-hero}}
		{{> featured-posts}}
	{{/if}}

	{{!-- The core --}}
	<div class="container my-5">
		<div class="row">

			{{> sidebar menus.sidebarMenu}}

			<div class="col-sm">
				{{> index-loop}}
				{{> pagination}}
			</div>
 
        </div>
    </div>
	{{!-- End of the core --}}

</main>

{{> footer}}

```


### Setting up a simple sidebar menu

1. Register the sidebar menu in the config file, in the same way as has been done for the navbar menu.

   ```
   "menus": {
   	"navbarMenu": "Navbar menu",
     "sidebarMenu": "Sidebar menu"
   },
   ```

2. If you only need a simple menu (no sub menus), build an "each loop" for 

3. Create a `partials/sidebar.hbs` file and add a Bootstrap column block, a title for the menu (this is obtained by the helper `{{name}}` and a simple "each loop". Add in Bootstrap classes where you need them.

My completed `partials/sidebar.hbs` code looks like this:

```
{{!--
 * SIDEBAR
 * =======
--}}

<div class="col-sm-4 order-sm-last">

    <h3>{{name}}</h3>

    <ul class="nav flex-column">

        {{#each items}}
        <li class="nav-item">
            {{#if link}}
            <a class="nav-link" href="{{menuUrl}}"{{#if title}} title="{{title}}"{{/if}}>{{label}}</a>
            {{else}}
            <span class="nav-link disabled" {{#if title}} title="{{title}}"{{/if}}>{{label}}</span>
            {{/if}}
        </li>
        {{/each}}

    </ul>

</div>
```

### What happens if no sidebar menu has been configured?

In that case, _nothing_ from the partial file will by rendered in the webpage. And, notice that the column layout block `<div class="col-sm-4">` is part of the sidebar partial. How will this affect your page layout?

Since we are using Bootstrap's flexbox `.col-sm` to control the layout, it sill automatically expand to full width if there is no sidebar column – so, the layout will not be broken.

If you are using a different layout system, then Publii's `{{#checkIfNone}}` helper is what you need. The Publii [Starter theme](https://getpublii.com/marketplace/starter-publii-theme.html) uses this helper in its mail column CSS classes as follows:

```
class="main {{#checkIfNone @config.custom.sidebar}}main--full{{/checkIfNone}}"
```

At page render, that will insert the class `main--full` only if there is no sidebar configured in the Menus in Publii. That class can have `width: 100%` or whatever is needed to ensure a full width main column in your design.

###Setting up the index posts listing

Using the index posts listing from the Publii [Starter theme](https://getpublii.com/marketplace/starter-publii-theme.html):

1. Create `partials/index-posts-listing.hbs` and place a call to it (`{{> index-posts-listing}}`) in the appropriate place within the core.

2. Copy the entire index `#each` code from the Starter theme index template into your partial `index-posts-listing.hbs`.

3. Rearrange your index `#each` code to suit your design if you need to, and add in some Bootstrap Jumbotron classes.

My completed `partials/index-posts-listing.hbs` code looks like this:

```
{{!--
 * INDEX POSTS LISTING
 * ===================
--}}

{{#each posts}}

    <article class="mb-5">

        {{#featuredImage}}
            {{#if url}}
                <a href="{{../url}}">
                    <img
                        src="{{url}}"
                        sizes="{{sizes.listing}}"
                        srcset="{{srcset.listing}}"
                        alt="{{alt}}">
                </a>
            {{/if}}
        {{/featuredImage}}

        <header>
            <h2>
                <a href="{{url}}">{{title}}</a>
            </h2>
            <p class="small">
                By 
                {{#author}}
                <a href="{{url}}" title="{{name}}">{{name}}</a>
                {{/author}}
                on
                <time datetime="{{date createdAt 'YYYY-MM-DDTHH:mm'}}">
                    {{date createdAt @config.custom.formatDate}}
                </time>
            </p>
        </header>

        {{#if excerpt}}
            <section>
                <p>{{{excerpt}}}</p>
            </section>
        {{/if}}

    </article>

{{/each}}
```