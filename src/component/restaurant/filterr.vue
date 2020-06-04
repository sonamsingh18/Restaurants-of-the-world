<template>
    <div>
        
        <button type="button" class="btn btn-outline-primary space" @click="increment()">Increment</button>
        <button type="button" class="btn btn-outline-secondary" @click="decrement()">Decrement</button>
        <button type="button" class="btn btn-outline-success" @click="ratincrement()">Rating Increment</button>
        <button type="button" class="btn btn-outline-info" @click="cost_for_two_increment()">Best cost for Two</button>
        
    </div>
</template>
<script>
import { EventBus } from "../../main";
export default {
    methods:{
        increment(){
            //sort in ascending
            //steps to be followed 1.get all the data from database
            let uri='http://localhost:4000/posts/sortVotes';
            this.axios.get(uri).then(res=>{
                
                EventBus.$emit("increment",res.data);
            });
        },
        decrement(){
            //sort in ascending
            //steps to be followed 1.get all the data from database
            let uri='http://localhost:4000/posts/sortVotesDec';
            this.axios.get(uri).then(res=>{
                EventBus.$emit("decrement",res.data);
            });
        },
        ratincrement(){
            let uri='http://localhost:4000/posts/ratingDec';
            this.axios.get(uri).then(res=>{
                EventBus.$emit("ratingdec",res.data);
            });
        },
        cost_for_two_increment(){
            let uri='http://localhost:4000/posts/costForTwo';
            this.axios.get(uri).then(res=>{
                EventBus.$emit("costfortwo",res.data);
            });
        }
    }
}
</script>

<style scoped>
.space{
    border-spacing: 15px 50px;
}
</style>