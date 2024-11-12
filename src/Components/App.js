import React from "react" ;
import ReactDOM from "react-dom/client" ;
import Header from "./Header";
import {createBrowserRouter,RouterProvider} from "react-router-dom" ;
import Projects from "./Projects";
const App = ()=>(
    <Header />
)
const route = createBrowserRouter([
    {
        path:"/", 
        element:<App />,
        errorElement: <h1>Error Page</h1>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<RouterProvider router={route} />)