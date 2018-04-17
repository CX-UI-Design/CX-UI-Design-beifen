// highlight.js
import Hljs from 'highlight.js'
let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      Hljs.highlightBlock(block);
    })
  })
}
export default Highlight
