import * as React from "react";

class Person {
  name: string = "noname";
  age: number = 0;
}

class PersonBuilder {
  private person:Person = new Person();

  setName(value: string): PersonBuilder {
    this.person.name = value;
    return this;
  }

  setAge(value: number): PersonBuilder {
    this.person.age = value;
    return this;
  }

  build(): Person {
    return this.person;
  }
}
function Demo() {
  let person:Person = new PersonBuilder()
    .setName("Some Name")
    .setAge(20)
    .build();
  return (
    <div>
      <h1>Structural</h1>
      <h2>Builder Demo</h2>
      <div>
        <div>Person Name: {person.name}</div>
        <div>Person Age: {person.age}</div>
      </div>
    </div>
  );
}

export default Demo;
