<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>
<script>
import header from "./component/header.vue";
export default {
  components:{
      'app-header':header
  }
}
</script>