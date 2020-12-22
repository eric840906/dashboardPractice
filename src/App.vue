<template>
  <div id="app">
    <!-- <Navbar @drawerToggle='drawer = !drawer'></Navbar>
    <Sidebar :sidebarToggle="drawer" @selfToggle='drawer = !drawer'></Sidebar> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <transition name="slide"> -->
      <router-view/>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    beforeOpen (event) {
      console.log(event.params.foo)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/scss/main.scss';

#app {
  font-family: 'Noto Sans TC', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: $background-text;
  background-color: lighten($base, 25%);
  // a{
  //   &:hover{
  //     color: lighten($background-text, 10%);
  //   }
  //   &:active{
  //     color: lighten($background-text, 20%);
  //   }
  // }
  h1{
    font-size: $greatest-heading;
  }
  h2{
    font-size: $greater-heading;
  }
  h3{
    font-size: $medium-heading;
  }
  h4{
    font-size: $smaller-heading;
  }
  h5{
    font-size: $smallest-heading;
  }
}

.vue-dialog-buttons{
  button{
    display: block;
  }
}
.modal-form{
  display: flex;
  justify-content: space-around;
}

.drop-enter-active, .drop-leave-active {
  transition: all .2s linear;
}
.drop-enter, .drop-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scaleY(0);
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s linear;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.flip-enter-active, .flip-leave-active{
    transition: all 0.3s;
  }
.flip-enter-active{
  transition-delay: 0.3s;
}
.flip-enter {
  transform: rotate3d(0, 1, 0, 90deg);
}
.flip-leave-active {
  transform: rotate3d(0, 1, 0, 90deg);
}

.slidein-enter, .slidein-leave-to{
  transform: translateX(60px);
}
.slidein-enter-to, .slidein-leave{
  transform: translateX(0px);
}
.slidein-enter-active, .slidein-leave-active {
  transition: all .2s linear;
}

</style>
