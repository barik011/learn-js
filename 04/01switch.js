// superAdmin
// admin
// subAdmin

var user="trail"

switch (user) {
    case "superAdmin":
        console.log("Access all thing"); 
    

    case "admin":
        console.log("Access all thing except create user");

    case "subAdmin":
        console.log("Access view,update user");
  

    default:console.log("View for trial user");

}

