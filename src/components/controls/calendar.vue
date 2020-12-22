<template>
  <div>
    <div class="date-block"><calendar-icon/><span class="date-text">{{today}}</span></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    today: ''
  }),
  methods: {
    getToday () {
      const date = new Date()
      // const monthArr = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
      const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const year = date.getFullYear()
      const month = monthArr[date.getMonth()]
      const day = date.getDate()
      this.today = `${month} ${day}, ${year}`
    }
  },
  created () {
    this.getToday()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/blocks.scss';
@import '@/assets/style/scss/theme.scss';
  .date-block{
    @extend %control-blocks;
    color: $darker-background-text;
    width: 190px;
  }
</style>
