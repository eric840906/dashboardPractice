<template>
  <div>
    <div class="content-header">
      <h4 class="page-title">{{$route.name}}</h4>
      <div class="control-block">
        <calendar></calendar>
        <exportBtn></exportBtn>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from '@/components/controls/calendar.vue'
import exportBtn from '@/components/controls/exportBtn.vue'
export default {
  name: 'contentHeader',
  components: {
    calendar,
    exportBtn
  },
  data: () => ({
  }),
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .content-header{
    margin-top: 40px;
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
    .page-title{
      font-weight: bold;
    }
    .control-block{
      display: flex;
    }
    div+div{
      margin-left: 24px;
    }
  }
</style>
