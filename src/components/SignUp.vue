<template>
    
    <div class="register" >     
        <h1>Sign in</h1>   
        <input v-model="name" type="text" placeholder="Enter Your Name" >
        <input v-model="e_mail" type="email" placeholder="Enter Your Mail" >
        <input v-model="password" type="password" placeholder="Enter Your Password" >
        <button @click="signUp" >Sign up</button>
        <p>
            if you already have an account <router-link to='/login'>Login</router-link>
        </p>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:"SignUp",
        data(){
            return{
                name: '',
                e_mail: '',
                password: '',
            }
        },
        methods : {
            async signUp (){ 
                let result = await axios.post('http://localhost:3000/users',
                {
                    name:this.name,
                    mail:this.e_mail,
                    password:this.password
                }
                ) 
                if(result.status == 201){
                    localStorage.setItem("user-data",JSON.stringify(result.data))
                    this.$router.push({name:"Home"})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-data')
            if(user){
                this.$router.push({
                    name:'Home'
                })
            }
        }
    }
</script>


<style>
.register{
    justify-content: center;
    justify-items: center;
    align-items: center;
}
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
    margin-left: auto;
    margin-right: auto;
}   
</style>