<template>
    <img src="../assets/blogger.jpg">
    <h1>LogIn Page</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login">LogIn</button>

        <p>
            <router-link to="/SignUp">Sign Up</router-link>
        </p>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'LogIn',

    date()
    {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);

            if( (result.status=200) && (result.data.length>0) ) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({name: "Home"});
            }
            alert("LogIn Successful");
        },
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: "Home"})
        }
    },
};
</script>