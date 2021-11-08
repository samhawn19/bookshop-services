const jsonbase = require('jsonbase.com')

const token = '3c9622697a53d8b2f3cf825dc4160f7e1aad46c1a759475edeb76bce5cd33a64',
    token_2 = jsonbase().generateBucket(),
    store = jsonbase(token);

const getJsonbaseConfig = () => {
    return {
        token: token,
        token_2: token_2,
        store: store
    }
}

module.exports = {
    getJsonbaseConfig
}
