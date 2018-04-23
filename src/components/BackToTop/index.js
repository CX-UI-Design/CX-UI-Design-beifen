/**
 * get node
 * @param node
 * @returns {*}
 */
export const getNode = (node) => {
  if (typeof node !== 'string' || !node) return window;
  if (node === 'body') {
    return document.body;
  }
  else if (node === 'window') {
    return window;
  }
  else {
    const nid = document.getElementById(node);//node by ID
    const nclass = document.getElementsByClassName(node)[0];//node by className
    return nid ? nid : nclass ? nclass : window;
  }
}
