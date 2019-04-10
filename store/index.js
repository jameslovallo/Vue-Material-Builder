export const state = () => ({
  cacheVersion: '',
  settings: {
    header: []
  }
})

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings
  },
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadSettings({ commit }, context) {
    return this.$storyapi.get(`cdn/stories/global`, {
      version: context.version
    }).then((res) => {
      commit('setSettings', res.data.story.content)
    })
  },
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then(res => {
      commit('setCacheVersion', res.data.space.version)
    })
  }
}
