<template>
<Header />
    <h1>Welcome, to Add Restaurant page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
        <input type="text" placeholder="Enter address" v-model="restaurant.address" name="address">
        <input type="text" placeholder="Enter contact" v-model="restaurant.contact" name="contact">
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import Header from "./Header.vue"
export default {

    name: 'AddResto',
    components: {
        Header,
    },
    data(){
        return{
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
        async addRestaurant(){
            console.log(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,

            });
            if (result.status==201) {
                this.$router.push({name: "Home"})
            }
            console.log(result,"addResto");
        },
    },

    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: "SignUp"})
        }
    }
}
</script>