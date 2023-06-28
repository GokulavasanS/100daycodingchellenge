 // Create objects in different ways

 // Using object Literal
 let obj = { a:3 , b:5 }
 console.log(obj.a,obj.b);

 // using obj constructor
 let obj1 = new Object;
 obj1.a = 5;
 obj1.b = 8;
 console.log(obj1);

 // using myobject constructor function
 function MyObject(a,b) {
    this.a = a;
    this.b = b;
 }
 let myobj = new MyObject(24,36)
 console.log(myobj);

 

