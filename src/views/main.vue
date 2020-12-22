<template>
  <div>
    <Navbar @drawerToggle='drawer = !drawer'></Navbar>
    <Sidebar :sidebarToggle="drawer" @selfToggle='drawer = !drawer'></Sidebar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition name="slide">
      <router-view style="padding: 10vh 0;"/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/sidebar.vue'
export default {
  components: {
    Navbar,
    Sidebar
  },
  data: () => ({
    drawer: false
  })
}
</script>
