function Shape() {
  this.prototype._name = "Shape";
  this._color = "";
  this._area = 0;
  this._sidesCount = 0;
  this._perimeter = 0;
}

Shape.prototype.setName = function (name) {
  this._name = name;
};

Shape.prototype.getName = function () {
  return this._name;
};

const shape1 = new Shape();
