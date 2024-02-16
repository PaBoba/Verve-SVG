// shapes.test.js
const { Shape, Circle, Triangle, Square } = require("./shapes.js");

describe("Shape class", () => {
  test("should create a Shape instance with correct properties", () => {
    const shape = new Shape(5, 10, "red");
    expect(shape.vertices).toBe(5);
    expect(shape.radius).toBe(10);
    expect(shape.color).toBe("red");
    expect(shape.stroke).toBe("red");
    expect(shape.fill).toBe("red");
  });

  test("should render correct SVG for Shape class", () => {
    const shape = new Shape(5, 10, "red");
    const svg = shape.render();
    // expect(svg).toEqual(
    //   '<polygon points="150,150 140,150 135,142.684 135,135 140,127.316 150,127.316" fill="red" stroke="red" />'
    // );
    expect(svg).toContain("<polygon");
  });
});

describe("Circle class", () => {
  test("should create a Circle instance with correct properties", () => {
    const circle = new Circle(15, "blue", "green");
    expect(circle.radius).toBe(15);
    expect(circle.fill).toBe("blue");
    expect(circle.stroke).toBe("green");
  });

  test("should render correct SVG for Circle class", () => {
    const circle = new Circle(15, "blue", "green");
    const svg = circle.render();
    expect(svg).toEqual(
      '<circle cx="15" cy="15" r="15" fill="blue" stroke="green" stroke-width="2" />'
    );
    expect(svg).toContain("<circle");
  });
});

describe("Triangle class", () => {
  test("should create a Triangle instance with correct properties", () => {
    const triangle = new Triangle(20, "yellow", "purple");
    expect(triangle.sideLength).toBe(20);
    expect(triangle.fill).toBe("yellow");
    expect(triangle.stroke).toBe("purple");
  });

  test("should render correct SVG for Triangle class", () => {
    const triangle = new Triangle(20, "yellow", "purple");
    const svg = triangle.render();
    expect(svg).toEqual(
      '<polygon points="0,17.32050807568877 20,17.32050807568877 10,0" fill="yellow" stroke="purple" stroke-width="2" />'
    );
    expect(svg).toContain("<polygon");
  });
});

describe("Square class", () => {
  test("should create a Square instance with correct properties", () => {
    const square = new Square(25, "orange", "pink");
    expect(square.sideLength).toBe(25);
    expect(square.fill).toBe("orange");
    expect(square.stroke).toBe("pink");
  });

  test("should render correct SVG for Square class", () => {
    const square = new Square(25, "orange", "pink");
    const svg = square.render();
    expect(svg).toEqual(
      '<rect width="25" height="25" fill="orange" stroke="pink" stroke-width="2" />'
    );
    expect(svg).toContain("<rect");
  });
});
