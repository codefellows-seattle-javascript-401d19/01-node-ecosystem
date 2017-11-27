'use strict'

module.exports = function(name){
  if(typeof name === 'string'){
    return `hello ${name}`
  } else {
    return null
  }
}
