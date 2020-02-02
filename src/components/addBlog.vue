<template>
  <div id="add-blog">
    <h2>Add a new Blog Post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label >Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label >widgets</label>
        <input type="checkbox" value="widgets" v-model="blog.categories">
        <label >Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label >Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <div id="selectBox">
        <label>Authors:</label>
        <select v-model="blog.author">
          <option v-for="author in authors"> {{author.name}}</option>
        </select>
      </div>
      <hr />
      <button v-on:click.prevent="post">Add Blog</button>
      <router-link to="/">Cancel</router-link>
      <div v-if="submitted">
        Thanks for adding the post
      </div>
    </form>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content: </p>
        <p>{{blog.content}}</p>
        <p>Blog Categories</p>
        <ul>
          <li v-for="category in blog.categories">
            {{ category }}
          </li>
        </ul>
        <p>Author: {{blog.author}}</p>
    </div>

  </div>
</template>
<script>
// Imports
export default {
  /*  props: {
      blog: {
        title: '',
        content: '',
      }
    } */
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: [
              {id: 1, name:'The Net Ninja'},
              {id: 2, name:'The Angular Avenger'},
              {id: 3, name:'The vue Vinidicator'},
            ],
            submitted: false
        }
    },
    methods: {
    post: function(){

         this.$http.post('https://vue-playlist-bb7f8.firebaseio.com/posts.json', this.blog).then(function(data){
             console.log(data);
             this.submitted = true;
         });
     }
    }
}
</script>
<style scoped>
#add-blog *{
  box-sizing: border-box;

}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  text-align: left;
}
input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px;
  text-align: left;
}

h3 {
  margin-top: 10px;
}

#checkboxes {

  display: inline-block;
  margin-right: 10px;

}

#checkboxes label {
 display: inline-block;

}
 #selectBox {
   text-align: left;
   display: block;
   width: 100%;
   padding: 8px;
 }

</style>
