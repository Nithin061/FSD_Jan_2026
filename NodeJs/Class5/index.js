class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi my name is ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, age, marks)
    {
        super(name, age);

        this.marks = marks;
    }

    greet(){
        console.log("hello");
    }
};

let s1 = new Student("Kiran", 20, 90);
let p1 = new Person("nithin", 30);
console.log(s1);

