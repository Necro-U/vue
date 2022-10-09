<template>
    <h1>
        Homepage e hoşgeldiniz...
    </h1>
</template>

<script>
export default {
    name:'HomePage',
    mounted(){
        let user = localStorage.getItem("user-data")
        if(!user){
            this.$router.push({name:"SignUp"})
        }
    }

}
</script>