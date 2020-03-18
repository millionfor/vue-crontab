import Vue from 'vue'
import App from './app.vue'
import AnsUI from 'ans-ui'
import 'ans-ui/lib/ans-ui.min.css'

Vue.use(AnsUI)

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    console.log('success')
  }
})
