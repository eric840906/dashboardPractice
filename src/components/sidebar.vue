<template>
  <div style="display:flex; z-index:6">
    <div class="sidebar-container primary lighten-3" :class="{'sidebar-active' : sidebarToggle}">
      <a class="sidebar-btn" @click.prevent="selfToggle"><menu-icon /></a>
      <a href="#" class="sidebar-config"><cog-icon/></a>
      <img src="../assets/taipei-large.png" alt="" class="brand-logo">
      <nav>
        <ul>
          <li v-for="link in navLinks" :key="link.linkName">
            <router-link class="black--text sidebar-link" :to="link.link" @click.prevent='link.open=!link.open'><component :is="link.icon"></component><span class="link-name">{{link.linkName}}</span>
              <div :class="{'dropdown-link': link.childrenLinks}"></div>
            </router-link>
              <ul :class="{'dropdown-list' : link.open}">
                <transition-group name="drop">
                  <li v-show="link.open" v-for="item in link.childrenLinks" :key="item.linkName">
                    <a :href="item.link">{{item.linkName}}
                      <div class="sidebar-link-cover" :class="{'dropdown-link': item.childrenLinks}"></div>
                    </a>
                  </li>
                </transition-group>
              </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="sidebar-background"  @click="selfToggle">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sidebarToggle: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    navLinks: [
      {
        linkName: 'Dashboard',
        link: '/index',
        open: false,
        icon: 'dashboard-icon',
        childrenLinks: [
          {
            linkName: 'child1',
            link: '#'
          },
          {
            linkName: 'child2',
            link: '#'
          },
          {
            linkName: 'child3',
            link: '#'
          }
        ]
      },
      {
        linkName: '電腦資產管理',
        icon: 'mac-icon',
        link: '/computerproperty'
      },
      {
        linkName: '非電腦資產管理',
        link: '#',
        open: false,
        icon: 'printer-icon',
        childrenLinks: [
          {
            linkName: 'child1',
            link: '#'
          },
          {
            linkName: 'child2',
            link: '#'
          },
          {
            linkName: 'child3',
            link: '#'
          },
          {
            linkName: 'child4',
            link: '#'
          },
          {
            linkName: 'child5',
            link: '#'
          },
          {
            linkName: 'child6',
            link: '#'
          },
          {
            linkName: 'child7',
            link: '#'
          },
          {
            linkName: 'child8',
            link: '#'
          },
          {
            linkName: 'child9',
            link: '#'
          },
          {
            linkName: 'child10',
            link: '#'
          },
          {
            linkName: 'child11',
            link: '#'
          },
          {
            linkName: 'child12',
            link: '#'
          },
          {
            linkName: 'child13',
            link: '#'
          },
          {
            linkName: 'child14',
            link: '#'
          },
          {
            linkName: 'child15',
            link: '#'
          }
        ]
      },
      {
        linkName: 'Server管理',
        icon: 'server-icon',
        link: '#'
      },
      {
        linkName: '財產資料匯入',
        icon: 'coin-icon',
        link: '#'
      },
      {
        linkName: 'DemoPage',
        icon: 'coin-icon',
        link: '/demo'
      }
    ]
  }),
  methods: {
    selfToggle () {
      this.$emit('selfToggle')
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/theme.scss';
@import '@/assets/style/scss/button.scss';
.router-link-exact-active{
  background-color: $more-darker-background;
  color: $contrast-hover-darker-background-text;
  border-radius: 7px;
}
a{
  text-decoration: none;
  color: lighten($base, 20%);
  &:hover{
    color: lighten($background-text, 20%);
  }
}
.brand-logo{
  height: 123px;
  width: 109px;
  margin-top: 50px;
  align-self: center;
}
.sidebar-background{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: none;
  background: #00000059;
  z-index: 6;
}
.sidebar-container{
  background-image: linear-gradient(332deg, $tab-color 79%, #ffffff 125%);
  display: flex;
  flex-direction: column;
  width: 260px;
  position: fixed;
  top: 0;
  transform: translateX(-260px);
  height: 100%;
  z-index: 10;
  transition: 0.3s transform;
  .sidebar-btn{
    @extend %round-click-btn;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }
  nav{
    margin-top: 20px;
  }
  ul{
    margin: 0;
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    li{
      position: relative;
      text-align: start;
      line-height: 2;
      .sidebar-link{
        position: relative;
        width: 100%;
        display: block;
        padding-left: 20px;
        .material-design-icon{
          vertical-align: -webkit-baseline-middle;
          margin-right: 20px;
        }
        .link-name{
          vertical-align: middle;
          line-height: 35px;
        }
      }
      .sidebar-link-cover{
        display: flex;
        width: 100%;
        line-height: 3;
        @extend %btn-cover;
      }
    }
  }
  .dropdown-list{
    max-height: 28vh;
    overflow: auto;
  }
  .sidebar-config{
    @extend %round-click-btn;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.dropdown-link{
  &::after{
    content: "";
    position: absolute;
    margin-left: .255em;
    vertical-align: .255em;
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 18px;
  }
}
.sidebar-active{
  transform: translateX(0px);
  box-shadow: 7px 0px 6px -1px rgba(0, 0, 0, 0.2);
}
.sidebar-active~.sidebar-background{
  display: block;
}
.user-info-block{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  .user-img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .user-email{
    a{
      color:#00000066;
    }
  }
}
</style>
