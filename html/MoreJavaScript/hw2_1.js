/**
 * This file is the file foe moudule 2 build.
 *
 * @author Yingjie Shen
 */
function p1Button1() {
    //Print CSS of button 1 to console
    console.log("Button1 style: color: white; background-color: #FC0107; width: 80px; height: 40px;");
}

function p1Button2() {
    //Print CSS of button 2 to console
    console.log("Button2 style: color: white; background-color: #0F80FF; width: 80px; height: 40px;");
}

var count = 0; //Global counter for the click time
function p2() {
    //Make the Increment button add one to the count each time it is clicked.
    count++;
    $("p:eq(5)").text("" + count);

    //Get Increment button by jQuery and add CSS to it
    $("button[formaction = 'javascript:p2();']").addClass("Increment");

    //Change the size and color of the count field by giving it a class and specifying the class in the css file
    $("p:eq(5)").addClass("counter");
}

function p3() {
    if (document.getElementById("p3Paragraph").className == "p3Para1") {
        document.getElementById("p3Paragraph").className = "p3Para2";
        document.getElementById("p3Paragraph").innerText = "I am style of p3Para2";
    } else if (document.getElementById("p3Paragraph").className == "p3Para2") {
        document.getElementById("p3Paragraph").className = "p3Para1";
        document.getElementById("p3Paragraph").innerText = "I am style of p3Para1";
    }
}


const listContent = ["apple", "computer", "truck", "student", "table", "sky", "red", "word", "Internet", "eye", "pencil"];
var listCount = 0; //track the added li elemet

function p4NewAdd() {
    listCount++;
    //Get the list to add a new line
    let p4List = document.getElementById("p4List");
    //Create a new line
    let newLi = document.createElement("li");
    const newLiID = "nL" + listCount;
    newLi.setAttribute("id", "" + newLiID);
    newLi.innerText = listContent[Math.ceil(Math.random() * 10)];
    //Create a new remove button
    let newBtn = document.createElement("button");
    newBtn.innerText = "Remove";
    //Set button function
    newBtn.addEventListener("click", function() { p4Remove(newLiID) });
    newLi.appendChild(newBtn);
    //Add the new line to the line
    p4List.appendChild(newLi);
}

function p4Remove(elementId) {
    let p4List = document.getElementById("p4List");
    p4List.removeChild(document.getElementById(elementId));
}