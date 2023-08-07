import { FIRST_LOGIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Auth } from "../pages/Auth";
import { FirstAuth } from "../pages/FirstAuth";


export const authRoutes = [ 
    
];

export const publicRoutes = [ 
    {
        path: LOGIN_ROUTE,
        element: <Auth/>,
    },
    {
        path: FIRST_LOGIN_ROUTE,
        element: <FirstAuth/>,
    },
    {
        path: '/*',
        element: <Auth/>
    }
];