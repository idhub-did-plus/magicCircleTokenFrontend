import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Search from "./search"
import List from "./list"
import Detail from "./detail"

export default new Router({
  routes: [
    {path:"/",redirect:"search"},
    Search,List,Detail
  ]
})
