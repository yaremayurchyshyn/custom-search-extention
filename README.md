# Chrome Extention

# Basic structure of extention apps:
* **manifest.json**
* **icon.png**
* **popup.html**
* **popup.js** (optional, included in popup.html)
_______________________________________________________
* content example of **manifest** file:
```javascript
{
  "manifest_version": 2,

  "name": "Getting started example",
  "description": "This is test description",
  "version": "1.0",

  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  },
  "permissions": [
    "activeTab",
    "https://ajax.googleapis.com/",
    ...
  ]
}
```



# How to create and run an extention locally:
  1. Create **manifest.json** file with all configurations, more info about manifest can be found [here](https://developer.chrome.com/extensions/manifest)
  2. Create all other files from **extention basic structure** such as: popup.html, popup.js, icon.png, others..
  3. Load this extention into your browser:
    a) Visit **chrome://extensions** in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select **Extensions** under the **Tools** menu to get to the same place).
    b) Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
    c) Click Load **unpacked extension…** to pop up a file-selection dialog.
    d) Navigate to the directory in which your extension files live, and select it.
* Alternatively, you can drag and drop the directory where your extension files live onto chrome://extensions in your browser to load it.
* If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.


* For more info about chrome extentions, please visit [google chrome developer page](https://developer.chrome.com/extensions/getstarted)


# Mozilla Firefox Extention
* The idea is basically the same. We can use the same structure as for **chrome extention**. And to load extention locally, we should visit "about:debugging" in mozilla firefox browser and load manifest.json file from our extention. All others file mozilla will load automatically. Please, visit [mozilla toolbar button tutorial](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Add_a_button_to_the_toolbar) for more info.
* Also, check other resources which might help you: [All about Web Extensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions), [The Essentials of an Extension](https://developer.mozilla.org/en-US/Add-ons/Overlay_Extensions/XUL_School/The_Essentials_of_an_Extension).

