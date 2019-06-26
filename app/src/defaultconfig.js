module.exports = {
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
        minChars: 3,
        maxItems: 5,
        autoFirst: true,
        sort: true,
        debounceTime: 100,
    },
    search: {
        minRatio: 75,
        searchGoogleWhenPartialResults: true,
        fallbackWoosmap: true
    }
};