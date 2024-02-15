// base class "shape" that will be extended by other classes
class Shape {
  // constructor to initialize fill and stroke properties
  constructor() {
    this.fill = "";
    this.stroke = "";
  }

  // method to set fill color properties
  setFill(fill) {
    this.fill = fill;
  }

  // method to set stroke color properties
  setStroke(stroke) {
    this.stroke = stroke;
  }

  // method to render the shape
  render() {
    throw new Error("Render method must be implemented by subclasses");
  }
}

// subclass "triangle" that extends base class "shape"
class Triangle extends Shape {
  // render method to generate triangle shape
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.stroke}" fill="${this.fill}" />`;
  }
}

// subclass "circle" that extends base class "shape"
class Circle extends Shape {
  // render method to generate circle shape
  render() {
    return `<circle cx="7.5" cy="7.5" r="7" stroke="${this.stroke}" fill="${this.fill}" />`;
  }
}

// subclass "square" that extends base class "shape"
class Square extends Shape {
  // render method to generate square shape
  render() {
    return `<rect x="5" y="5" width="10" height="10" stroke="${this.stroke}" fill="${this.fill}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
