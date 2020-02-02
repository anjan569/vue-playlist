<template>
    <div v-theme:column="'wide'" id="show-blogs">
      <div class="blogHeader">
        <h1 class="title">List Blog Titles</h1>
        <router-link class="blogAdd" to="/add">+Add Blog </router-link>
      </div>
         <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'/show/'+blog.id">
            <h2 v-rainbow>
              {{ blog.title | toUppercase }}
            </h2>
          </router-link>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    computed: {

    },
    filters: {
      toUppercase(value){
         return value.toUpperCase();
      }
    },
    directives: {
      'rainbow': {
        bind(el,binding,vnode) {
          el.style.color = "#"+Math.random().toString(16).slice(2,8);
        }
      }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
    mixins: [searchMixin]
}
</script>

<style>
.title {
  text-align: left;
}
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    text-align: left;
}
.blogHeader {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
}
.blogAdd {
  flot: right;
}
</style>
