// superAdmin
// admin
// subAdmin

var user="trail"

switch (user) {
    case "superAdmin":
        console.log("Access all thing"); 
        break;

    case "admin":
        console.log("Access all thing except create user");
        break;
    case "subAdmin":
        console.log("Access view,update user");
        break;

    default:console.log("View for trial user");
        break;
}

