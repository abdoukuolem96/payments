<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'BillingCreate' }">Create a Billing</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  margin: 0;
  background: rgb(195, 192, 237);
  background: linear-gradient(
    180deg,
    rgba(195, 192, 237, 1) 0%,
    rgba(125, 200, 255, 1) 65%,
    rgba(0, 212, 255, 1) 100%
  );
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  background: rgba(21, 102, 231, 0.15);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(17.6px);
  border-radius: 10px;
  margin: 0;
  height: 100vh;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #176ceb;
}
</style>
