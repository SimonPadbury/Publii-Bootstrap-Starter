# Introduction to Publii Theming (Tutorial 01): Introduction and Theme Initiation

> This tutorial series focuses on learning how Publii themes work. I wrote these tutorials alongside my own learning how to re-factor the Publii theme [Starter](https://getpublii.com/marketplace/starter-publii-theme.html) by adding in [Bootstrap 4](https://getbootstrap.com) and [Font Awesome 5](http://fontawesome.com/), creating a **Bootstrap 4 / Font Awesome 5 Starter Theme for Publii** for use as a basis in future projects.

***

## Introduction

[Publii](https://getpublii.com) is a static website content management system and rendering engine, with built-in FTP synchronization.

**Static websites** are pre-built before uploading (sometimes called "publishing") to their public server location – their place on the internet where the world can visit them. Historically, static websites have been crafted entirely by hand, composing and editing web-languages (HTML, CSS, etc.) and adding images.

**[Static site generators (SSG)](https://www.staticgen.com)** have also been developed. These are usually "scripts" that are installed and run via a [command-line interface (CLI)](https://en.wikipedia.org/wiki/Command-line_interface) on personal computers – they don't have a [graphical user interface](https://en.wikipedia.org/wiki/Graphical\_user\_interface). Therefore they are almost exclusively used by web developers – although some SSGs can be installed and run on servers and they can be attached to an "admin area" graphical user intergace (GUI) for non-developers to use. As such, these have essentially evolved into web content management systems.

**[Content management systems (CMS)](https://www.capterra.com/content-management-software/#infographic)** are traditionally for those websites where the content is added via an online, password-protected "admin area" (also called "dashboard" or "back end"). The most popular  CMS today is [WordPress](https://wordpress.com). CMSs are uploaded and installed on a website's server. The website "front end" – the public website – is served by the CMS by combining the content usually in database with a set of templates (often called a "theme").

Publii is like a CMS in that it has an admin area in which you can compose your posts and pages, and build your navigation menus, etc. However it is not installed on a server, but on your computer. Web developers can design website themes for Publii, and non-developers can compose website contents in Publii's admin area – all without using a CLI. 

You compose your blog posts (or pages) in Publii's WYSIWYG Post Editor. Publii saves your content in a [SQLite database](https://www.sqlite.org/index.html). 

[You probably never need to touch this database – Publii handles everything. But if you do need to, or would simply like to look into the database and see what's in there, you can use [http://sqlitebrowser.org](http://sqlitebrowser.org).]

Choose or develop a theme, compose the posts (and/or pages), set up the menus and connect anything else you need ([Disqus](https://disqus.com) comments, social media accounts, [Google Custom Search](https://cse.google.com/cse/)) and **Publii will render the website for you** to upload where you want it to go.

Publii has its own built-in [FTP/SFTP/FTPS](https://getpublii.com/docs/server-configuration.html) uploader, that you can use. But you can also do a "sync to folder" on your own computer, and then deploy your website any other way without using Publii.

---

## Initiating a New Publii Theme

1. Publii creates a `Publii/` folder within `My Computer/` (on a PC) or `Documents/` (on a Mac) and in it you will find 4 folders:

   ```
    Publii/
        config/
        logs/
        sites/
        themes/
   ```

	Your websites will be generated to the `sites/` folder.

2. In `themes/`, copy the entire `starter/` theme folder and rename your copy `starter2/`.

3. The `config.json` file begins with the _theme declaration_ info. Edit this to your new theme's declarations. E.g.

   ```
    {
        "name": "Starter2",
        "version": "0.0.0.1",
        "author": "TidyCustoms, modified by Simon Padbury",
   
    ...all the other config stuff follows this...
   ```

4. The Publii Starter theme contained its own translation-ready JSON file, `starter.lang.json`. When I chaneged the theme name to Starter2 (and the theme root folder name to `starter2`), text was no longer fetched from this file: instead the error message **[MISSING TRANSLATION]** was injected into the rendered preview. But when I renamed this JSON file to `starter2.lang.json` the problem was resolved.

5. In **Publii / Settings**, you can now use the **Select theme** dropdown menu to select your new theme. (You may need to click the  **Save settings** button so that Publii is triggered to search the `themes/` folder again and it will find your new theme and add it to the dropdown menu before you will be able to select it.

6. Click the **Save & preview** so that Publii generates a localized preview version of your website into your `sites/` folder. That preview* will be wearing your new theme. (The preview will be in `sites/{website name}/preview/`. In my case, this is `sites/experimental/preview/`.)

### Publii Stores Themes in Two Places

- `themes/` (you were introduced to this above)

- `sites/{website name}/input/themes`

When you [_install_ a theme](https://getpublii.com/dev/how-to-install-a-new-theme/) into Publii, it goes into `themes/`. When you _select_ a theme (from your installed themes) for your website to wear, then Publii will copy that theme into your `sites/{website name}/input/themes`.

### Rendering a Website

Publii's website rendering process (content + theme = website) is done every time you click:

- **Preview your website** (a link on admin sidebar) or **Save & Preview** (a button in Themes)

- **Sync your website** (a link on the admin sidebar)

So, Publii can render a website in two ways, which get placed in two folders:

- Website previews go to `Publii/sites/{website name}/preview`

- Website sync outputs go to `Publii/sites/{website name}/output`

```
Publii/
     config/
     logs/
     sites/
          input/
          output/ 
          preview/
     themes/
```

These two rendered sites are almost the same – the difference is the **file path** of the linked stylesheets, scrips and images. 

* The file paths in website previews go to places on your personal computer's file system – `file://...`

* The file paths in website synced outputs – `http://{website domain name}/...`

So, you can't upload a website preview to a server.

### Developing Publii Themes

During theme development, you need to edit the theme that your experimental website is actually wearing – in my case, this is `sites/experimental/input/themes/starter2`.

You can edit all code files in the theme (`.hbs`, `.css`, `.js` and `.json`) using a code editor.

Edit a theme file in your code editor, then click **Preview your website** (a link on admin sidebar) in Publii and it will render your website again, incorporating your theme edits. Publii will also automatically open your website preview in your browser – or it will refresh your browser tab showing the preview, if your browser is opened already.