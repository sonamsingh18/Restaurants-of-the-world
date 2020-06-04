<template>

<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand">Restaurant Finder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search Restaurant" v-model="searchRest">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="search()">Search</button>
    </form>
    
    <h4 v-if="flag">welcome : {{user}}</h4>
  </div>
</nav>
</div>
    
</template>

<script>
import { EventBus } from '../main';
export default {
    data(){
        return{
            searchRest:'',
            user:'',
            flag:''
        }
    },
    methods:{
        search(){
            let dummy=this.searchRest.trim();
            if(dummy.length!=0){
                //search for restaurant name
                let uri='http://localhost:4000/posts/searchName/'+dummy;
                this.axios.get(uri).then(res=>{
                    if(res.data!=null){
                        EventBus.$emit("restDetail",[res.data]);
                    }
                });
                //search for cuisine
            }
            else{
                let uri='http://localhost:4000/posts/getRestName';
                this.axios.get(uri).then(res=>{
                    this.post=res.data;
                    EventBus.$emit("restDetail",res.data);
                });
            }
        }
    },
    created(){
        EventBus.$on("flag",data=>{
            this.user=data[1];
            this.flag=data[0];
        });
    }
}
</script>

<style scoped>
#rstraunt{
    color: blanchedalmond;
}
</style>