<template>
  <div>
      
  </div>
</template>

<script>
import {getHomeMultidata} from '../../network/home'
export default {
    data(){
      return {
        banner:[],
        musicRanking:[]
      }
    },
    created(){
     getHomeMultidata().then(res => {
      // this.banner = res.data.banner.list
      console.log(res.result)
      })
    }
}
</script>

<style>

</style>