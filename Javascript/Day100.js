/*  Shape Hierarchy

Create a hierarchy of shapes using object-oriented programming principles.
 Design a base class called Shape with properties type and methods getInfo to display the type of shape.
  Then, create subclasses for specific shapes like Circle, Rectangle, and Triangle. Each subclass
 should have its own properties (e.g., radius, width, height) and methods to calculate area and perimeter.*/

class Shape {
  constructor(type) {
    this.type = type;
  }

  getInfo() {
    return `Type:${this.type}`;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super("Circle")
    this.radius = radius;
  }
  area() {
    let area = Math.PI * this.radius ** 2;
    return area;
  }
  perimeter() {
    let perimeter = 2 * Math.PI * this.radius;
    return perimeter;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super("Rectangle")
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2*(this.length + this.width);
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle")
    this.base = base;
    this.height = height;
  }

  area() {
    return (1 / 2) * this.base * this.height;
  }
  perimeter() {
    return this.base+this.height +Math.sqrt(this.base**2 + this.height**2)
  }
}

const circle = new Circle(6)
const rectangle = new Rectangle(2,3)
const triangle = new Triangle(4,7)

console.log(circle.getInfo());
console.log("Area:",circle.area());
console.log("Perimeter:",circle.perimeter());
console.log();

console.log(rectangle.getInfo());
console.log("Area:",rectangle.area());
console.log("Perimeter:",rectangle.perimeter());
console.log();

console.log(triangle.getInfo());
console.log("Area:",triangle.area());
console.log("Perimeter:",triangle.perimeter());
