<template>
  <div>
    <button class="export-btn"><export-icon/><span>匯出資料</span></button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/scss/blocks.scss';
  .export-btn{
    @extend %control-blocks;
    background-color: #fd6384;
    color: #ffffff;
    width: 140px;
  }
</style>
