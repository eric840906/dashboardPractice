
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import AccountCircle from 'vue-material-design-icons/AccountCircle.vue'
import ClipboardFileOutline from 'vue-material-design-icons/ClipboardFileOutline.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import FacebookMessenger from 'vue-material-design-icons/FacebookMessenger.vue'
import GooglePlus from 'vue-material-design-icons/GooglePlus.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Github from 'vue-material-design-icons/Github.vue'
import LaptopMac from 'vue-material-design-icons/LaptopMac.vue'
import Toolbox from 'vue-material-design-icons/Toolbox.vue'
import SchoolOutline from 'vue-material-design-icons/SchoolOutline.vue'
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue'
import Home from 'vue-material-design-icons/Home.vue'
import Email from 'vue-material-design-icons/EmailOutline.vue'
import Dashboard from 'vue-material-design-icons/ViewDashboardOutline.vue'
import Printer from 'vue-material-design-icons/Printer.vue'
import Server from 'vue-material-design-icons/ServerNetwork.vue'
import Coin from 'vue-material-design-icons/CurrencyUsdCircleOutline.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import Calendar from 'vue-material-design-icons/CalendarBlank.vue'
import Export from 'vue-material-design-icons/ApplicationExport.vue'
import Alert from 'vue-material-design-icons/Alert.vue'
import ProgressCheck from 'vue-material-design-icons/ProgressCheck.vue'
import ArrowRightDropCircleOutline from 'vue-material-design-icons/ArrowRightDropCircleOutline.vue'
import ArrowLeftDropCircleOutline from 'vue-material-design-icons/ArrowLeftDropCircleOutline.vue'
import Power from 'vue-material-design-icons/Power.vue'
import ProgressWrench from 'vue-material-design-icons/ProgressWrench.vue'
import LightningBolt from 'vue-material-design-icons/LightningBolt.vue'
import ProgressAlert from 'vue-material-design-icons/ProgressAlert.vue'
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'
import LockOutline from 'vue-material-design-icons/LockOutline.vue'
import ShieldCheckOutline from 'vue-material-design-icons/ShieldCheckOutline.vue'
import Autorenew from 'vue-material-design-icons/Autorenew.vue'
import CircleEditOutline from 'vue-material-design-icons/CircleEditOutline.vue'
import LogoutVariant from 'vue-material-design-icons/LogoutVariant.vue'
import Bell from 'vue-material-design-icons/Bell.vue'
import Delete from 'vue-material-design-icons/Delete.vue'
import FileDocumentOutline from 'vue-material-design-icons/FileDocumentOutline.vue'
import TableSearch from 'vue-material-design-icons/TableSearch.vue'
import ViewList from 'vue-material-design-icons/ViewList.vue'
import ViewGrid from 'vue-material-design-icons/ViewGrid.vue'
import FolderZipOutline from 'vue-material-design-icons/FolderZipOutline.vue'
import FilePdfBoxOutline from 'vue-material-design-icons/FilePdfBoxOutline.vue'
import FileWordOutline from 'vue-material-design-icons/FileWordOutline.vue'
import FileExcelOutline from 'vue-material-design-icons/FileExcelOutline.vue'
import FilePowerpointOutline from 'vue-material-design-icons/FilePowerpointOutline.vue'
import FileImageOutline from 'vue-material-design-icons/FileImageOutline.vue'

Vue.use(VModal, { dialog: true })
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('menu-icon', MenuIcon)
Vue.component('cog-icon', CogIcon)
Vue.component('user-icon', AccountCircle)
Vue.component('project-icon', ClipboardFileOutline)
Vue.component('likes-icon', HeartOutline)
Vue.component('fb-messenger-icon', FacebookMessenger)
Vue.component('google-plus-icon', GooglePlus)
Vue.component('twitter-icon', Twitter)
Vue.component('github-icon', Github)
Vue.component('mac-icon', LaptopMac)
Vue.component('tool-icon', Toolbox)
Vue.component('edu-icon', SchoolOutline)
Vue.component('marker-icon', MapMarkerOutline)
Vue.component('house-icon', Home)
Vue.component('email-icon', Email)
Vue.component('dashboard-icon', Dashboard)
Vue.component('printer-icon', Printer)
Vue.component('server-icon', Server)
Vue.component('coin-icon', Coin)
Vue.component('magnify-icon', Magnify)
Vue.component('calendar-icon', Calendar)
Vue.component('export-icon', Export)
Vue.component('warning-icon', Alert)
Vue.component('progress-icon', ProgressCheck)
Vue.component('right-control', ArrowRightDropCircleOutline)
Vue.component('left-control', ArrowLeftDropCircleOutline)
Vue.component('power-icon', Power)
Vue.component('ongoing-icon', ProgressWrench)
Vue.component('power-on-icon', LightningBolt)
Vue.component('alert-icon', ProgressAlert)
Vue.component('account-icon', AccountCircleOutline)
Vue.component('password-icon', LockOutline)
Vue.component('verify-icon', ShieldCheckOutline)
Vue.component('renew-icon', Autorenew)
Vue.component('edit-icon', CircleEditOutline)
Vue.component('logout-icon', LogoutVariant)
Vue.component('bell-icon', Bell)
Vue.component('delete-icon', Delete)
Vue.component('file-icon', FileDocumentOutline)
Vue.component('icon-txt', FileDocumentOutline)
Vue.component('table-search-icon', TableSearch)
Vue.component('list-mode-icon', ViewList)
Vue.component('grid-mode-icon', ViewGrid)
Vue.component('icon-zip', FolderZipOutline)
Vue.component('icon-pdf', FilePdfBoxOutline)
Vue.component('icon-docx', FileWordOutline)
Vue.component('icon-xlsx', FileExcelOutline)
Vue.component('icon-pptx', FilePowerpointOutline)
Vue.component('icon-img', FileImageOutline)

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
