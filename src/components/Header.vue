<template>
<div class="nav ">
<a href="#" style="padding-right:20px;padding-left: 20px;margin-right: 10px;" >Home</a>
<a href="#">Add Restaurant</a>
<a href="#">Update Restaurant</a>
<a @click="logout">Logout</a>
<div class="leftbar">
    <input type="">
</div>
</div>
</template>


<script>
export default {
    name: 'Header',
    methods : {
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}

</script>


<style>

.nav {
    background-color: chocolate;
    overflow: hidden;
}
.nav a {
    height: 25px;
    padding: 16px;
    text-decoration: none;
    text-align: center;
    color: #f1f1f1;
    float: left;
}
.nav a:hover{
        background: #ddd;
        color: #333;
}

.leftbar {
    float: right;
    align-items: center;
    padding: 14px;
    }
.leftbar input{
    border: 1px solid gold;
    width: 200px;
    border-radius: 4px;
    height: 25px;
    margin: 0;
} 
.leftbar i {
    position: absolute;
}
</style> 