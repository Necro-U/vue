<template>
<div class="login">
<input type="email" v-model="mail" placeholder="Enter your email">
<input type="password" v-model="password" placeholder="Enter your password">
<button @click="login">Login</button>
</div>
</template>


<script>
import axios from 'axios';


export default {
    name: 'Login',
    data(){
        return {
            mail:'',
            password:'',
        }
    },
    mounted(){
        if(localStorage.getItem("user-data")){
            this.$router.push({name:"Home"})
        }
    },

    methods:{
        async login(){
            let result = await axios.get(`http://localhost:3000/users?mail=${this.mail}&password=${this.password}`)
            if (result.status == 200 && result.data.length>0){
                localStorage.setItem("user-data",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
            console.log(result.data)
        }
    }
} 
</script>

<style>

.login {
    align-items: center;
    justify-content: center;
}

.login input {
    width: 400px;
    height: 40px;
    border: 1px solid lightblue;
    border-radius: 3px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    margin-top: 10px;
}

.login button {
    width: 200px;
    height: 25px;
    margin-left: 100px;
    margin-top: 35px;
    display: block;
}
</style>