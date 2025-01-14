
useEffect(()=> {
},[]);

UseEffect by defaults get calls everytimes its render 

callback is mandatory,array is not.

--if no array => useEffect will called after every render of component 

--if theres empty array useEffect will be called on initial render & just once.

--if the dependancy array is state its render only on state updates

// To create paths we using react router dom 

import createBrowserRouter from react-router-dom

const appRouter = createBrowserRouter ([
    {
    path:"/"
    element:<AppLayout/>
    },
    {
        path:"/component name",
        element:<PassComponent/>
    }
])

- child routing done by outlet, import and use it in app

- put it inside children array in the same key value pair method 

```SPA - React is known as single page application cos its redenrs comp from single page and doesnt reload/refresh the entire page. 
we use client site render in this method. ```

useParams() hook used to access dynamic data from URL(here api), its from react-router-dom. eg./:resId in url will use the parameters of 










 ==============
| Error faced: |
 ==============
- Make sure the return statement and the JSX are on the same line, or wrap the JSX right after the return without a line break.
- deprecated 