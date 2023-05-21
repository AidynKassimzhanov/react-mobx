import { DISCOVER_GAME_ROUTE, LOGIN_ROUTE, MOBX_ROUTE, REDUX_ROUTE } from "./utils/consts";
import DiscoverGames from "./pages/DiscoverGames";
import Auth from "./pages/Auth";

import MobxComponent from "./pages/MobxComponent";


export const publicRoutes = [
    
    {
        path: DISCOVER_GAME_ROUTE,
        Component: DiscoverGames
    },
    // {
    //     path: REDUX_ROUTE,
    //     Component: ReduxComponent
    // },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MOBX_ROUTE,
        Component: MobxComponent
    },
    // {
    //     path: REGISTRATION_ROUTE,
    //     Component: Auth
    // },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },

]