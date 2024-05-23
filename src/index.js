import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {QueryClient, QueryClientProvider} from "react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
]);

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
