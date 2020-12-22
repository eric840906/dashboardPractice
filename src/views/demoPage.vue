<template>
  <div>
    <v-dialog/>
      <div class="container">
        <contentHeader></contentHeader>
        <div class="row">
            <div class="col-md-6">
              <div class="chart">
                  <customLineChart></customLineChart>
              </div>
            </div>
            <div class="col-md-6">
              <div class="chart">
                  <customPieChart></customPieChart>
              </div>
            </div>
        </div>
        <section class="file-section">
          <h5>按鈕改版型DEMO</h5>
          <button @click="boxMode=!boxMode" class="view-toggle"><list-mode-icon v-if="boxMode===true"/><grid-mode-icon v-if="boxMode===false"/></button>
            <table class="fileContainer">
              <thead v-show="!boxMode">
                <tr>
                  <th></th>
                  <th class="file-name">檔案名稱</th>
                  <th class="file-size">檔案大小</th>
                </tr>
              </thead>
              <tbody :class="{'box-mode':boxMode}">
                <tr class="file" v-for="item in files" :key="item.index">
                  <td>
                    <component class="file-icon"
                        :is="`${(item.fileType === 'rar' || item.fileType ==='zip') ? 'icon-zip'
                              : (item.fileType === 'jpg' || item.fileType === 'png' || item.fileType === 'svg') ? 'icon-img'
                              : `icon-${item.fileType}` }`
                            "
                    />
                  </td>
                  <td class="file-name"><a href="#" @click.prevent>{{item.fileName}}.{{item.fileType}}</a></td>
                  <td class="file-size">{{item.fileSize}}</td>
                </tr>
              </tbody>
            </table>
        </section>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import contentHeader from '@/components/content/contentHeader.vue'
import customLineChart from '@/components/content/chartContainer/customLineContainer.vue'
import customPieChart from '@/components/content/chartContainer/customPieContainer.vue'
export default {
  name: 'Home',
  components: {
    contentHeader,
    customLineChart,
    customPieChart
  },
  data: () => ({
    boxMode: false,
    files: [
      {
        fileName: 'file1',
        fileSize: '100kb',
        fileType: 'jpg'
      },
      {
        fileName: 'file2',
        fileSize: '200kb',
        fileType: 'txt'
      },
      {
        fileName: 'file3',
        fileSize: '400kb',
        fileType: 'xlsx'
      },
      {
        fileName: 'file4',
        fileSize: '111kb',
        fileType: 'zip'
      },
      {
        fileName: 'file5',
        fileSize: '777kb',
        fileType: 'docx'
      },
      {
        fileName: 'file6',
        fileSize: '888kb',
        fileType: 'png'
      },
      {
        fileName: 'file1',
        fileSize: '100kb',
        fileType: 'rar'
      },
      {
        fileName: 'file2',
        fileSize: '200kb',
        fileType: 'zip'
      },
      {
        fileName: 'file3',
        fileSize: '400kb',
        fileType: 'svg'
      },
      {
        fileName: 'file4',
        fileSize: '111kb',
        fileType: 'pptx'
      },
      {
        fileName: 'file5',
        fileSize: '777kb',
        fileType: 'pdf'
      },
      {
        fileName: 'file6',
        fileSize: '888kb',
        fileType: 'txt'
      }
    ]
  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/button.scss';
@import '@/assets/style/scss/blocks.scss';

.view-toggle{
  margin-left: auto;
  @extend %round-click-btn;
  color: $base;
  &:hover{
    color: #ffffff;
  }
}
.file{
  color: #827f7f;
  &:nth-child(2n+1){
    background-color: lighten($base, 25%);
  }
}
.file-section{
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 7px 21px -15px black;
  margin-top: 20px;
}
.file-name{
  text-align: start;
}
.file-size{
  text-align: end;
}
.box-mode{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .file{
    display: flex;
    position: relative;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    flex: 0 0 15.666666667%;
    height: 150px;
    text-align: center;
    &:nth-child(n){
      background-color: #ffffff;
      &:hover{
        background-color: lighten($base, 20%);
      }
    }
    .file-name{
      text-align: center;
    }
    .file-size{
      display: none;
    }
  }
  .file-icon{
    svg{
      width: 100px;
      height: 100px;
    }
  }
}
.fileContainer{
  width: 100%;
  tr{
    display:table;
    width:100%;
    table-layout:fixed;
    height: 50px;
    &:nth-child(2n+1){
      background-color: #ffffff;
    }
    &:nth-child(2n){
      background-color: lighten($base, 23%);
    }
    &:hover{
      background-color: lighten($base, 20%);
    }
  }
  td, th{
    vertical-align: middle;
    a{
      font-size: inherit;
    }
  }
}
</style>
