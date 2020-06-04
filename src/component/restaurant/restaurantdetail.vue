<template>
    <div>
        <div class="card-header">Complete Address</div>
    <div class="card-body">
        <h4 class="card-title">Country code : {{post.country_code}}</h4>
        <p class="card-text">
            Address : {{post.address}}<br>
            locality: {{post.locality}}<br>
            City : {{post.city}}
        </p>
        
    </div>
    </div>
</template>


<script>
import { EventBus } from "../../main";
export default {
    data(){
        return{
            post:{
                _id:'',
                restaurant_id:0,
                country_code:0,
                city:'',
                address:'',
                locality:'',
                locality_verbose:'',
                longitude:0,
                latitude:0
            }
        }
    },
    created(){
        EventBus.$on('buttonClicked',data=>{
            this.post=data;
        });
        this.post.country_code=162;
        this.post.address="Third Floor, Century City Mall, Kalayaan Avenue, Poblacion, Makati City";
        this.post.city="Makati City";
        this.post.locality="Century City Mall, Poblacion, Makati City";
    }
}
</script>
