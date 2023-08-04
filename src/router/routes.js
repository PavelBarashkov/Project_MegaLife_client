import { LOGIN_ROUTE } from "../utils/consts";
import { Auth } from "../pages/Auth";

export const authRoutes = [ 
    
];

export const publicRoutes = [ 
    {
        path: LOGIN_ROUTE,
        element: <Auth/>,
    },
    {
        path: '/*',
        element: <Auth/>
    }
    
];