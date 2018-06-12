<template>
    <div class="posts">
        <h1>ADD POST</h1>
        <div class="form">
            <div>
                <input type="text" id="title" name="title" placeholder="TITLE" v-model="title"/>
            </div>
            <div>
                <textarea rows="15" cols="15" id="description" placeholder="DESCRIPTION" v-model="description"></textarea>
            </div>
            <div>
                <button class="app_post_btn" @click="addPost">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
// exlint-disable-next-line
/* eslint-disable */
    import PostService from '@/services/PostService'
    export default { 
        name: 'NewPost',
        data () {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            // validation () {
            //     let title = document.querySelector('title');
            //     let description = document.querySelector('description');

            //     if (title == "") {
            //         console.log('Fill in title');
            //     }
            //     else {
            //         //Reroute to /post after addPost() runs
            //         this.$router.push({name: 'Posts'})
            //     }
            // },
            async addPost () {
                await PostService.addPost({
                    title: this.title,
                    description: this.description
                })
                //Reroute to /post after addPost() runs
                    this.$router.push({name: 'Posts'})
                //validation()
            }
            
        }
    }
</script>

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>