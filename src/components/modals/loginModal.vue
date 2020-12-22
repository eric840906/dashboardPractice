<template>
  <modal name="logIn"
         :width="300"
         :height="400"
         :classes="['modal-form']"
         :styles="`border-radius:10px`"
         @before-open="beforeOpen"
         @before-close="beforeClose">
    <form action="" class="login-form" @submit.prevent="login">
      <label for="userName">User</label>
      <input type="text" id="userName" name="userName" required>
      <label for="password">Password</label>
      <input type="text" id="password" name="password" required>
      <input class="button" type="submit" value="login" >
    </form>
  </modal>
</template>
<script>
export default {
  name: 'loginModal',
  data () {
    return {
      time: 0,
      duration: 5000
    }
  },
  methods: {
    login (e) {
      console.log(e)
    },
    beforeOpen (event) {
      console.log(event)
      // Set the opening time of the modal
      this.time = Date.now()
    },
    beforeClose (event) {
      console.log(event)
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.stop()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/theme.scss';
.vm--modal{
  overflow: scroll;
  li{
    text-align: center;
  }
}
.login-form{
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  .button{
    width: 100%;
    justify-content: center;
    background-color: $base;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
  }
  input{
    line-height: 25px;
  }
  *+*{
    margin-top: 10px;
  }
}
</style>
