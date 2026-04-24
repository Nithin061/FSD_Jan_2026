// function Student(name, age, id)
// {
//     let student = {
//         name: name,
//         age: age,
//         id: id,
//         getdetails: ()=>{
//             console.log(name, age, id)
//         }
//     }

//     return student;
// }

// let s1 = Student("Nithin", 30, 12)
// let s2 = Student("karthik", 19, 123)
// s1.getdetails()
// s2.getdetails()


function Student_2(name, age, id)
{
    this.name = name;
    this.age = age;
    this.id = id;
}

Student_2.prototype.getdetails = function (){
    console.log(this.name, this.age, this.id)
}


let obj1 = new Student_2("Nithin", 30, 12);

console.log(obj1)