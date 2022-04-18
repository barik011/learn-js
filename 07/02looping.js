var state = [
    "Bihar",
    "Jharkhand",
    "Up",
    1994,
    "Delhi",
    "West Bengal",
    "Rajisthan",
    "Utrakhand"
];

// for(var i=0; i < state.length;i++){
//     console.log(state[i]);
// }

// for(var i=0; i < state.length;i++){
//    if(typeof state[i]!=="string") break;
//     console.log(state[i]);
// }
for(var i=0; i < state.length;i++) {
    if(typeof state[i]!=="string") continue;
     console.log(state[i]);
}