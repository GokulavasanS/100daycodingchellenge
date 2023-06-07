 // Create an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 
 let list = [34,54,12,false,"",null,43];
 let falsey = list.filter(Boolean)
 console.log(falsey);

 /* Create a method in the Person class which returns how another person's age compares.
  Given the instances p1, p2 and p3,which will be initialised with the attributes name and age,
   return a sentence */

class Person{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
        comparesto(other){
            if(this.age > other.age){
                return `${other.name} is younger than me.`
            }if(this.age === other.age){
                return `${other.name} is same as mine...`
            }else{
                return `${other.name} is older than me...`
            }
        }
   
    }


let p1 = new Person("Harry",38)
let p2 = new Person("Spidy",24)
let p3 = new Person("Gwen", 24)
let p4 = new Person("Uncle Ben",70)

console.log(p2.comparesto(p4))
