module.exports = {
    google: {
        clientId: '',
        apiKey: 'AIzaSyBn3kw1bNdgmiXAczwr2DcKLAaW-M3nX14',
        channel: '',
        librariesToLoad: ['places'],
        language: 'fr',
        region: 'FR',
        version: '3',
        componentRestrictions: {country: ['fr']},
    },
    woosmap: {
        projectKey: 'woos-5fdbad2d-975e-3725-844a-e8917c0d8a3b',
        componentRestrictions: '',
        types: '',
        data: 'standard',
        localitiesLibUrl: 'https://sdk.woosmap.com/localities/localities.js'
    },
    autocomplete: {
        minChars: 2,
        maxItems: 15,
        autoFirst: true,
        sort: true
    },
    search: {
        debounceTime: 70,
        minRatio: 75,
        searchGoogleWhenFullRatio: false,
        searchGoogleWhenPartialResults: true,
        fallbackWoosmap: true
    }
};