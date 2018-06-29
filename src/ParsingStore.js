let instance = null;
class ParsingStore {
    /**
     * Returns the singleton parsing store.
     * @returns {ParsingStore}
     */
    static getStore() {
        if(!instance) instance = new ParsingStore();
        return instance;
    }

    constructor() {
        this._setupStoreData();
    }

    reset() {
        this._setupStoreData();
    }

    _setupStoreData() {
        this.components = {};
    }
}

module.exports = ParsingStore;