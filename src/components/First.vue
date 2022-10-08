<template>
    
    <div class="register" >     
        <h1>Sign in</h1>   
        <input v-model="name" type="text" placeholder="Enter Your Name" >
        <input v-model="e_mail" type="email" placeholder="Enter Your Mail" >
        <input v-model="password" type="password" placeholder="Enter Your Password" >
        <button @click="signUp" >Sign up</button>
    </div>
</template>

<script lang="ts">
    import  axios from 'axios';
    export default {
    name : 'SignUp',
    data(){
        return {
            name:'',
            e_mail: '',
            password : '',
                }
    },
    methods:{
        async signUp(){
            let result= await axios.post("http://localhost:3000/items",{
                name: this.name,
                email:this.e_mail,
                password:this.password
            })
            
            if (result.status == 201) {
                alert("signup done")
                localStorage.setItem("user-data",JSON.stringify(result.data))
            }
            
        },

    }

}

</script>

<style>
.register input{
    width: 400px;
    height: 40px;
    border: 1px solid cyan;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    display: block;
}
.register h1{
    margin-bottom: 5px;
}

.register button{
    width: 400px;
    height: 40px;
    background-color: green;
    margin-top: 30px;
}   
</style>