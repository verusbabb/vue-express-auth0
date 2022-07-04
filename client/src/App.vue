<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Calendar of Events</router-link> |
      <router-link to="/register">Event Registration</router-link> |
      <router-link to="/leadership">Leadership</router-link> |
      <router-link to="/members">Members Only</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

  html,
  body {
    font-family: "Roboto", sans-serif;
  }

  #app {
    font-family: "Roboto", sans-serif;
  }
  #app {
    font-family: "Roboto" sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #0000ff;
  }
</style>
