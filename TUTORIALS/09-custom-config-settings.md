# Introduction to Publii Theming (Tutorial 09): Custom Config Settings

These are _site wide_ settings that you want theme users to be able to modify in the Publii Admin GUI. Users will find these settings in **Theme > Custom Settings**. This is where you can have settings that are unique to your theme. 

These custom settings are controlled in the theme `config.json` file, in the section named `customConfig`. _Everything in this section optional_.

```
"customConfig": [

],
```

If you are creating a very simple theme, you don't need to have this section at all (And Publii will not show any section for **Settings > Custom settings**.

The custom config section of `config.json` is comprised of several  configurable units, that look like this example:

```
{
	"name": "nameOfConfugurableUnit",
	"label": "Displayed name of configurable unit",
	"note": "Optional explanatory note for the user",
	"group": "Unit",
	"value": true,
	"type": "checkbox"
},
...
```

**Notes:**

1. Choose a "name" that makes sense for what your configurable unit is.
2. If you have no need for a "note", you can remove this line entirely.
3. The "group" will be used to assign your configurable unit to a side-tab within the **Theme > Custom settings** section. If no such side tab already exists, then Publii will create it.
4. The "value" and the field "type" can be whatever you need them to be.
5. Every line in the curly-bracketed data set needs to be separated by a comma (but be sure to not have a comma after the last line). 
6. Similar to (5.), each data set needs to be separated by a comma (but be sure to have no comma after the last data set).

### Example: Publii Bootstrap Starter Theme Modules

In my Bootstrap starter theme (accompanying these tutorials), I want designers to have the option of relocating these components to any place within their templates. Therefore I have nicknamed my configurable units _modules_ – so it doesn't matter whether you place them in a sidebar, a footer, or anywhere else. If you are coming from WordPress, you can think of these modules as somewhat analogous to "widgets" (but each module can only be used once in a website).

My "name" for each unit is always prefixed "module...", and each unit is assigned to `"group": "Modules"`. So, in **Theme > Custom settings** there is a side-tab created, named **Modules**.

Within the **Modules** tab I have separated each module by a dashed dividing line. This is created in the `config.json` file by adding this unit in between each module:

```
{
	"name": "separator",
	"type": "separator",
	"label": " ",
	"group": "Modules",
	"size": "small"
},
...
```

In **Theme > Custom settings > Modules**, the user can choose their settings as appropriate for each.

In the theme templates, the designer (and advanced users) can cut-and-paste to relovate the modules to place them wherever they want them to be displayed on their website, when rendered.