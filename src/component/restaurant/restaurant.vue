<template>

    <div>
      <div class="row">
    <div class="col-sm-12" style="background-color:lavender;">
      <app-filter></app-filter>
      <div class="row">
        <div class="col-sm-3" style="background-color:lightcyan;">
          <div class="smooth-scroll">
        <app-restaurant></app-restaurant>
        </div>
        </div>
        <div class="col-sm-9" style="background-color:lightgray;">
        <app-restaurant-detail></app-restaurant-detail>
        <app-map></app-map>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import filterr from './filterr';
import showrestaurant from './showrestaurant';
import mapp from './mapp';
import restaurantdetail from './restaurantdetail';
import { EventBus } from '../../main';
export default {
    data(){
        return{
            posts:[]
        }
    },
    beforeRouteEnter(to,from,next){
      EventBus.$on("flag",value=>{
        if(value[0]==1){
          next(true);
        }
      });
    },
    components:{
      "app-restaurant":showrestaurant,
      "app-restaurant-detail":restaurantdetail,
      "app-map":mapp,
      "app-filter":filterr
    }
}
</script>