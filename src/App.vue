<templte>
  <div id="app">
      <cn-header></cn-header>
      <sidebar></sidebar>
      <router-view></router-view>
      <tip></tip>
      <loading></loading>
  </div>
</template>

<script>
import Hello from './components/Hello'
import store from './vuex/store'
export default {
  components: {
    Hello
  },
  vuex:{
    actions:{
      setDetail,
      getStore
    }
  }
}


</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
