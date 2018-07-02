# Introduction to Publii Theming (Tutorial 14): Files, Assets and Images

In the `config.json` **files** section, the theme developer can set: 

* What files it should ignore, i.e. not copy to the website (preview or actual), such as `*.scss` files and MacOS `.DS_store` files.
* The path (location) of your `assets/` and `partials/` folders.
* What image sizes the renderer should generate from uploaded images (for thumbnails, featured images, responsive images, and option images).

These settings enable the theme developer to modify the Publii website renderer's behaviour.

```
"files": {
	"ignoreAssets": ["sass", ".DS_Store"],
	"assetsPath": "assets",
	"partialsPath": "partials",
	"responsiveImages": {
		...
	}
},
```

Image generation pappens when a theme is selected in Publii, when the user clicks "Regenerate thumbnails".

## Responsive image generation

Publii generates images of various sizes for use in various places and at various viewport widths.

In my Publii Bootstrap Starter Theme I have set sizes as follows:

* xs = 350px = width of `col-3` in the Bootstrap 4 grid
* sm = 540px = width of `col-6` in the Bootstrap 4 grid
* md = 730px = width of `col-9` in the Bootstrap 4 grid
* lg = 1100px = width of `col-12` in the Bootstrap 4 grid

```
"contentImages": {
    "sizes": "(max-width: 1110px) 100vw, 768px",
    "dimensions": {
        "xs": {
            "width": 350,
            "height": 350,
            "crop": true
        },
        "sm": {
            "width": 540,
            "height": "auto"
        },
        "md": {
            "width": 730,
            "height": "auto"
        },
        "lg": {
            "width": 1100,
            "height": "auto"
        }
    }
},
"featuredImages": {
    "sizes": {
        "post": "(max-width: 1100px) 100vw, 1100px",
        "amp": "(max-width: 768px) 100vw, 768px",
        "listing": "(min-width: 350px) 50vw, 100vw"
    },
    "dimensions": {
        "xs": {
            "width": 350,
            "height": 350,
            "crop": true,
            "group": "post,listing,amp"
        },
        "sm": {
            "width": 540,
            "height": "auto",
            "group": "post,listing,amp"
        },
        "md": {
            "width": 730,
            "height": "auto",
            "group": "post,amp"
        },
        "lg": {
            "width": 1100,
            "height": "auto",
            "group": "post"
        }
    }
},
"optionImages": {
    "sizes": "(max-width: 1100px) 100vw, 1100px",
    "dimensions": {
        "xs": {
            "width": 350,
            "height": 350,
            "crop": true
        },
        "sm": {
            "width": 540,
            "height": "auto"
        },
        "md": {
            "width": 730,
            "height": "auto"
        },
        "lg": {
            "width": 1100,
            "height": "auto"
        }
    }
}
```

Some of these settings are used in the `scrset` and `data-scrset` for images in `<img>` tags. Example:

```
<img 
	class="" 
	src="https://{{yourwebsite.com}}/media/posts/11/responsive/img1-xs.jpg" 
	data-srcset="{{yourwebsite.com}}/media/posts/11/responsive/img1-xs.jpg 350w, 
		https://{{yourwebsite.com}}/media/posts/11/responsive/img1-sm.jpg 540w,
		https://{{yourwebsite.com}}/media/posts/11/responsive/img1-md.jpg 730w,
		https://{{yourwebsite.com}}/media/posts/11/responsive/img1-lg.jpg 1100w" 
	data-sizes="auto" 
	alt="Alternative text" 
	sizes="768px" 
	srcset="//{{yourwebsite.com}}/media/posts/11/responsive/img1-xs.jpg 350w,
		https://{{yourwebsite.com}}/media/posts/11/responsive/img1-sm.jpg 540w,
		https://{{yourwebsite.com}}/media/posts/11/responsive/img1-md.jpg 730w,
		https://{{yourwebsite.com}}/media/posts/11/responsive/img1-lg.jpg 1100w">
```