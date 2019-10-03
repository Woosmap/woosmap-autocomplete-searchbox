# woosmap-autocomplete-searchbox

This repo is a lightweight and customizable autocomplete widget to search for **Woosmap Localities** and fallback on **Google Places** according to a partial string similarity ratio and other certain specific criteria.

If Woosmap Localities return no item with matching **Ratio = 100** (`breakpointRatio`), the widget populate predictions response with Google Places. 

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
Before you try anything, you need to add an *input* block element and include `autocompletewoosmap.css` and `autocompletewoosmap.js` in your page, via the usual tags:
```html
<link href="./autocompletewoosmap.css" rel="stylesheet"></head>
<script type="text/javascript" src="./autocompletewoosmap.js"></script></body>
<input id="my-input"/>
```
Then, you need to at least specify your Woosmap **Project Key** and you Google **API key** before instantiating the widget with default criteria:
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

Loading Google Places is **optional**, since the widget does it automatically according to the Google options.   

## Add Listener on Selected Localities or Places details

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

## Configuration
Here is the full default configuration:
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
        sort: false,
        debounceTime: 100,
    },
    search: {
        minRatio: 75,
        breakpointRatio: 100,
        fallbackWoosmap: true
    },
    analytics: {
        analyticsUrl: 'https://search-tracking.webgeoservices.com/api/collect/?key={key}&channel={channel}&source={source}&id={id}&input={input}&description={description}&type={type}&session_id={session_id}',
        channel: 'analytics-autocomplete-channel',
        key: '',
    },
};
```

### `autocomplete` config
| Option | Description | Default |
| :----- | :---------- | :------ |
| `minChars` | Minimum characters the user has to type before the autocomplete popup shows up | `2` |
| `maxItems` | Maximum number of suggestions to display. Best practice to let it default to 5. Could be set between 1 and 10 as Woosmap Localities and Google Places return both 5 results. | `5` |
| `autoFirst` | Should the first prediction element be automatically selected?  | `true` |
| `sort` | Controls if list items are ordered by string matching ratio. if set to `false`, google places are displayed on top of woosmap localities | `false` |
| `debounceTime` | Time in miliseconds before executing the autocomplete requests when user type | `100` |

### `search` config
| Option | Description | Default |
| :----- | :---------- | :------ |
| `minRatio` | Minimum string matching ratio. If calculated ratio of autocomplete item is under this value, the item is deleted from autocomplete predictions list | `75` |
| `breakpointRatio` | Do not Search and populate predictions response with Google Places in case Woosmap Localities return at least one item with required `breakpointRatio` | `100` |
| `fallbackWoosmap` | Controls if you want to display Woosmap Localities even with insufficient ratio (`minRatio` not reached) in case Google Places returns no results | `true` |


### `google` config
| Option | Description | Default |
| :----- | :---------- | :------ |
| `clientId` | ClientID of your google license | '' |
| `apiKey` | API Key of your google license | '' |
| `channel` | Channel to track usage of your google license  | '' |
| `librariesToLoad` | load specific google libraries  | ['places'] |
| `version` | load specific google version  | `3` |
| `componentRestrictions` | restrict search by componentRestrictions. cf. [documention](https://developers.google.com/places/web-service/autocomplete)  | '' |


### `woosmap` config
| Option | Description | Default |
| :----- | :---------- | :------ |
| `projectKey` | Your woosmap Project public Key   | '' |
| `componentRestrictions` |  A grouping of places to which you would like to restrict your results. cf. [documention](https://developers.woosmap.com/guides/search-localities/search-city-postcode/) | '' |
| `types` |  The types of predictions to return. cf. [documention](https://developers.woosmap.com/guides/search-localities/search-city-postcode/) | '' |
| `componentRestrictions` | restrict search by componentRestrictions. cf. [documention](https://developers.woosmap.com/guides/search-localities/search-city-postcode/)  | `3` |
| `data` | Data standard or advanced. cf. [documention](https://developers.woosmap.com/guides/search-localities/search-city-postcode/) | `'standard'` |
| `localitiesLibUrl` | URL of the Woosmap Localities Library | `'sdk.woosmap.com/localities/localities.js'` |

### `analytics` config
| Option | Description | Default |
| :----- | :---------- | :------ |
| `analyticsUrl` | To track your searched terms and responses | `search-tracking.webgeoservices.com/api/collect/...` |
| `channel` | to group your analytics by channel | `analytics-autocomplete-channel` |
| `key` | the woosmap projct key - could be different from the one used in woosmap config | `` |


### bounds search with componentRestrictions 
If you want to restrict your search by country for Woosmap Localities and Google Places, specify the `componentRestrictions` parameter like this:

```js
const config = {
    woosmap: {componentRestrictions: {country: ['UK', 'FR', 'ES']}},
    google: {componentRestrictions: {country: ['UK', 'FR', 'ES']}}
};   
```

## Ratio : Partial String Similarity

A **ratio** value is added to each autocomplete item and calculated as a partial levenshtein ratio of the two strings, the input from the user and the value of autocomplete item.
We use the fuzzy string matching javascript library [fuzzball](https://github.com/nol13/fuzzball.js), port of [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy) python library.

For example a search with the term `'blast'` retrieve the following Woosmap localities and corresponding ratio:

```json    
{
  "label": "Blaston, Leicestershire, United Kingdom",
  "matching ratio": 100,
}{
  "label": "Blantyre, Southern Region, Malawi",
  "matching ratio": 80
}{
  "label": "Blasbach, Gießen, Germany",
  "matching ratio": 80
}{
  "label": "Blașcovici, Timiş, Romania",
  "matching ratio": 60
}{
  "label": "Blåsbo, Västerås, Sweden",
  "matching ratio": 60
}
```

To learn about Fuzzy String Matching, check [https://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/](https://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/).


## Tracking Your Search 

By default this widget allow you to track the searched tems, searched selected item and responses.
Data are stored on Woosmap Servers. 
To configure it for your project, set the following parameters 

```js
const config = {
    analytics: {key: "my-project", channel: "my-channel"}
};
```


## Demo
- https://demo.woosmap.com/localities/basic.html (basic implementation with default options)

