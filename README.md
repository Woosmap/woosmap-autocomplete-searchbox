# woosmap-autocomplete-searchbox

## Dev Install
### Install dependencies

```ShellSession
$ npm install
```

### Run
```ShellSession
$ npm start
```

### Production build
```ShellSession
$ npm run build
```


## Autocomplete Google Address and Get Nearby Woosmap Assets
### Prerequisites

Add `class="autocomplete-woosmap"` to your input:

```html
<link href="./autocompletewoosmap.css" rel="stylesheet"></head>
<script type="text/javascript" src="./autocompletewoosmap.js"></script></body>
<input class="autocomplete-woosmap" id="my-input"/>
``` 

### Google Place Details onSelect

Place Details Data Doc : https://developers.google.com/maps/documentation/javascript/places#place_details

```html
<script>
    document.getElementById('my-input').addEventListener('autocomplete-woosmap-selectcomplete', function (evt) {
        console.log(evt.placeDetails);
    });
</script>
``` 

### Woosmap Assets Nearby Selected Address

Woosmap Asset Data Doc : https://developers.woosmap.com/data-api/samples/api-response.html

```html
<script>
    document.getElementById('my-input').addEventListener('autocomplete-woosmap-assetcomplete', function (evt) {
        console.log(evt.woosmapAssets);
    });
</script>
```


## Autocomplete Woosmap
### Prerequisites

Add `class="autocomplete-woosmap"` and `data-woosmaponly=true` to your input:

```html
<link href="./autocompletewoosmap.css" rel="stylesheet"></head>
<script type="text/javascript" src="./autocompletewoosmap.js"></script></body>
<input class="autocomplete-woosmap" data-woosmaponly=true id="my-input"/>
``` 

### Woosmap Assets onSelect

```html
<script>
    document.getElementById('my-input').addEventListener('autocomplete-woosmap-assetcomplete', function (evt) {
        console.log(evt.woosmapAsset);
    });
</script>
```

## Config
### default config
```js
var defaultConfig = {
google: {
    clientId: '',
    apiKey: '',
    channel: '',
    librariesToLoad: ['places'],
    language: 'fr',
    region: 'FR',
    version: '3'
},
woosmap: {
    projectKey: 'woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae',
    storesByPage: 5,
    maxDistance: 0,
    queryPattern: 'name:"{}" OR city:"{}"',
    queryReplaceKey: "{}"
},
autocomplete: {
    minChars: 2,
    maxItems: 10,
    autoFirst: true
},
search: {
    woosmapOnly: false,
    googleOnly: false,
    debounceTime: 50
}}
```

### config (via HTML)
set data-`[configkey]` when specifying input (Don't forget to add class `class="autocomplete-woosmap"`)
```html
<link href="./autocompletewoosmap.css" rel="stylesheet"></head>
<script type="text/javascript" src="./autocompletewoosmap.js"></script></body>
<input class="autocomplete-woosmap" data-projectKey="JGHVCKEHJBCKDSKJBVXXZLIHFELKF" id="my-input"/>
```

### config (via JS)
```html
<link href="./autocompletewoosmap.css" rel="stylesheet"></head>
<script type="text/javascript" src="./autocompletewoosmap.js"></script></body>
<input id="my-input"/>
<script>
var myConfig = {
    google: {
        region: 'UK'
    },
    woosmap: {
        projectKey: 'woos-0c78592f-13ea-362b-aa07-ba4ba9ea3da22',
        storesByPage: 3
    },
    autocomplete: {
        minChars: 3,
        autoFirst: false
    }
var input = document.getElementById("my-input");
new AutocompleteWoosmapSearchBox(input, myConfig);
</script>
```


## Demo
https://preview.webgeoservices.com/woosmap-autocomplete-searchbox/index.html

