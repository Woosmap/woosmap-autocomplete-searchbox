module.exports = {
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
        maxDistance: 0
    },
    autocomplete: {
        minChars: 2,
        maxItems: 10,
        autoFirst: true,
        sort: false
    },
    search: {
        woosmapOnly: false,
        googleOnly: false,
        debounceTime: 50
    }
};