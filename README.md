Lightweight and customizable autocomplete widget to search for [Woosmap Localities](https://developers.woosmap.com/products/localities/search-city-postcode/) and fallback on **Google Places** according to a partial string similarity ratio and other certain specific criteria.

Official Documentation: <https://community.woosmap.com/localities-fallback-googleplaces/> 

## Overview

When Searching for [Woosmap Localities](https://developers.woosmap.com/products/localities/search-city-postcode/) using this widget, a **matching ratio** is computed between the user input and for each returned items.
- If Woosmap Localities return no item with matching **Ratio = 100** (customizable using `breakpointRatio` parameter), the widget populate predictions response with Google Places.
- All returned Woosmap Localities items with **Ratio <= 75** (customizable using `minRatio` parameter) are removed from the predictions pick list.

Check how we [calculate ratio](#ratio--partial-string-similarity) or explore [source code on GitHub](https://github.com/woosmap/woosmap-autocomplete-searchbox).

## Installation

You can use the **jsDelivr** CDN for both JS and CSS.

```html
<script src="https://cdn.jsdelivr.net/gh/woosmap/woosmap-autocomplete-searchbox@latest/dist/autocompletewoosmap.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/woosmap/woosmap-autocomplete-searchbox@latest/dist/autocompletewoosmap.min.css" rel="stylesheet">
```

Otherwise, [fork or download the source code](https://github.com/woosmap/woosmap-autocomplete-searchbox) and run the following commands:

#### Install dependencies
```ShellSession
$ npm install
```
#### Run
```ShellSession
$ npm run start
```
#### build
```ShellSession
$ npm run build
```

## Basic Usage
Before you try anything, you need to add an *input* block element and include `autocompletewoosmap.css` and `autocompletewoosmap.js` in your page, via the usual tags:
```html
<link href="./autocompletewoosmap.css" rel="stylesheet"></head>
<script type="text/javascript" src="./autocompletewoosmap.js"></script></body>
<input id="my-input"/>
```
Then, you need at least to specify your Woosmap **Project Key** and you Google **API key** before instantiating the widget with default criteria:
```html
<script>
    const config = {
        woosmap: {projectKey: "woos-XXXX"},
        google: {apiKey: "AIzaYYYYYY-1234567"}
    };    
    const input = document.getElementById("my-input");
    new AutocompleteWoosmapSearchBox(input, config);
</script>
```

Loading Google Places is **optional**, as the widget does it automatically according to the Google options.   

## Add Listener on Selected Predictions

When a user select a Woosmap Locality or a Google Place from the list of autocomplete predictions, an event is fired with either a Woosmap Locality object or a Google Place Detail object.
You'll need to register on the Input text two EventListener named `'autocomplete-woosmap-selectcomplete'` and `'autocomplete-google-selectcomplete'`.

### Woosmap Localities onSelect

Woosmap Localities response Doc : https://developers.woosmap.com/guides/search-localities/search-city-postcode/#localities-predictions-responses

```html
<script>
    document.getElementById('my-input').addEventListener('autocomplete-woosmap-selectcomplete', function (evt) {
        console.log(evt.woosmapLocality);
    });
</script>
```

### Google Place Details onSelect

Place Details response Doc : https://developers.google.com/maps/documentation/javascript/places#place_details

```html
<script>
    document.getElementById('my-input').addEventListener('autocomplete-google-selectcomplete', function (evt) {
        console.log(evt.placeDetails);
    });
</script>
``` 

And you're done!