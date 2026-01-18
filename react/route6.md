## 单页面和多页面

多页面

本质是多个html 文件  通过window.location 进行跳转 每次跳转都要重新加载资源性能比较慢

SEO友好适合C端隔离性好  每一个页面可以是一个独立的项目 

单页面

本质 只有一个html文件 通过js控制  比较适合B端项目

缺陷SEO不好  

优点 页面跳转不刷新 

## react-router与 react-router-dom

react-router  用于跨端开发 Native

react-router-dom用于网页开发 依赖react-router



```node
npm i react-router-dom
```

## 路由模式

1. BrowserRouter

   ```tsx
   <BrowserRouter basename='pc'>
     <Routes>
       <Route path="/" element={<App />} >
         <Route path="about" element={<About />} />
         <Route path="contact" element={<Contact />} />
       </Route>
       {/* <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} /> */}
     </Routes>
      </BrowserRouter>
   ```

   

2. HashRouterm

​     了解即可

​      1.很丑

​      2。后期服务段要改造

```tsx
 <HashRouter basename='pc'>
  <Routes>
    <Route path="/" element={<App />} >
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
    {/* <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} /> */}
  </Routes>
  </HashRouter>
```
3. MemoryRouter

   内存路由做单元测试

4. StacticRouter

    静态路由

5. NativeRouter

    做跨端时所用的路由





###  BrowserRouter  一些坑

#### BrowserRouter  404 问题

服务器两种服务

接口服务

模板服务

服务器进行配置 除接口以外的 都返回index.html

## ReactRouter6 标签

1.  BrowserRouter 路由模式标签
2. Routes 路由集合 标签
3. Route 路由项标签
4. Outlet   占位符标签  用于子路由渲染
5. Link  用于跳转
6. NavLink Link标签进阶版适用于导航栏

```tsx
//main.tsx
eg:<BrowserRouter basename='pc'>
  <Routes>
    <Route path="/" element={<App />} >
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes> 
   </BrowserRouter>
//app.tsx
    <Link to="/"> Home</Link>
    <Link to="/about"> About</Link>
    <Link to="/contact"> Contact</Link>
    <h1>app</h1>
    <Outlet /> 为子路由占位渲染子路由
    </>

```

## 常用钩子

1. useLocation //获取当前路由的信息是一个对象
2. useNavigate // 编程式路由跳转
3. useParams //获取路由参数
4. useMatch  //匹配路径 返回一个对象

```tsx
eg:  //app.tsx
<button onClick={()=>navigate('/about',{
    state:{
      id:'123',
      name:'张三',
      age:18,
    }
    })}>跳转到about页
    </button>
    <button onClick={()=>navigate('/contact',{
    state:{
      id:'123',
      name:'张三',
      age:18,
    }
    })}>跳转到contact页
    </button>
    <Outlet />
    </>
//about.tsx
   const location=useLocation()
    console.log(location.state) 
//contact.tsx
 const location=useLocation()
console.log(location)
 const match=useMatch('/contact/:id?')
 console.log(match,'xxxx')
//当发生跳转时打印
//about
{id: '123', name: '张三', age: 18}
//contact
{pathname: '/contact', search: '', hash: '', state: {…}, key: 'u9kuu0v0'}
{params: {…}, pathname: '/contact', pathnameBase: '/contact', pattern: {…}}
```

​    useNavigate做返回 只需要传入值为负值 例如-1 返回跳转一次

## 动态路由

当我们做这这样的路由时例如 xxxx.com/12312时就需要动态路由 也很简单 只需要 在路径中添加占位符就好了

或者xxxx.com/?age=12&name时不需要占位  使用useSearchParams设置 然后会自动添加到路由中

eg：

```tsx
 <Route path ="contact/:id?" element={<Contact />} /> 
//获取路由路径中的params 参数 
 const params =useParams()
 params.id
```

### params参数

   使用useParams

```tsx
//获取路由路径中的params 参数 
 const params =useParams()
 params.id
```

### query参数

  使用useSearchParams

