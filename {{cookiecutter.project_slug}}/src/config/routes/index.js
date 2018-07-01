import settings from '../settings'

let routes = []

for (app in settings.INSTALLED_APPS) {
  // const importPath = `../../apps/${app}/routes`
  // import appRoutes from importPath
  // routes.push(Object.values(appRoutes))
  console.log(app)
}

export default routes
