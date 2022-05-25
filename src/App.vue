<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  padding: 0;
  margin: 0;
}


.logo{
    width: 100px;
}
.register input,.login input,.add input{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 20px;
    width: 300px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid skyblue;
}
.register button,.login button,.add button{
    height: 40px;
    /* width: 100px; */
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid skyblue;
    color: aliceblue;
    background: skyblue;
    cursor: pointer;
}
.register button:hover,.login button:hover,.add button:hover {
    border: 1px solid skyblue;
    color: skyblue;
    background: aliceblue;
}
</style>
