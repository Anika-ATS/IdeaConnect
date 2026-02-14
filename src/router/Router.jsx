import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import SubmitWork from "../pages/SubmitWork/SubmitWork";
import NoticePage from "../pages/Noticepage/NoticePage";

export  const router = createBrowserRouter([

  { path: "/", 
     Component: RootLayout ,
      children: [
      { index: true, 
        Component: Home 
      },

      {
        path:'submit',
        element:<SubmitWork></SubmitWork>
      },
      {
        path:'notice',
        element:<NoticePage></NoticePage>
      },
    
    
    
    ]
    
    
    
    
    
    
    
    }
]);