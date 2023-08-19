import { FIRST_LOGIN_ROUTE, LOGIN_ROUTE, RESET_PASSWORD_ROUTE, SAVE_PASSWORD_ROUTE } from "../utils/consts";
import { Auth } from "../pages/Auth";
import { FirstAuth } from "../pages/FirstAuth";
import { ResetPassword } from "../pages/ResetPassword";
import { SavePassword } from "../pages/SavePassword";



export const authRoutes = [ 
    
];

export const publicRoutes = [ 
    {
        path: RESET_PASSWORD_ROUTE,
        element: <ResetPassword/>,
    },
    {
        path: SAVE_PASSWORD_ROUTE,
        element: <SavePassword/>,
    },
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