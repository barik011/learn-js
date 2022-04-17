 var users = {
     id:01,
     name:"Barique",
     designation:"Frontend Developer",
     age:35,
     address:"Line Bazar",
     pin:854301
 }

//  console.log(users.designation);

//  console.table(users);

//  users.age=37;

//  console.table(users);

var users = {
    id:01,
    name:"Barique",
    role:"Admin",
    loginCount:11,
    courseList:[],
    buyCourse:function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.name} is enrolled and total number of courses is: ${this.courseList.length}`
    }
}

users.buyCourse("React JS");
users.buyCourse("Material UI");

console.log(users.getCourseCount());

 