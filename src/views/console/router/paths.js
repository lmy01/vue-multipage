/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/console/login',
    // Relative to /src/views
    view: 'Login'
  },
  {
    path: '/console/register',
    // Relative to /src/views
    view: 'Login'
  },
  {
    path: '/console/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/console/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/console/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/console/typography',
    view: 'Typography'
  },
  {
    path: '/console/icons',
    view: 'Icons'
  },
  {
    path: '/console/maps',
    view: 'Maps'
  },
  {
    path: '/console/notifications',
    view: 'Notifications'
  },
  {
    path: '/console/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
