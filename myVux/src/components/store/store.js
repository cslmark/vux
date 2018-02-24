/**
 * Created by chenshuanglin on 2017/12/23.
 */
const STORAGE_KEY = 'contactList'
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
