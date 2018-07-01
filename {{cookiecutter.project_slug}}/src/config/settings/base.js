const Settings = {
  DEBUG: !!process.env.NODE_ENV === 'production',
  INSTALLED_APPS: ['base'],
  BASE_API_URL: 'api',
  ROOT_ROUTER: 'config.routes',
  ROOT_REDUCER: 'config.reducers',
}

export default Settings
