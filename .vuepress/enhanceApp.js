import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue"
import './theme/styles/index.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
}) => {};