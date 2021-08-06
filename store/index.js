export const state = () => ({
  content: '',
  color: ''
})

export const mutations = {
  setSnack(state, payload) {
    state.content = payload.content
    state.color = payload.color
  }
}
