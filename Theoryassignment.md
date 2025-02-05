
##Theory assignment `ch07 Finding the path`

### 1) What are various ways to add images into our App? Explain with code examples.

1. Using the direct link of img URL in img tag.

<img src="URL here" alt="image" />


2. Import it through component 

````
import logo from ./logo.png;

export default Function App (){

    return <img src={logo} alt="React Logo" />
}
````
3. The good way to add images is through having a separate folder in the project for images. 

````
import banner from ./assests/imgs/banner.jpg;

export default Function App () {

return  <img src={banner} alt="banner image here"  />

}

````

### 2) What would happen if we do console.log(useState())? 

If we do ``console.log(useState())`` we get two arrays [undefined, function] where first one is state which is undefined and second one is set state function is bound dispatchSetState. 

### 3)  How will useEffect behave if we don't add a dependency array ? 

`useEffect(() => {},[]);` 


1. When the dependency array is `NOT` included in the argument of useEffect hook,  the callback function will be executed everytime and component is rendered and re-rendered.


````
useEffect(() => {
    console.log("This will render and re-render")
});

````
2. When the dependency array in the argument of useEffect hook is `EMPTY`
the callback function would be executed only one time during the initial render of the component. 

```
useEffect(()=> {
 console.log("This will execute every time when the condition changes");
}, [condition])
```

3. When the dependency array `contains a condition`, the callback function will be executed `one time` during the initial render of the component and rendered if `condition is changed`.

```
useEffect(() => {
    console.log("This runs when the condition changes ");
}, [condition])

```

### 3) What is SPA ?
Single page application is a web app which dynamically updates the web page data from server without reloading the page.


### 4) What is the difference between Client Side Routing and Server Side Routing? 

In Server-side routing or rendering (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In Client-side routing or rendering (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing.



