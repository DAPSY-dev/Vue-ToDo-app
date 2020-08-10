<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <header>
      <h1>Todos Vue app</h1>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@charset "UTF-8";
:root { font-size: 16px; }
html { box-sizing: border-box; }
*, ::before, ::after { box-sizing: inherit; }
html, body { margin: 0; padding: 0; }
body { font-family: sans-serif; }
header, nav, main, section, article, aside, time, footer { display: block; }
h1, h2, h3, h4, h5, h6, p {
    margin:  0 0 15px;
    padding: 0;
}
h1 { font-size: 2rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1rem; }
h6 { font-size: 0.75rem; }
img { max-width: 100%; }
form {
    margin-bottom: 15px;
}
form fieldset {
    margin:  0;
    padding: 0;
    min-width: auto;
    border: none;
    min-inline-size: 100%;
}
form fieldset legend {
    margin:  0;
    padding: 0;
    font-size: 0;
    border: none;
    visibility: hidden;
}
label {
    display: inline-block;
    margin-bottom: 5px;
}
input,
textarea,
select,
button {
    display: block;
    margin-bottom: 15px;
    padding: 5px 10px;
    width: 100%;
    font: inherit;
}
input[type="submit"],
input[type="button"],
input[type="reset"],
input[type="checkbox"],
input[type="radio"],
button {
    display: inline-block;
    width: auto;
}
ul, ol {
    margin:  0 0 15px 25px;
    padding: 0;
}
ul li, ol li { margin: 0; padding: 0; }

#app {
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
