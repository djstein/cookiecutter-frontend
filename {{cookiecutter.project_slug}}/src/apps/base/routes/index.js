import DashboardContainer from '../containers/DashboardContainer'

import BaseLayout from '../../config/layouts/BaseLayout'

const routes = {
  index: {
    path: '/',
    exact: true,
    Component: DashboardContainer,
    Layout: NavBarLayout,
  },
}

export default routes
