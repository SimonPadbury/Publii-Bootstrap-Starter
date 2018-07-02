# Introduction to Publii Theming (Tutorial 00): Introduction

> This tutorial series focuses on learning how Publii themes work. 
> 
> I wrote these tutorials alongside my own learning how to re-factor the Publii theme [Starter](https://getpublii.com/marketplace/starter-publii-theme.html) by adding in [Bootstrap 4](https://getbootstrap.com) and [Font Awesome 5](http://fontawesome.com/), creating a **Bootstrap 4 / Font Awesome 5 Starter Theme for Publii** for use as a basis in future projects.
> 
> This is an unfinished work-in-progress.
> 
> (Caveat: The actual accompanying `bootstrap-starter` theme may sometimes be an improvement over what is in these tutorials, when I have updated the theme but not synced the tutorial.)

***


[Publii](https://getpublii.com) is a static website content management system and rendering engine, with built-in FTP synchronization.

**Static websites** are pre-built before uploading (sometimes called "publishing") to their public server location – their place on the internet where the world can visit them. Historically, static websites have been crafted entirely by hand, composing and editing web-languages (HTML, CSS, etc.) and adding images.

**[Static site generators (SSG)](https://www.staticgen.com)** have also been developed. These are usually "scripts" that are installed and run via a [command-line interface (CLI)](https://en.wikipedia.org/wiki/Command-line_interface) on personal computers – they don't have a [graphical user interface](https://en.wikipedia.org/wiki/Graphical\_user\_interface). Therefore they are almost exclusively used by web developers – although some SSGs can be installed and run on servers and they can be attached to an "admin area" graphical user intergace (GUI) for non-developers to use. As such, these have essentially evolved into web content management systems.

**[Content management systems (CMS)](https://www.capterra.com/content-management-software/#infographic)** are traditionally for those websites where the content is added via an online, password-protected "admin area" (also called "dashboard" or "back end"). The most popular  CMS today is [WordPress](https://wordpress.com). CMSs are uploaded and installed on a website's server. The website "front end" – the public website – is served by the CMS by combining the content usually in database with a set of templates (often called a "theme").

Publii is like a CMS in that it has an admin area in which you can compose your posts and pages, and build your navigation menus, etc. However it is not installed on a server, but on your computer. Web developers can design website themes for Publii, and non-developers can compose website contents in Publii's admin area – all without using a CLI. 

You compose your blog posts (or pages) in Publii's WYSIWYG Post Editor. Publii saves your content in a [SQLite database](https://www.sqlite.org/index.html). 

[You probably never need to touch this database – Publii handles everything. But if you do need to, or if you would simply like to look into the database and see what's in there, you can use [http://sqlitebrowser.org](http://sqlitebrowser.org).]

Choose or develop a theme, compose the posts (and/or pages), set up the menus and connect anything else you need ([Disqus](https://disqus.com) comments, social media accounts, [Google Custom Search](https://cse.google.com/cse/)) and **Publii will render the website for you** to upload where you want it to go.

Publii has its own built-in [FTP/SFTP/FTPS](https://getpublii.com/docs/server-configuration.html) uploader, that you can use. But you can also do a "sync to folder" on your own computer, and then deploy your website any other way without using Publii.