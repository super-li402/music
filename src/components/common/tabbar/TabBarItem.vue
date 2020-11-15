<template>
    <div class="tar_bar_item" @click="itemClick"> 
        <div :style='{isActive}'><slot></slot></div>
    </div>
</template>


<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'black'
        }
    },
    computed: {
        isActive(){
            return (this.$route.path.indexOf(this.path) !== -1)?{background:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
        this.$router.push(this.path)
        }
    }
}
</script>

<style>
.tar_bar_item{
    flex: 1;
    text-align: center;
    line-height: 70px;
}
.tar_bar_item:hover{
    background:#000;
    cursor:pointer
}
</style>