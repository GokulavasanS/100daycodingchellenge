 /* Write a JavaScript program to create a class called "Person" with properties for name, age and country. 
 Include a method to display the person's details.
  Create two instances of the 'Person' class and display their details. */

class Person{
    constructor (name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    display_details(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`country: ${this.country}`)
    }
}
let age = new Person("Goku",365,"Planet Earth")
age.display_details();
