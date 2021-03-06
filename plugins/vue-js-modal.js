import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'

import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, {
  dynamicDefaults: {
    height: 'auto',
    width: '100%'
  },
})

export default ({a}, inject) => {
  inject('modal', VModal)
}