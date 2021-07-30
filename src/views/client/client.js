// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import '@/views/client/components'

// // Plugins
import '@/plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import Client from './Client.vue'
import i18n from '@/i18n'
import router from './router/index.js'
import store from '@/views/console/store'

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(Client)
}).$mount('#app')
