<template>

    <div v-theme:column="'wide'" id="show-blogs">
        <h1 class="title">All Blog Articles</h1>
        <div v-if="blog" class="single-blog">
            <router-link to="/">Back</router-link>
            <h2 v-rainbow>{{ blog.title}}</h2>
            <article>{{ blog.content }}</article>
            <p>Categories: </p>
            <div id="checkboxes">
              <label >Ninjas</label>
              <input type="checkbox" disabled="true" value="ninjas" v-model="blog.categories">
              <label >widgets</label>
              <input type="checkbox" disabled="true" value="widgets" v-model="blog.categories">
              <label >Mario</label>
              <input type="checkbox" disabled="true" value="mario" v-model="blog.categories">
              <label >Cheese</label>
              <input type="checkbox" disabled="true" value="cheese" v-model="blog.categories">
            </div>
            <p>Autor: </p>
            <div id="selectBox">

              <select v-model="blog.author" disabled="true">
                <option v-for="author in authors"> {{author.name}}</option>
              </select>
            </div>
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
            search: '',
            authors: [
              {id: 1, name:'The Net Ninja'},
              {id: 2, name:'The Angular Avenger'},
              {id: 3, name:'The vue Vinidicator'},
            ],
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
        this.$http.get('https://vue-playlist-bb7f8.firebaseio.com/posts/'+this.id+'.json').then(function(data){
            return data.json();
        }).then(function(data) {
          this.blog = data;
          console.log(this.blog);
        })
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
