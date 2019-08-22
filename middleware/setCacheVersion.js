import Vue from 'vue';

export default function({ store }) {
  if (typeof window !== 'undefined' && window.StoryblokToken) {
    Vue.prototype.$storyapi.accessToken = window.StoryblokToken;
  }

  if (!store.state.cacheVersion) {
    store.dispatch('loadCacheVersion');
  }
}
