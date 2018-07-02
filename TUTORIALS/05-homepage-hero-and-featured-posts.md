# Introduction to Publii Theming (Tutorial 05): Setting up The Homepage Hero and Featured Posts

I have wrapped the entire main part of the index template `index.hbs`  in a `<main>` tag. I have deliberately not given this a Bootstrap `.container`class because I want to place a hero jumbotron inside this, that spans the entire width of the viewport.

```
{{> header}}

<main>

	{{!-- The main stuff will go in here --}}

</main>

{{> footer}}
```

I like to separate out components into their own [partials](https://getpublii.com/dev/introduction-partials/). The Publii [Starter theme](https://getpublii.com/marketplace/starter-publii-theme.html) already has partials for the website **header** and **footer**. And I have created partials, for example, for the **homepage-hero** and and **featured-posts** components. More on these below. 

`index.hbs` will be used as a template for a number of different types of page on your website. But what if you have some components that you want on the frontpage (homepage) but not on another page? Publii has a [global variable](https://getpublii.com/dev/introduction-global-variables/) named `@renderer` that can be used in Handlebars code (global variables are prefixed `@`). The Publii rendering engine obeys  `#if` conditionals that are addressed to the `@renderer`:

```
{{> header}}

<main>

{{#if @renderer.isFirstPage}}
	{{> homepage-hero}}
	{{> featured-posts-listing}}
{{/if}}

{{!-- The core: other main stuff will go in here --}}

</main>

{{> footer}}
```

**Note:** What I'm here calling the _core_ (i.e. heart) of the webpage is where the most important stuff on the page will be. The core may be the entire _main_ section on some pages – i.e. everything between the webpage _header_ and _footer_. But in the homepage design in this tutorial, the main section has the homepage hero and the featured posts sections in it too.

## (1.) Setting up a _Homepage Hero_ (Bootstrap Jumbotron) Section

Using the homepage hero from the Publii [Starter theme](https://getpublii.com/marketplace/starter-publii-theme.html):

1. Create `partials/homepage-hero.hbs` and place a call to it in the appropriate place within the `#if @renderer.isFirstPage` conditional on the index template.

2. Copy the homepage hero code from the Starter theme index template into your partial `homepage-hero.hbs`. 

3. Rearrange the homepage hero code to suit your design if you need to, and add in some Bootstrap Jumbotron classes.

My finished `partials/homepage-hero.hbs` code looks like this:

```
{{!--
 * HOMEPAGE HERO
 * =============
--}}

{{#checkIfAny @config.custom.uploadHero @config.custom.textHero}}

<div class="jumbotron jumbotron-fluid">
	<div class="container">
	
	{{#if @config.custom.uploadHero}}
	<img
		src="{{@config.custom.uploadHero}}"
		{{responsiveSrcSet @config.custom.uploadHero}}
		{{responsiveSizes}}
		alt="{{@config.custom.uploadHeroAlt}}"
		{{#if @config.custom.uploadHeroTitle}}
			title="{{@config.custom.uploadHeroTitle}}"
		{{/if}}
		class="hero-image">
	{{/if}}
	
	{{#if @config.custom.textHero}}
	<div class="hero-text">
	{{{@config.custom.textHero}}}
	</div>
	{{/if}}
	
	</div>
</div>

{{/checkIfAny}}
```

## (2.) Setting up a _Featured Posts_ Listing

Using the homepage hero from the Publii [Starter theme](https://getpublii.com/marketplace/starter-publii-theme.html):

1. Create `partials/featured-posts.hbs` and place a call to it in the appropriate place within the `#if @renderer.isFirstPage` conditional on the index template.

2. Copy the featured posts `#each` code from the Starter theme index template into your partial `homepage-hero.hbs`.

3. Rearrange the homepage hero code to suit your design if you need to, and add in some Bootstrap classes.

In my theme, the featured posts (excerpts) are in a Bootstrap cards arranged in a flexbox [card deck](https://getbootstrap.com/docs/4.1/components/card/#card-decks). So the cards will have equal height, and their width will expand to fill the available space: full width if one featured post, half width if two, and third width if three featured posts.

My finished `partials/featured-posts.hbs` code looks like this:

```
{{!--
 * FEATURED POSTS LISTING
 * ======================
--}}

{{#if featuredPosts}}

<section class="container featured-posts mb-4">
	<p class="text-center small border-bottom pb-1">Featured:</p>

	<div class="card-deck">

		{{#each featuredPosts}}
		{{!-- With this we can specify how many featured posts are displayed. --}}
		{{#checkIf @index '<' 3}}

		<article class="card bg-light">
		
			{{#featuredImage}}
				{{#if url}}
				<a href="{{../url}}">
					<img
						class="card-img-top"
						src="{{url}}"
						sizes="{{sizes.listing}}"
						srcset="{{srcset.listing}}"
						alt="{{alt}}">
				</a>
				{{/if}}
			{{/featuredImage}}
	
			<div class="card-body">
				<h5 class="card-title mb-1"><a href="{{url}}">{{title}}</a></h5>
				<h6 class="small muted mb-3">
					<time datetime="{{date createdAt 'YYYY-MM-DDTHH:mm'}}">
					{{date createdAt @config.custom.formatDate}}
					</time>
				</h6>
				{{#if excerpt}}
				<p class="card-text">{{{excerpt}}}</p>
				{{/if}}
				<a href="{{url}}">Read more <i class="far fa-arrow-right"></i></a>
			</div>

		</article>{{!-- .card --}}
	
	{{/checkIf}}
	{{/each}}

	</div>
</section>{{!-- .featured-posts --}}

{{/if}}
```

**Note:** the triple-braces around the  `{{{excerpt}}}` are necessary so that the ellipsis code `…` is _not escaped_, so that it is rendered correctly in the HTML as three dots. See [https://publii.ticksy.com/ticket/1549949/](https://publii.ticksy.com/ticket/1549949/) for more information.

