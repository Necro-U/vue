<template>
<div class="login">
<input type="email" placeholder="Enter your email">
<input type="password" placeholder="Enter your password">
<button>Login</button>
</div>
</template>


<script>
export default {
    name: 'Login',
    data(){
        return {
            mail:'',
            password:'',
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