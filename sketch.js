var marks=[30,35,45,50];
//         0   1  2  3
function setup() {
  createCanvas(400, 400);
   //console.log (marks[0]);
//calling function
average();

}

function draw() {
  background(220);
  
}
//creating function
//average= sum of all marks/no of marks
function average(){
  var sum= marks[0]+marks[1]+marks[2]+marks[3];
  var avg= sum/marks.length;
  console.log(avg);
}

