const images = ['/Users/jenanzakarneh/Desktop/2023 Intern Batch/myFirstTask/images/gallery/f1.png'
  , "/Users/jenanzakarneh/Desktop/2023 Intern Batch/myFirstTask/images/gallery/f2.png",
  "/Users/jenanzakarneh/Desktop/2023 Intern Batch/myFirstTask/images/gallery/f3.png",
  "/Users/jenanzakarneh/Desktop/2023 Intern Batch/myFirstTask/images/gallery/f4.png"
];
var current = 0;
var i=0;
function changeFullImage(smallImg) {
  current = smallImg.id;
  var fullImg = document.getElementById("fullImg");
  fullImg.src=smallImg.src;
  document.getElementById("currentPage").innerHTML = current+ " / " + 3;

}
function goToNext() {
  if (current > 2) {
    current = -1;

  }
  current = current + 1;
  var fullImg = document.getElementById("fullImg");
  fullImg.src = images[current];
  console.log("hello from next func ")
  console.log(" current from next func =" + current)
  document.getElementById("currentPage").innerHTML = current + " / " + 3;
}
function goToPrevious() {
  if (current < 1)
  current = 4;
  current = current - 1;
  var fullImg = document.getElementById("fullImg");
  fullImg.src = images[current];
  document.getElementById("currentPage").innerHTML = current + " / " + 3;
  console.log(current)
}
function showAllImgs() {
  document.getElementById("fullImg").src=images[i];
  document.getElementById("currentPage").innerHTML = i + " / " + 3;
  if(i<images.length-1){
    i++;
  }
  else{
    i=0;
  }
  setTimeout("showAllImgs()",1000);
}