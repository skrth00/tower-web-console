import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'

// Containers
import Full from 'containers/Full'

// Views
import Dashboard from 'views/Dashboard'

Vue.use(Router)
Vue.use(Resource)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://api.apiway.io',
  providers: {
    // Define OAuth providers config
    github: {
      clientId: '40b12bd8b129cc8803e3',
      redirectUri: 'http://apiway.io',
      scope: ['email', 'repo']
    }
  }
})

Vue.http.options.root = 'http://api.apiway.io'

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }

      ]
    }
  ]
})
