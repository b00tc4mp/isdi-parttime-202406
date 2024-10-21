function at(index) {

    if (index == null) index = 0

    if (typeof index === 'boolean') index = Number(index)

    if (index < - this.length || index >= this.length) return undefined

    if (index < 0) index += this.length

    return this[index]
}

module.exports = at