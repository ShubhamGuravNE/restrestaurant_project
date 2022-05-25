<template>
<img src="../assets/logo.png">
    <h3>Sign up</h3>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>

        <p>
            <router-link to="/login">LogIn</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'SignUp',
    date()
    {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp() {
            let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password

            });

            if (result.status==201) {
                alert("Sign up Done");
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({
                    name: "Home"
                })
            }

            // localStorage.setItem(this.name, this.email, this.password);
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: "Home"})
        }
    }
    
}
</script>