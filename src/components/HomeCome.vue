<template>
<Header />
    <h1>Hello {{name}}, Wlcome to Home page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td>
                <button><router-link :to="'/update/'+item.id">Update</router-link></button>
                <button class="deleteButton" v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';
import Header from "./Header.vue";
export default {

    name: 'HomeCome',
    components: {
        Header,
    },
    data(){
        return{
            name: '',
            restaurants: [],
        }
    },
    methods:{
        async deleteRestaurant(){
            let result = await axios.delete("http://localhost:3000/restaurant");
            if(result.status==200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
            this.name= JSON.parse(user).name;
            if(!user){
                this.$router.push({name: "SignUp"})
            }
            let result = await axios.get("http://localhost:3000/restaurant");
            console.log(result)
            this.restaurants= result.data
        },
    },
    mounted() {
        this.loadData()
    }

    
}
</script>

<style>
    table{
        margin-left: auto;
        margin-right: auto; 
    }
    td{
        width: 160px;
        height: 42px;
    }
    .deleteButton{
        margin-left: 8px;
    }
</style>