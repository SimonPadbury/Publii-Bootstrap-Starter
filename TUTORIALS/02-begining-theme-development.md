# Introduction to Publii Theming (Tutorial 02): Understanding Publii Themes

Before getting deep into the code, let's have a quick tour of the Publii templating system.

Like other templating systems, Publii themes are comprised of:

1. A set of **partials** – files that are assembled together to build the pages
2. A set of commands that Publii calls **listings** – these obtain the actual content of your posts (or pages) out of the database.


##(1.) Handlebars, Templates and Partials

For HTML templating, Publii makes use of [HandlebarsJS](https://handlebarsjs.com). Publii's rendering engine obeys handlebars code _expressions_ in order to generate your website by joining together the various _partials_ such as header and footer, and by inserting your content (the blog post, images, etc.) into their appropriate places.

While designing and building a Publii template: if you code HTML and then save it as `filename.hbs` – that suffix makes it a Handlebars file. Then, Handlebars expressions can be placed among your HTML code, and these will be obeyed during the website render. 

You can easily recongise Handlebars expressions because they are double-braced, like this: `{{title}}`. That expression tells Publii's Handlebars rendering engine, "swap me for the post title".

### Publii Themes

Publii themes consist of a folder (we call this the _root folder_) containing some Handlebars templates, [JSON](https://www.json.org) configuration files, a `partials/` folder containing template partials, and some other folders and files (e.g. stylesheets, JavaScripts). There is also an image file called `thumbnail.png` – a small screenshot of your theme's homepage, used in the gallery of themes in Publii. 

### Theme Templates

The most essential template in a Publii theme is the index template, filename `index.hbs`. It contains (or, better, it contains partial calls to) the homepage HTML `<head>`, the header, sidebar and footer (if your theme requires them), and the `<main>` area where the _blog listing(s)_ will go. The `index.hbs` is also used for generating other pages, such as the search results page and the "Error 404: page not found" page.

### Theme Partials

Publii is set up to only call partials out of a folder named `partials/`. Partials are called from that folder by the simple Handlebars command, `{{> my-partial }}` where `my-partial` is the filname without the suffix `.hbs` (so, the partial's filename would be `my-partial.hbs`).

For example, I created a new partial called `navbar.hbs` (this is where I will set up the Bootstrap navbar in my Publii theme in **Part 4** of this tutorial series). And in the `header.hbs` partial, I have called `navbar.hbs` using the Handlebars command `{{> navbar}}`. 

This is in `index.hbs`:

```
<!doctype html>
    <html>
    <head> ... </head>
    <body>

        {{> header}}

    </body>
</html>
```

This is in my `partials/header.hbs`:

```
<header>

    {{> navbar}}

    ...

</header>
```

And, so far, my  `partials/navbar.hbs` has this test message inside:

```
<mark>Navbar will go here</mark>
```

So, when I render a preview of the website: if I can see the statement, "Navbar will go here" in the webpage (highlighted yellow by the `<mark>` tags), then I know this future navbar hookup is working and where it will be displayed on the webpage.

When I design themes I like to split them up into lots of partials, each of which I can think about and design as a separate module.

##(2.) Posts and Listings

Publii's posts can be organized into several types – and each type can be looped through and displayed using their own _posts listing_.*

(*For those readers who are familiar with coding themes for WordPress: _listings_ are what are nicknamed "loops" in WordPress.)

In Publii, listings can be used to display, for example:

* Whole posts 
* Excerpts 
* Titles (e.g. use these for lists of links of "recent posts" or "posts by author" in a sidebar or footer), or
* Featured images (e.g. for creating galleries for photo-blogs).

So, listings can be used to get one _entry_ (one post, or page) or more (multiple posts) from your site's database.

[?--CHECK THIS--?] Each of the blog entries in the listing would have a link to the actual single post, which in Publii uses the (default) `post.hbs` template. But the listings differ in what they obtain from the entry: whether they obtain all of it, or just the post title or featured image.

###A Typical Listing

Here is a simplified example of a Publii template listing:

```
{{#each posts}}

<article>
	<header>
		<h2><a href="{{url}}">{{title}}</a></h2>

		By 
        {{#author}}
			<a href="{{url}}" title="{{name}}">{{name}}</a>
        {{/author}}

		<time datetime="{{date createdAt @config.custom.formatDate}}">
			{{date createdAt @config.custom.formatDate}}
		</time>
	</header>

	{{#if excerpt}}
	   <p>{{{excerpt}}}</p>
	{{/if}}
</article>

{{/each}}
```

You can see in the example above:

1. This listing loops through each post in the database and grabs its title, author, creation date and (maybe) the excerpt.

2. The title will be rendered in an HTML `<h2>` and wrapped in a hyperlink that links to the actual single blog post.

3. The author's name will be wrapped in a hyperlink that links to a listing of all posts by that author.

4. The creation date for the post is obtained from the database, and displayed in the format that has been chosen (configured) in the settings.

5. If the post has an excerpt, then it will also be rendered by this listing.

All Publii listings are variations on the above.

###Ordinary Posts Listing

As with all blog generator applications, Publii has one ordinary posts listing. Usually you will want this on your homepage displaying post excerpts, on the template `index.hbs`.

###Featured Posts Listing

You can set some posts as _featured posts_ and these can be looped through on their own featured posts listing. Usually you will using the featured posts listing displaying excerpts, usually on your homepage, on `index.hbs`)

###Posts-by-Author Listing

In Publii, you can name and assign different (unique) authors to posts. And you can set up a 'small' _posts-by-author listing_ – showing the names of (and links to) authors on your blog. The small listing can be placed in a sidebar or footer. When visitors click an author link, they click through to a "Posts by Author" page. This uses the `author.hbs` template containing a 'big' _posts-by-author listing_ e.g. with each entry showing the title/link, an excerpt and a "Read more" link. Click those links to go to the actual single posts.

###Tagged-Posts Listing

In Publii, you can name and assign different tags to posts. And you can set up a 'small' _posts-in-author listing_ – showing the names of (and links to) tags on your blog. The small listing can be placed in a sidebar or footer. When visitors click a tag link, they click through to a "Posts in Tag" page. This uses the `tag.hbs` template containing a 'big' _posts-in-tag listing_ e.g. with each entry showing the title/link, an excerpt and a "Read more" link. Click those links to go to the actual single posts.

##(3.) Hidden Posts

Unlike other web content management systems, Publii has only one main editor – the _Posts_ Editor.  

If you want some posts to be excluded from listings (because you intend for them to be used for _pages_ instead), then in the post editor's **Post Settings** sidebar you simply toggle the switch labeled "Hide this post from listings".

You would want to exclude some posts from the listings if you have a unique purpose for a particular post (e.g. you are using it for your "About us" _page_).

So, you create all your posts or any kind of post or page using this one editor. You can have all the posts and/or pages that you want in a Publii powered website – even though they are all composed as posts in the Posts Editor. 

Some blogs have only a few non-blog pages. Others have many more – so that they can be thought of as a "website with a blog".

**What if you don't want a blog on your website? Can Publii be used for a website that has no blog?** Yes, totally. All you need to do is not have blog listings but only single-page listings. And on your Homepage (called an index page), you use a single-page listing that gets your homepage content instead of "looping through" your posts.

More on using hidden posts for non-blog pages later in this tutorial series.

##(4.) Custom post/page templates

By default, all Publii posts use the `post.hbs` template when they are rendered in full (i.e. not as an excerpt on another page).

You may want to use different templates (and to call different partials) for different types of posts and non-blog pages. In Publii you can create many different [custom post templates](https://getpublii.com/dev/how-to-create-custom-templates/). When you have created a new custom post/page template and registered it in your theme's `config.json`, Publii will know that your new template exists and it will add it to the "Post template" dropdown menu in the Post Editor's **Other Options** sidebar.

Custom templates will be covered in a later tutorial in this series.