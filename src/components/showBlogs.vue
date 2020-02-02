<template>

    <div v-theme:column="'wide'" id="show-blogs">
        <h1 class="title">All Blog Articles</h1>
        <div v-if="blog" class="single-blog">
            <router-link to="/">Back</router-link>
            <h2 v-rainbow>{{ blog.title}}</h2>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {},
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
    created()  {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
            this.blog = data.body;
            console.log(this.blog);
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
</style>
