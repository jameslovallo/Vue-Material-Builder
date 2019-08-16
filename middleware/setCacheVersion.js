import Vue from 'vue';

export default function({ route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published';

  if (typeof window !== 'undefined' && window.StoryblokToken) {
    Vue.prototype.$storyapi.accessToken = window.StoryblokToken;
  }

  if (!store.state.cacheVersion) {
    store.dispatch('loadCacheVersion');
  }

  if (!store.state.settings._uid) {
    store.dispatch('loadSettings', { version: version });
  }
}
