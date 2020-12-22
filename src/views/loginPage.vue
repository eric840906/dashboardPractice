<template>
  <div>
    <v-dialog />
    <div class="login-window">
      <div class="login-sidebar">
        <img src="../assets/taipei-large.png" alt="" class="brand-logo">
        <h5 class="brand-name">
          台北市政府
          資訊整合平台
        </h5>
      </div>
      <div class="form-container">
        <form action="" class="login-form" @submit.prevent='login'>
          <h5 class="form-title">登入</h5>
          <div class="form-row">
            <account-icon/><input type="text" id="username" name="username" placeholder="帳號" v-model="userName">
          </div>
          <div class="form-row">
            <password-icon/><input type="text" id="password" name="password" placeholder="密碼" v-model="password">
          </div>
          <div style="text-align: end; margin-bottom: 58px;">
            <a href="#" class="findPass">忘記密碼</a>
          </div>
          <div class="form-row" style="justify-content: space-between;">
            <verify-icon/>
            <input type="text" id="verificationCode" :value="codeInput" @input="codeInput=$event.target.value.toLowerCase()" placeholder="驗證碼">
            <img class='codeImage' :src='imageData' alt='verificationCode'>
            <button @click.prevent="renew"><renew-icon/></button>
          </div>
          <input type="submit" value="登入" class="login-btn">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import generateCode from '@/veriCode/canvas-verification-code.js'
export default {
  components: {
  },
  data: () => ({
    userName: '',
    password: '',
    codeInput: '',
    imageData: '',
    codeText: ''
  }),
  methods: {
    renew () {
      const { code, data } = generateCode(120, 40)
      this.imageData = data
      this.codeText = code
    },
    login (e) {
      console.log('login')
      const hasName = () => {
        return this.$store.state.userInfo.filter(item => item.name === this.userName)
      }
      const hasPass = () => {
        return (hasName()).filter(item => item.password === this.password)
      }
      if (hasName().length === 0) {
        this.$modal.show('dialog', {
          title: '<h4 style="text-align: center;"><span data-v-71e61faf="" aria-label="Alert icon" role="img" class="material-design-icon alert-icon"><svg data-v-71e61faf="" fill="rgb(255 94 94)" width="50" height="50" viewBox="0 0 24 24" class="material-design-icon__svg"><path data-v-71e61faf="" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"><title data-v-71e61faf="">Alert icon</title></path></svg></span></h4>',
          text: '<p style="text-align: center;">查無使用者</p>',
          buttons: [
            {
              title: '重試',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
        this.renew()
      }
      if (hasPass().length !== 0) {
        this.loginCheck()
        this.loadUser(hasPass()[0])
      } else {
        this.$modal.show('dialog', {
          title: '<h4 style="text-align: center;"><span data-v-71e61faf="" aria-label="Alert icon" role="img" class="material-design-icon alert-icon"><svg data-v-71e61faf="" fill="rgb(255 94 94)" width="50" height="50" viewBox="0 0 24 24" class="material-design-icon__svg"><path data-v-71e61faf="" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"><title data-v-71e61faf="">Alert icon</title></path></svg></span></h4>',
          text: '<p style="text-align: center;">密碼或驗證碼錯誤</p>',
          buttons: [
            {
              title: '重試',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
        this.renew()
      }
    },
    loginCheck () {
      if (this.validInput === 'correct') {
        this.$router.push({ path: '/index' })
      } else {
        this.$modal.show('dialog', {
          title: '<h4 style="text-align: center;">登入失敗</h4>',
          text: '<p style="text-align: center;">密碼或驗證碼錯誤</p>',
          buttons: [
            {
              title: '重試',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
        this.renew()
      }
    },
    loadUser (user) {
      this.$store.state.currentUser = user
    }
  },
  computed: {
    validInput () {
      return this.codeText === this.codeInput
        ? 'correct'
        : 'not correct'
    }
  },
  mounted () {
    this.renew()
  }
}
</script>

<style lang="scss">
@import '@/assets/style/scss/theme.scss';
@import '@/assets/style/scss/button.scss';
.codeImage{
  flex: 0 0 30%;
  height: 36px;
}
.login-window{
    display: flex;
    background-color: #fff;
    height: 500px;
    width: 700px;
    border-radius: 10px;
    box-shadow: 0 10px 22px -11px black;
    .login-sidebar{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px 0 0 10px;
      flex: 0 0 30%;
      background-image: linear-gradient(332deg, $tab-color 79%, #ffffff 125%);
      .brand-logo{
        margin-top: 92px;
        width: 109px;
        height: 123px;
      }
      .brand-name{
        line-height: 32px;
        margin-top: 27px;
        width: 59%;
        text-align: center;
        color: lighten($base, 25%);
      }
    }
    .form-container{
      flex: 0 0 70%;
      display: flex;
      justify-content: center;
      .login-form{
        width: 70%;
        text-align: center;
        input{
          width: 100%;
          line-height: 30px;
          background-color: lighten($base, 25%);
          border: none;
          border-radius: 5px;
        }
        .form-title{
          font-weight: 500;
          margin-bottom: 40px;
          margin-top: 64px;
        }
        .form-row{
          display: flex;
          position: relative;
          input{
            padding-left: 35px;
            line-height: 35px;
          }
          .material-design-icon{
            color: darken($base, 10%);
            position: absolute;
            left: 5px;
            top: 5px;
          }
          button{
            .material-design-icon{
              position: unset;
            }
          }
        }
        #username, #password{
          margin-bottom: 16px;
        }
        .findPass{
          margin-bottom: 58px;
        }
        #verificationCode{
          flex: 0 0 51%;
        }
        .login-btn{
          @extend %form-btn;
          width: 130px;
          border-radius: 100px;
          transition: 0.3s all;
          margin-top: 83px;
          &:hover{
            background-color: $base;
            color: lighten($base, 25%);
          }
        }

      }
    }
}
</style>
