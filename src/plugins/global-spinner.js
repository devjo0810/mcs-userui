import { APP } from '@/config'
import GlobalSpinner from '@/components/global/GlobalSpinner'

export default {
  install (Vue) {
    var SpinnerConstructor = Vue.extend(GlobalSpinner)
    var spinnerInstance = new SpinnerConstructor({
      el: document.createElement('div')
    })

    const spinner = {
      show () {
        document.getElementById(APP.documentId).appendChild(spinnerInstance.$el)
        spinnerInstance.isShow = true
      },
      hide () {
        spinnerInstance.isShow = false
      }
    }

    Vue.spinner = spinner
    Vue.prototype.$spinner = spinner
  }
}
