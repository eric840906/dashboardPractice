import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: [
      {
        name: 'zo6596',
        email: 'eric840906@hotmail.com.tw',
        image: 'https://i.pinimg.com/564x/c4/0d/7a/c40d7a7060fb74926c257db982b6ddaf.jpg',
        password: '0000'
      },
      {
        name: 'zo6596',
        email: 'eric840906@hotmail.com.tw',
        image: 'https://i.pinimg.com/564x/c4/0d/7a/c40d7a7060fb74926c257db982b6ddaf.jpg',
        password: '5555'
      },
      {
        name: 'zo6596',
        email: 'eric840906@hotmail.com.tw',
        image: 'https://i.pinimg.com/564x/c4/0d/7a/c40d7a7060fb74926c257db982b6ddaf.jpg',
        password: '6666'
      },
      {
        name: 'eric840906',
        email: 'eric840906@hotmail.com.tw',
        image: 'https://media.printed.com/uploads/gallery/blog/2016/quiz-heavy-breathing-cat.png',
        password: '1234'
      }
    ],
    currentUser: {
      name: 'zo6596',
      email: 'eric840906@hotmail.com.tw',
      image: 'https://i.pinimg.com/564x/c4/0d/7a/c40d7a7060fb74926c257db982b6ddaf.jpg',
      password: '0000'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
