import * as React from "react";

interface Shape {
  draw(): string;
}

interface Color {
  fill(): string;
}

abstract class ColoredShape implements Shape {
  color: Color;

  constructor(color:Color) {
    this.color = color;
  }

  abstract draw(): string;
}

class RedColor implements Color {
  fill(): string {
    return "is filled with RED color";
  }
}

class BlueColor implements Color {
  fill(): string {
    return "is filled with BLUE color";
  }
}

class Triangle extends ColoredShape {
  constructor(color:Color) {
    super(color);
  }

  draw(): string {
    return "triangle " + this.color.fill();
  }
}

class Rectangle extends ColoredShape {
  constructor(color:Color) {
    super(color);
  }

  draw(): string {
    return "rectangle " + this.color.fill();
  }
}

function Demo() {
  let shapes: Array<ColoredShape> = [
    new Triangle(new RedColor()),
    new Rectangle(new RedColor()),
    new Rectangle(new BlueColor())
  ]

  return (
    <div>
      <h1>Structural</h1>
      <h2>Bridge Demo</h2>
      <div>
        <div>{
          shapes.map((shape:ColoredShape) => {
            return (<div>
              {shape.draw()}
            </div>);
          })
        }</div>
      </div>
    </div>
  )
}

export default Demo;