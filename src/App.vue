<template>
  <div id="app">

    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
      <router-view></router-view>
  <!--  <button @click="component='list-blog'">Blog Index</button>
    <button @click="component='show-blog'">Show Blog</button>
      <button @click="component='add-blog'">Add Blog</button>


    <button @click="component='form-one'">Show form one</button>
    <button @click="component='form-two'">Show form two</button>
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <app-ninjas v-bind:ninjas="ninjas">
      <h3>List of Ninjas</h3>
    </app-ninjas> -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-one': formOne,
    'form-two': formTwo,
    'add-blog': addBlog,
    'show-blog': showBlogs,
    'list-blog': listBlogs,
  },
  data () {
    return {
    ninjas: [
      {name:'Ryu', speciality:'Vue components',show:false},
      {name:'Crystal', speciality:'Html widgets',show:true},
      {name:'Hitoshi', speciality:'Click Events',show:false},
      {name:'Tango', speciality:'Conditionals',show:true},
      {name:'Kami', speciality:'Webpack',show:false},
      {name:'Yoshi', speciality:'Data diggin',show:true}
    ],
    title: 'Vue Ninjasteo'
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
