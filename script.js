function showPage(page){

let pages =
document.querySelectorAll(".page");

pages.forEach(function(p){

p.classList.remove("active");

});

document
.getElementById(page)
.classList.add("active");

}


function book(){

alert(
"🎉 Table Booking Successful"
);

}