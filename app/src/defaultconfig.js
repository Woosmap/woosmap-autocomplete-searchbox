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
    analytics: {
        analyticsUrl: 'https://search-tracking.webgeoservices.com/api/collect/?key={key}&channel={channel}&source={source}&id={id}&input={input}&description={description}&type={type}&session_id={session_id}',
        channel: 'analytics-autocomplete-channel',
        key: '',
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
    }
};