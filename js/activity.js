// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//     if (strokes == 1) { 
//         return names[0];
//     } else if (strokes <= par -2) { 
//         return names[1];
//     } else if (strokes == par -1) { 
//         return names[2];
//     } else if (strokes == par) { 
//         return names[3];
//     } else if (strokes == par + 1) {
//         return names[4];
//     } else if (strokes == par + 2) { 
//         return names[5];
//     } else if (strokes >= par + 3) { 
//         return names[6];
//     }
 
//   return "Change Me";
//   // Only change code above this line
// }
// console.log(golfScore(5,2));
// // 1                  "Hole-in-one!"
// // <= par - 2         "Eagle"
// // par - 1            "Birdie"
// // par                "Par"
// // par + 1            "Bogey"
// // par + 2            "Double Bogey"
// // >= par + 3         "Go Home!"    
function golfScore(par, strokes) {
    var arr = ["Eagle", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey"];
  
    switch(true) {
      case (strokes == 1): return "Hole-in-one!";
      case (strokes - par > 2): return "Go Home!";
      default: return arr[arr.indexOf("Par") + (strokes - par)];
    }
  }
  
  // Change these values to test
 console.log(golfScore(4, 3));