```tsx
//当前地址  http://localhost:5174/pc/contact/?name=hhhh&gae=13
const [Search,setSearch]=useSearchParams()
    console.log(Search.get('name'))///hhhh

//设置查询参数setSearch()
setSearch({
    obj:'化学'
})//http://localhost:5174/pc/contact/?obj=化学
```

## 数据路由

   使用另一种路由创建方式  createBrowserRouter() 搭配`<RouterProvider>`

​    通过在路由标签 配置项loader 中请求操作然后通过useLocatinData钩子去 拿请求的数据

​    loader中内置一个params 参数 是一个对象包含路由的一些信息 还有request项

```tsx
eg:
//main.tsx
const route=createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={< App />} >
      <Route path="about" element={<About />} />
      <Route path="contact/:id?" loader={ async(params)=>{
             const currentUrl=new Url(params.request.url)
             currentUrl.searchParams.get("name")获取query参数
                //params loader提供的参数  可以获取一些可能会用的到请求的信息
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
       return res
      }} element={<Contact />} />
    </Route>
))
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={route} />
  </StrictMode>,
)
//contact.tsx
 const res=useLoaderData()
 console.log(res,'res')
```

 对象模式

```tsx
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact/:id?',
        loader: async ({ params }) => {
          console.log(params);
          console.log('数据路由');
          const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
          return res.json();
        },
        element: <Contact />,
      },
    ],
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}

```

解决核心问题

瀑布流问题

## 分包优化

使用 lazy 动态加载 文件

```tsx
eg:
const App = lazy(() => import('./App'));
const Contact = lazy(() => import('./routes/contact'));
```

## 其他补充

### Suspense

Suspense 是 React 用来处理“异步加载状态”的组件。

用途：

- 等待懒加载组件

- 等待异步数据

  ```tsx
  const Contact = React.lazy(() => import('./Contact'));
  <Suspense fallback={<div>加载中...</div>}>
  <Contact />
  </Suspense>
  ```

  

### Await

`<Await>` 是 React Router 数据路由中的组件，用来渲染 loader 返回的 Promise 数据。

```tsx
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
export default function Contact() {
const data = useLoaderData() as { user: Promise<any> };
return (
<Suspense fallback={<div>加载用户中...</div>}>
<Await resolve={data.user}>
{(user) => <div>{user.name}</div>}
</Await>
</Suspense>
);
}
```

### defer

`defer()` 用来让 loader 返回 Promise 数据，而不是阻塞等待结果。

❌ 传统 loader（阻塞）

```tsx
export async function loader() {

  const user = await fetch('/api/user').then(res => res.json());

  return { user };

}
```

✅ 使用 defer（不阻塞）

```tsx
import { defer } from 'react-router-dom';
export function loader() {
return defer({
user: fetch('/api/user').then(res => res.json()),
});
}
```

### 三者关系图（核心理解）

| 角色       | 作用                          |
| ---------- | ----------------------------- |
| `defer`    | 在 loader 中返回 Promise 数据 |
| `Suspense` | 提供加载中的 UI               |
| `<Await>`  | 渲染 Promise 解析后的数据     |

👉 三者组合 = **页面先渲染，数据后填充（流式加载）**。

## 实践案例

loader.ts文件

```
import { defer } from 'react-router-dom';

export function contactLoader({ params }) {
return defer({
user: fetch(`https://jsonplaceholder.typicode.com/users/${params.id || 1}`)
.then(res => res.json()),
});
}
```

router.tsx文件

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { contactLoader } from './routes/contact/loader';
const App = lazy(() => import('./App'));
const Contact = lazy(() => import('./routes/contact'));
const router = createBrowserRouter([
{
path: '/',
element: (
<Suspense fallback={<div>App loading...</div>}>
<App />
</Suspense>
),
children: [
{
path: 'contact/:id?',
loader: contactLoader,
element: (
<Suspense fallback={<div>Contact loading...</div>}>
<Contact />
</Suspense>
         ),
      },
     ],
    },
 ]);
export default function Root() {
return <RouterProvider router={router} />;
}
```

