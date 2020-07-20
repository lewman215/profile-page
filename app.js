console.log("here is some text!");

//let numberOne = 5 makes a "variable" called "number one" which holds the value "5"
let numberOne = 5;
let numberTwo = 3;
let numberThree = numberOne + numberTwo;
// "alert" makes a pop up on the web page.
alert(numberThree);

// element is being told to hold a reference to the element that has the id "myPara"
let element = document.getElementById('myPara');
let button = document.getElementById('colorButton');


//a function, that is run when "button" is clicked
button.onclick = function(){
    element.style.color = "green";
};

