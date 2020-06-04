<template>
<div>
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;" 
     v-for="posts in post" @click="findDetail(posts)">
  <div class="card-header">Name : {{posts.restaurant_name}}</div>
  <div class="card-body">
    <h4 class="card-title">Cuisines : {{posts.restaurant_cuisines}}</h4>
    <p class="card-text">Average cost for two: {{posts.restaurant_average_cost_for_two}}</p>
    <p class="card-text">Currency accepted: {{posts.currency}}</p>
    <p class="card-text">Table booking: {{posts.has_table_booking}}</p>
    <p class="card-text">Aggregate rating: {{posts.aggregate_rating}}</p>
    <p class="card-text">Rating Text: {{posts.rating_text}}</p>
    <p class="card-text">Votes: {{posts.votes}}</p>
  </div>
</div>
</div>
    
</template>
<script>
import { EventBus } from "../../main";
export default {
    data(){
        return{
            post:[]
        }
    },
    methods:{
        findDetail(postss){
            //find the id in another document
            //then print the detail
            let uri='http://localhost:4000/posts/findId/'+postss.restaurant_id;
            this.axios.get(uri).then(res=>{
                EventBus.$emit('buttonClicked',res.data);
                //console.log("lati",res.data.latitude);
                EventBus.$emit('LatLong',[res.data.latitude,res.data.longitude]);
            });
        }
    },
    created(){
        let uri='http://localhost:4000/posts/getRestName';
        this.axios.get(uri).then(res=>{
            this.post=res.data;
            console.log("sadfghjkl",res.data.length);
        });
        EventBus.$on("increment",res=>{
            this.post=res;
        });
        EventBus.$on("decrement",res=>{
            this.post=res;
        });
        EventBus.$on("ratingdec",res=>{
            this.post=res;
        });
        EventBus.$on("costfortwo",res=>{
            this.post=res;
        });
        EventBus.$on("restDetail",res=>{
            this.post=res;
        });
    }
}
</script>