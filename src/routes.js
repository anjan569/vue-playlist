import showBlog from './components/showBlogs.vue';
import listBlog from './components/listBlogs.vue';
import addBlog from './components/addBlog.vue';


export default  [
  {path: '/', component:listBlog},
  {path:'/show/:id', component: showBlog},
  {path: '/add', component:addBlog},
  {path: '*' }
]
