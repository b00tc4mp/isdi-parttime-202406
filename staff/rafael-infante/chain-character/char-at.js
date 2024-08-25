function charAt(index) {
 if (typeof index !== 'number') {
  return this.value[0]
  }
 if (index >= this.length) {
  return ''
 }
  return this.value[index]
}


module.exports = charAt;