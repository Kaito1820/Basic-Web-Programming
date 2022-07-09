//The document object represents your web page.

/*If you want to access any element in an HTML page,
you always start with accessing the document object.*/

//document.getElementById(id) -> Find an element by element id
//button has a properties: onclick

//-------------------------------------------------------------------//


/*var myName = window.prompt("What's your name?");

console.log("Hello", myName);*/

document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello", myName);

} 

 
