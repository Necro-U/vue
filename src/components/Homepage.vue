<template>
    <Header />
    <div class="main">
    <h1>
        Homepage e hoşgeldiniz...
    </h1>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name:'HomePage',
    components : {
        Header,
    },
    mounted(){
        let user = localStorage.getItem("user-data")
        if(!user){
            this.$router.push({name:"SignUp"})
        }
    }

}
</script>

<style>
.main {
    display: block;   
}
</style>