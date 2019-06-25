# woosmap-autocomplete-searchbox

This repo is a lightweight and customizable autocomplete widget to search for **Woosmap Localities** and fallback on **Google Places** according to certain specific criteria.

## Installation
First, fork or download the source code and run the following commands

### Install dependencies
```ShellSession
$ npm install
```
### Run
```ShellSession
$ npm run start
```
### build
```ShellSession
$ npm run build
```

## Basic Usage
Before you try anything, you need to add an *input* block element and include autocompletewoosmap.css and autocompletewoosmap.js in your page, via the usual tags:
```html
<link href="./autocompletewoosmap.css" rel="stylesheet"></head>
<script type="text/javascript" src="./autocompletewoosmap.js"></script></body>
<input id="my-input"/>
```
Then you need at least to specify your Woosmap Public key and and the Google Api key before instantiate the widget with default criteria:
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


## Add Listener on Selected Localities or Places details

### Woosmap Localities onSelect

Woosmap Localities response Doc : https://developers.woosmap.com/guides/search-localities/search-city-postcode/#localities-predictions-responses

```html
<script>
    document.getElementById('my-input').addEventListener('autocomplete-woosmap-assetcomplete', function (evt) {
        console.log(evt.woosmapAsset);
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

## Config
### default config
```js
let defaultConfig = {
    google: {
        clientId: '',
        apiKey: '',
        channel: '',
        librariesToLoad: ['places'],
        version: '3',
        componentRestrictions: '',
    },
    woosmap: {
        projectKey: '',
        componentRestrictions: '',
        types: '',
        data: 'standard',
        localitiesLibUrl: 'https://sdk.woosmap.com/localities/localities.js'
    },
    autocomplete: {
        minChars: 2,
        maxItems: 5,
        autoFirst: true,
        sort: true,
        debounceTime: 100,
    },
    search: {
        minRatio: 75,
        searchGoogleWhenFullRatio: false,
        searchGoogleWhenPartialResults: true,
        fallbackWoosmap: true
    }
};
```

### bounds search with componentRestrictions 
If you want to restrict your search by country for Woosmap Localities and Google Places, specify the `componentRestrictions` parameter like this:

```js
const config = {
    woosmap: {componentRestrictions: {country: ['UK', 'FR', 'ES']}},
    google: {componentRestrictions: {country: ['UK', 'FR', 'ES']}}
};   
```


## Demos
- https://demo.woosmap.com/localities/
- https://demo.woosmap.com/localities/basic.html

