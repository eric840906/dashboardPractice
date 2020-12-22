<template>
  <div class="login-page">
    <div class="tab-box">
      <router-link to="/login">登入</router-link>
      <router-link to="/register">註冊</router-link>
    </div>
    <router-view></router-view>
    <!-- <v-dialog />
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
    </div> -->
  </div>
</template>

<style lang="scss">
@import '@/assets/style/scss/button.scss';
.login-page{
  height: 100vh;
  background-image: url('../assets/background/login.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tab-box{
  margin-bottom: 15px;
  background-color: lighten($base, 25%);
  border-radius: 131px;
  box-shadow: 0 1px 13px -5px black;
  a{
    color: black;
    padding: 10px 30px;
    transition: all 0.5s;
    display: inline-block;
    &:first-child{
      border-radius: 131px 0 0 131px;
    }
    &:last-child{
      border-radius: 0 131px 131px 0;
    }
    &:hover{
      color: lighten($base, 25%);
      background-color: lighten($base, 10%);
    }
  }
  .router-link-exact-active{
    color: lighten($base, 25%);
    background-color: $base;
  }
}
</style>
