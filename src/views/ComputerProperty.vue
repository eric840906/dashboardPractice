<template>
  <div>
    <v-dialog/>
    <div class="container">
      <contentHeader></contentHeader>
      <div class="table-container">
        <div class="table-topbar">
          <button><ongoing-icon/>資料更新</button>
          <button @click.prevent="toggelFilter"><cog-icon/>顯示設定</button>
          <button><table-search-icon/>立即掃描</button>
          <div class="filter-menu" v-if="filterMenuShow" v-click-outside="closeFilter">
            <form action="" class="filter-form">
              <div class="check-block">
                <label for="deptShow">
                  <input type="checkbox" name="deptShow" id="deptShow" v-model="deptShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">單位</span>
                </label>
              </div>
              <div class="check-block">
                <label for="ipShow">
                  <input type="checkbox" name="ipShow" id="ipShow" v-model="ipShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">IP</span>
                </label>
              </div>
              <div class="check-block">
                <label for="computerShow">
                  <input type="checkbox" name="computerShow" id="computerShow" v-model="computerShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">電腦名稱</span>
                </label>
              </div>
              <div class="check-block">
                <label for="updatedShow">
                  <input type="checkbox" name="updatedShow" id="updatedShow" v-model="updatedShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">已更新</span>
                </label>
              </div>
              <div class="check-block">
                <label for="notyetShow">
                  <input type="checkbox" name="notyetShow" id="notyetShow" v-model="notyetShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">未安裝</span>
                </label>
              </div>
              <div class="check-block">
                <label for="systemShow">
                  <input type="checkbox" name="systemShow" id="systemShow" v-model="systemShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">作業系統</span>
                </label>
              </div>
              <div class="check-block">
                <label for="timeShow">
                  <input type="checkbox" name="timeShow" id="timeShow" v-model="timeShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">最後登入時間</span>
                </label>
              </div>
              <div class="check-block">
                <label for="accountShow">
                  <input type="checkbox" name="accountShow" id="accountShow" v-model="accountShow">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">最後登入帳號</span>
                </label>
              </div>
              <div class="check-block">
                <label for="showAll">
                  <input type="checkbox" name="showAll" id="showAll" @click="show" v-model="showAll">
                  <span class="custom-checkbox"></span>
                  <span class="lable-text">顯示全部</span>
                </label>
              </div>
            </form>
          </div>
          <button><file-icon/>報告總表</button>
          <button class="delete-btn" @click="deleteSelectedItems"><delete-icon/>刪除</button>
        </div>
        <div class="table-block">
          <table class="property-table">
            <thead>
              <tr>
                <th class="col-select" @click.prevent></th>
                <th class="col-dept" v-show="deptShow" @click.prevent="listSort('dept')">單位</th>
                <th class="col-ip" v-show="ipShow" @click.prevent="listSort('ip')">IP</th>
                <th class="col-computer" v-show="computerShow" @click.prevent="listSort('computer')">電腦名稱</th>
                <th class="col-updated" v-show="updatedShow" @click.prevent="listSort('updated')">已安裝</th>
                <th class="col-notyet" v-show="notyetShow" @click.prevent="listSort('notyet')">未安裝</th>
                <th class="col-system" v-show="systemShow" @click.prevent="listSort('system')">作業系統</th>
                <th class="col-time"  v-show="timeShow" @click.prevent="listSort('time')">最後登入時間</th>
                <th class="col-account" v-show="accountShow" @click.prevent="listSort('account')">最後登入帳號</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in listItems" :key="item.timestamp" @click="itemSelect(item)" :class="{'selected-row' : item.selected}">
                <td class="col-select"><a href="#" class="select-indicator" :class="{'selected' : item.selected}" @click.prevent></a></td>
                <td class="col-dept" v-show="deptShow">{{item.dept}}</td>
                <td class="col-ip" v-show="ipShow">{{item.ip}}</td>
                <td class="col-computer" v-show="computerShow">{{item.computer}}</td>
                <td class="col-updated" v-show="updatedShow">{{item.updated}}</td>
                <td class="col-notyet" v-show="notyetShow">{{item.notyet}}</td>
                <td class="col-system" v-show="systemShow">{{item.system}}</td>
                <td class="col-time" v-show="timeShow">{{item.time}}</td>
                <td class="col-account" v-show="accountShow">{{item.account}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import contentHeader from '@/components/content/contentHeader.vue'
export default {
  name: 'Home',
  components: {
    contentHeader
  },
  data: () => ({
    filterMenuShow: false,
    selectShow: true,
    deptShow: true,
    ipShow: true,
    computerShow: true,
    updatedShow: true,
    notyetShow: true,
    systemShow: true,
    timeShow: true,
    accountShow: true,
    showAll: true,
    listItems: [
      {
        dept: '無單位',
        ip: '192.168.1.1',
        computer: 'N3T005',
        updated: 12,
        notyet: 45,
        system: 'Mac OS 10.2',
        time: '2020/02/25 11:04:00',
        account: 'TNTB/d045',
        timestamp: 12345,
        selected: false
      },
      {
        dept: '無單位',
        ip: '192.168.1.1',
        computer: 'N3T006',
        updated: 34,
        notyet: 111,
        system: 'Windows 10 Pro x64',
        time: '2020/02/25 11:04:05',
        account: 'TNTB/d123',
        timestamp: 67890,
        selected: false
      },
      {
        dept: '無單位',
        ip: '192.168.1.1',
        computer: 'N3T007',
        updated: 56,
        notyet: 20,
        system: 'Windows 10 Pro x64',
        time: '2020/02/25 11:04:05',
        account: 'TNTB/d102',
        timestamp: 34790,
        selected: false
      },
      {
        dept: '無單位',
        ip: '192.168.1.1',
        computer: 'N3T011',
        updated: 78,
        notyet: 10,
        system: 'Windows 10 Pro x64',
        time: '2020/02/25 11:04:05',
        account: 'TNTB/d002',
        timestamp: 12490,
        selected: false
      },
      {
        dept: '無單位',
        ip: '192.168.1.1',
        computer: 'N3T012',
        updated: 90,
        notyet: 321,
        system: 'Windows 10 Pro x64',
        time: '2020/02/25 11:04:05',
        account: 'TNTB/d002',
        timestamp: 61190,
        selected: false
      },
      {
        dept: '無單位',
        ip: '192.168.1.1',
        computer: 'N3T013',
        updated: 111,
        notyet: 123,
        system: 'Windows 10 Pro x64',
        time: '2020/02/25 11:04:05',
        account: 'TNTB/d402',
        timestamp: 67850,
        selected: false
      },
      {
        dept: '無單位',
        ip: '192.168.1.1',
        computer: 'N3T014',
        updated: 222,
        notyet: 834,
        system: 'Windows 10 Pro x64',
        time: '2020/02/25 11:04:05',
        account: 'TNTB/d002',
        timestamp: 67898,
        selected: false
      }
    ],
    tempList: []
  }),
  methods: {
    select () {
      console.log('selected')
    },
    toggelFilter (e) {
      e.stopPropagation()
      this.filterMenuShow = !this.filterMenuShow
    },
    closeFilter () {
      this.filterMenuShow = false
    },
    show () {
      this.showAll = !this.showAll
      this.selectShow = this.showAll
      this.deptShow = this.showAll
      this.ipShow = this.showAll
      this.computerShow = this.showAll
      this.updatedShow = this.showAll
      this.notyetShow = this.showAll
      this.systemShow = this.showAll
      this.timeShow = this.showAll
      this.accountShow = this.showAll
    },
    itemSelect (listItem) {
      listItem.selected = !listItem.selected
      console.log(listItem.timestamp)
      console.log('current stat ' + listItem.selected)
      if (listItem.selected) {
        const hasItem = this.tempList.some((item) => item === listItem)
        console.log(hasItem)
        if (!hasItem) {
          this.tempList.push(listItem)
        }
        console.log(this.tempList)
      } else {
        this.tempList = this.tempList.filter(item => item !== listItem)
        console.log(this.tempList)
      }
    },
    // selectAll () {
    //   if (this.tempList === this.listItems) {
    //     this.listItems.forEach(item => { item.selected = false })
    //     this.tempList = []
    //   } else {
    //     this.listItems.forEach(item => {
    //       item.selected = true
    //       this.tempList.push(item)
    //     })
    //   }
    // },
    deleteSelectedItems () {
      if (!this.tempList.length) {
        this.$modal.show('dialog', {
          title: '<h4 style="text-align: center;"><span data-v-71e61faf="" aria-label="Alert icon" role="img" class="material-design-icon alert-icon"><svg data-v-71e61faf="" fill="rgb(255 94 94)" width="50" height="50" viewBox="0 0 24 24" class="material-design-icon__svg"><path data-v-71e61faf="" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"><title data-v-71e61faf="">Alert icon</title></path></svg></span></h4>',
          text: '<p style="text-align: center;">未選取資料</p>'
        })
      } else {
        this.$modal.show('dialog', {
          classes: 'asd',
          title: '<h4 style="text-align: center;"><span data-v-71e61faf="" aria-label="Alert icon" role="img" class="material-design-icon alert-icon"><svg data-v-71e61faf="" fill="rgb(255 94 94)" width="50" height="50" viewBox="0 0 24 24" class="material-design-icon__svg"><path data-v-71e61faf="" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"><title data-v-71e61faf="">Alert icon</title></path></svg></span></h4>',
          text: '<p style="text-align: center;">確定刪除選擇資料?</p>',
          buttons: [
            {
              title: '確認刪除',
              handler: () => {
                console.log(this.tempList)
                this.tempList.forEach(item => {
                  const deleteIndex = this.listItems.indexOf(item)
                  this.listItems.splice(deleteIndex, 1)
                })
                this.tempList = []
                this.$modal.hide('dialog')
              }
            }
          ]
        })
      }
    },
    listSort (method) {
      if (method === 'selected') {
        this.listItems.sort((a, b) => {
          return (a.selected === b.selected) ? 0 : a.selected ? -1 : 1
        })
      } else {
        this.listItems.sort((a, b) => {
          return a.method - b.method ? 1 : -1
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/button.scss';
@import '@/assets/style/scss/blocks.scss';

.table-topbar{
  display: flex;
  position: relative;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 10px 10px 0 0;
  *+*{
    margin-left: 20px;
  }
  button{
    @extend %nav-link;
    .material-design-icon{
      margin-right: 5px;
    }
  }
  .delete-btn{
    color: #ff4949;
    margin-left: auto;
    &:hover{
      color: darken(#ff4949, 20%);
    }
  }
}
.table-container{
  box-shadow: 0 0px 22px -12px #000000d1;
  border-radius: 10px;
}
.table-block{
  overflow-x: scroll;
}
.property-table{
  tbody{
    display: block;
    height: 500px;
    overflow: auto;
    tr{
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
  }
  tr{
    display: table;
    table-layout: fixed;
    height: 50px;
  }
  thead{
    color: #00000069;
  }
  th{
    cursor: pointer;
  }
  th, td {
    text-align: center;
    vertical-align: middle;
  }
}

.filter-menu{
  position: absolute;
  top: 62px;
  width: auto;
}

.filter-form{
  display: flex;
  flex-wrap: wrap;
  max-width: 59%;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 7px 1px #0000003d;
  label{
    .lable-text{
      vertical-align: text-top;
      margin: 0;
    }
    input{
      opacity: 0;
    }
    .custom-checkbox{
      margin: 0 10px 0 0;
      background-color: transparent;
      position: relative;
      width: 20px;
      height: 20px;
      display: inline-block;
      border: 1px solid black;
      border-radius: 20px;
      transition: 0.5s;
      &::after{
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        height: 0;
        width: 0;
        border-radius: 0 0 2px 0;
        border: none;
        border-width: 0 2px 2px 0;
        opacity: 1;
      }
    }
    input:checked ~ .custom-checkbox{
      background-color: $base;
      width: 20px;
      height: 20px;
      display: inline-block;
      border: none;
      border-radius: 20px;
      &::after{
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 8;
        top: 3;
        width: 7px;
        height: 13px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        background-color: transparent;
      }
    }
  }
  .check-block{
    flex: 0 0 33.33333333%;
    margin: 0;
    padding: 30px 0px;
  }
}

.select-indicator{
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #ffffff;
  display: inline-block;
  border: 1px solid black;
  transition: 0.3s all;
}
.selected {
  background: darken($darker-background-text, 20%);
  border: none;
  &::after{
    position: absolute;
    content: '';
    transform: rotate(45deg) scale(1);
    opacity: 1;
    right: 22px;
    top: 15px;
    width: 7px;
    height: 13px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    background-color: transparent;
  }
}
.selected-row{
  background-color: lighten($base, 13%) !important;
}

.col-select{
  min-width: 50px;
  position: relative;
}
.col-dept{
  min-width: 50px;
}
.col-ip{
  min-width: 180px;
}
.col-computer{
  min-width: 90px;
}
.col-updated{
  min-width: 100px;
}
.col-notyet{
  min-width: 100px;
}
.col-system{
  min-width: 190px;
}
.col-time{
  min-width: 190px;
}
.col-account{
  min-width: 190px;
}

</style>
