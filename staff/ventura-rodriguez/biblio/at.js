function at(_index) {
  if (!(typeof _index === "number")) return this[0];
  if (this.length < Math.abs(_index)) return undefined;

  const index = _index >= 0 ? _index : this.length + _index;

  return this[index];
}

module.exports = at;
