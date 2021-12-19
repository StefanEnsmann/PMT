import { createApp } from 'vue'
import { createStore } from 'vuex'
import PokemonMapTracker from './PokemonMapTracker.vue'

const configStore = {
    namespaces: true,
    state: {
        supportedLanguages: null, // [string]
        currentLanguage: null, // string
    },
    getters: {
        isValid(state) {
            return state.supportedLanguages !== null && state.currentLanguage !== null;
        }
    }
}

const storyItemsStore = {
    namespaced: true,
    state: {
        categories: null // list: {string: {string: {'url': string, 'checked': bool}}}
    },
    mutations: {
        setChecked(state, payload) {
            state.categories[payload.category][payload.item].checked = payload.state;
        }
    },
    getters: {
        isValid(state) {
            return state.categories !== null;
        },
        get(state) {
            return (category, item) => state.categories[category][item];
        },
        count(state) {
            let count = 0;
            for (let category in state.categories) {
                count += Object.values(state.categories[category]).count();
            }
            return count;
        },
        checked(state) {
            let count = 0;
            for (let category in state.categories) {
                for (let item in state.categories[category]) {
                    if (state.categories[category][item].checked) {
                        ++count;
                    }
                }
            }
            return count;
        },
        unchecked(state) {
            let count = 0;
            for (let category in state.categories) {
                for (let item in state.categories[category]) {
                    if (!state.categories[category][item].checked) {
                        ++count;
                    }
                }
            }
            return count;
        }
    }
};

const pokedexStore = {
    namespaced: true,
    state: {
        list: null // list: [{"localization": {string: string}, "nr": int, "typeA": string, "typeB": string|null, "url": string, "caught": bool}]
    },
    mutations: {
        setCaught(state, payload) {
            state.list[payload.idx].caught = payload.caught;
        }
    },
    getters: {
        isValid(state) {
            return state.list !== null;
        },
        get(state) {
            return (idx) => state.list[idx];
        },
        getNational(state) {
            return (idx) => {
                for (let pkmn of state.list) {
                    if (pkmn.nr === idx) {
                        return pkmn;
                    }
                }
                return null;
            };
        },
        count(state) {
            return state.list.length;
        },
        caught(state) {
            return state.list.reduce((previous, x) => (x.caught ? previous + 1 : previous), 0);
        },
        uncaught(state) {
            return state.list.reduce((previous, x) => (x.caught ? previous : previous + 1), 0);
        }
    }
};

const locationsStore = {
    namespaced: true,
    state: {
        list: null
    },
    getters: {
        isValid(state) {
            return state.list !== null;
        },
    }
};

const store = createStore({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        config: configStore,
        storyItems: storyItemsStore,
        pokedex: pokedexStore,
        locations: locationsStore,
    },
    mutations: {
        loadRuleset(state) {
            state.storyItems.list = [];
            state.pokedex.list = [];
            state.locations.list = [];
        }
    }
});

createApp(PokemonMapTracker)
    .use(store)
    .mount('#app');
