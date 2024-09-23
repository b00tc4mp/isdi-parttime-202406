function fill(value, start = 0, end = this.length) {
  start = start < 0 ? this.length + start : start;
  end = end < 0 ? this.length + end : end;

  for (let i = start; i < end; i++) this[i] = value;

  return this;
}
