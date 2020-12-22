<template>
  <div>
    <header class="top-nav">
      <a href="#" class="sidebar-toggle" @click.prevent="drawerToggle"><menu-icon /></a>
      <form action="" class="search-form" @submit="testSubmit">
        <select name="" id="" v-model="searchForm.category">
          <option value="All" selected>ALL</option>
          <option value="123">123</option>
          <option value="456">456</option>
        </select>
        <div class="search-box">
          <magnify-icon class="search-icon"/>
          <input type="text" placeholder="搜尋" class="search-text" v-model="searchForm.text">
        </div>
        <input type="submit" style="display:none"/>
      </form>
      <div class="user-block">
        <img :src="userInfo.image" alt="">
        <a class="user-btn" href="#" @mouseover="toggleMenu" @click.prevent="toggleMenu">{{userInfo.name}}</a>
        <transition name="slidein">
          <ul class="user-menu" v-show="userMenuToggle" @mouseleave="toggleMenu" v-click-outside="closeMenu">
            <li v-for="item in userMenu" :key="item.userControl"><a :title="item.userControl" href="#" @click.prevent><component :title="item.userControl" :is="item.icon"/></a></li>
          </ul>
        </transition>
      </div>
      <!-- <div class="logo">
        <a href="#">
          <img src="@/assets/paw_logo.svg" alt="">
        </a>
      </div> -->
      <!-- <nav>
        <ul class="nav-links">
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
        </ul>
      </nav> -->
    </header>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchForm: {
      category: 'All',
      text: ''
    },
    userMenuToggle: false,
    userMenu: [
      {
        userControl: '編輯使用者資料',
        icon: 'edit-icon'
      },
      {
        userControl: '通知',
        icon: 'bell-icon'
      },
      {
        userControl: '登出',
        icon: 'logout-icon'
      }
    ]
  }),
  methods: {
    drawerToggle () {
      this.$emit('drawerToggle')
    },
    testSubmit () {
      console.log(this.searchForm)
    },
    toggleMenu (e) {
      e.stopPropagation()
      this.userMenuToggle = !this.userMenuToggle
    },
    closeMenu () {
      this.userMenuToggle = false
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/theme.scss';

  .top-nav{
    box-shadow: 3px 4px 12px -2px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    color: $darker-background-text;
    height: 7vh;
    position: fixed;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    a{
      color: $darker-background-text;
      &:hover{
        color: darken($darker-background-text, 20%);
      }
    }
    .sidebar-toggle{
      align-self: center;
      margin-left: 20px;
    }
    .search-form{
      margin-right: 70px;
      display: flex;
      align-items: center;
      width: 63.29%;
      select{
        background-color: lighten($base, 25%);
        border: none;
        height: 32px;
        border-radius: 4px;
        width: 15%;
      }
      .search-box{
        display: flex;
        margin-left: 12px;
        width: 73%;
        .search-icon{
          padding: 3px;
          background-color: lighten($base, 25%);
          border-radius: 4px 0 0 4px;
        }
        .search-text{
          background-color: lighten($base, 25%);
          border: none;
          height: 32px;
          width: 76%;
          border-radius: 4px;
          border-radius: 0 4px 4px 0;
        }
      }
      button{
        height: 27px;
      }
    }
    .user-block{
      display: flex;
      align-items: center;
      margin-right: 30px;
      img{
        width: 45px;
        border-radius: 100%;
        height: 45px;
      }
      .user-btn{
        margin-left: 15px;
      }
      .user-menu{
        position: absolute;
        top: 7vh;
        right: 0px;
        background-color: #ffffff;
        box-shadow: 0 4px 6px 2px #00000038;
        li{
          border-bottom: 1px solid $darker-background-text;
          &:last-child{
            border: none;
          }
          a{
            display: inline-block;
            padding: 10px;
          }
        }
      }
    }
    .logo{
      align-self: center;
      margin-right: 20px;
      width: 7vh;
      a{
        display: inline-block;
        img{
          vertical-align: middle;
        }
      }
    }
    nav{
      align-self: center;
      margin-right: 20px;
    }
    // .nav-links{
    //   display: flex;
    //   li+li{
    //     margin-left: 5px;
    //   }
    // }

  }
</style>
