<template>
  <modal name="error"
         :width="300"
         :height="400"
         :classes="['modal-form']"
         :styles="`border-radius:10px`"
         @before-open="beforeOpen"
         @before-close="beforeClose">
         <p>{{text}}</p>
  </modal>
</template>
<script>
export default {
  name: 'errorModal',
  data () {
    return {
      props: ['text'],
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
</style>
