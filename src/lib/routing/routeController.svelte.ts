import { goto } from "$app/navigation"

export type PageComponent = {
    path: string,
    component: any
}


const initialize = () => {
    let _routes : Map<string, any> = $state<Map<string, any>>(new Map<string, any>())
    let _currentRoute : string = $state<string>("")
    let _mainRoute : string = $state<string>("")

    const _pagePreffix : string = "?page="
    let _pageSuffix : string = btoa("suffix")
    let _reloader : ()=>void = $state(()=>{})
    return {
        /**Navigates to the page selected
         * @param path Route path of the page
         */
        RouteTo(path : string){
            if (_routes.has(path)) {
                _currentRoute = path
                _pageSuffix = btoa(_currentRoute)
                goto(_pagePreffix + _currentRoute + "#" + _pageSuffix + "/")
                this.Reload()
            }
        },
        /**
         * Initializes the path and components as a route
         * @param routes Contains the routes available
         * @param reloader Used for refreshing reactive content
         */
        InitializeRoutes(routes : PageComponent[], reloader : ()=>void) {
            if (_routes.size == 0) {
                _mainRoute = routes[0].path
                routes.forEach(route => {
                    _routes.set(route.path, route.component)
                })
            }
            _reloader = reloader
        },
        /**
         * Fetches the route from the URL
         */
        FetchRouteFromUrl() {
            let href : string= location.href
            if(href.includes(_pagePreffix)){
                const route = href.split(_pagePreffix)[1].split('#')[0]
                this.RouteTo(route)
            } else this.RouteTo('home')
        },
        get CurrentRoute () {
            return _routes.get(_currentRoute)
        },
        /**
         * Triggers the loaded reloader function
         */
        Reload() {
            _reloader()
        },
        get CurrentPath () {
            return _currentRoute
        }
    }
}
export function Page(path: string, component: any) : PageComponent{
    return {
        path: path,
        component: component
    }
}

export const controllers = initialize()