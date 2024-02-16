// shapes.js

class Shape {
  constructor(vertices, radius, color) {
    this.vertices = parseInt(vertices);
    this.radius = parseFloat(radius);
    this.color = color;
    this.stroke = color;
    this.fill = color;
  }

  render() {
    const points = this.calculatePoints();
    return `<polygon points="${points}" fill="${this.fill}" stroke="${this.stroke}" />`;
  }

  calculatePoints() {
    const [x, y] = [150, 150];
    return Array.from({ length: this.vertices })
      .map((_, index) => {
        const angle = (360 / this.vertices) * index;
        const xCoord = x + this.radius * Math.cos(angle * (Math.PI / 180));
        const yCoord = y + this.radius * Math.sin(angle * (Math.PI / 180));
        return `${xCoord},${yCoord}`;
      })
      .join(" ");
  }
}

// Circle class
class Circle extends Shape {
  constructor(radius, fill, stroke) {
    super();
    this.radius = radius;
    this.stroke = stroke;
    this.fill = fill;
  }

  render() {
    console.log(this.stroke);
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="2" />`;
  }
}

// Triangle class
class Triangle extends Shape {
  constructor(sideLength, fill, stroke) {
    super(3, sideLength / (2 * Math.sin(Math.PI / 3)), fill);
    this.sideLength = sideLength;
    this.stroke = stroke;
    this.fill = fill;
  }

  render() {
    const height = (Math.sqrt(3) / 2) * this.sideLength;
    return `<polygon points="0,${height} ${this.sideLength},${height} ${
      this.sideLength / 2
    },0" fill="${this.fill}" stroke="${this.stroke}" stroke-width="2" />`;
  }
}

// Square class
class Square extends Shape {
  constructor(sideLength, fill, stroke) {
    super(4, sideLength / Math.sqrt(2), fill);
    this.sideLength = sideLength;
    this.stroke = stroke;
    this.fill = fill;
  }

  render() {
    return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="2" />`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
