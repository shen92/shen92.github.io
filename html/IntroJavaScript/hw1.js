/**
 * This file is the file foe moudule 1 build.
 *
 * @author Yingjie Shen
 */

/**
 *	When the button Button 1 is pressed, have the words "Hello World!" print to the console.
 */
function p1() {
    console.log("Hello World!");
}

/**
 *	When the button Button 2 is pressed, read the text inside the hidden element with the id p2readme, 
 *  and print it to the console.
 */
function p2() {
    console.log(document.getElementById("p2readme").innerText);
}

/**
 * 	When the button Button 3 is pressed, you should find all elements with class name p3editme 
 *	and modify their text to "I was changed!"
 */
function p3() {
    //Get elements with the specific class name and store them to array
    let target = document.getElementsByClassName("p3editme");
    for (let i = 0; i < target.length; i++) {
        target[i].innerText = "I was changed!";
    }
}


/**
 * 	When the button Button 4 is pressed, you should modify each entry in the list 
 *	when such that the next letter in the alphabet replaces it.
 */
function p4() {
    //Get elements with the specific class name and store them to array
    let target = document.getElementsByClassName("p4editme");
    for (let i = 0; i < target.length; i++) {
        //Convert the original character to ascii code
        let curr_char_id = target[i].innerText.charCodeAt();
        let delta_ascii = curr_char_id - 65;
        let next_ascii_id = 65 + (delta_ascii + 1) % 26;
        //Convert the ascii code to character
        target[i].innerText = String.fromCharCode(next_ascii_id);
    }
}

/**
 *	When the button Button 5 is pressed, you should read the value of the input field, which has an id of p5input, 
 *  and modify the element with id p4editme to have the text you found.
 */
function p5() {
    let user_input = document.getElementById("p5input").value;
    document.getElementById("p5editme").innerText = user_input;
}

/**
 *	When the button Button 6 is pressed, you should swap the action paired with each button. 
 *	Each action brings up an alert, showing the action performed. 
 *	The buttons have ids p6btn1 and p6btn2. 
 *	In other words, after executing P6, button p6btn1 should have the action from p6btn2, 
 *	and vice versa. Executing P6 results in returning to the original configuration, and so on.
 */
function p6() {
    if (document.getElementById("p6btn1").formAction == "javascript:p6fn1();") {
        document.getElementById("p6btn1").formAction = "javascript:p6fn2();";
        document.getElementById("p6btn2").formAction = "javascript:p6fn1();";
    } else if (document.getElementById("p6btn1").formAction == "javascript:p6fn2();") {
        document.getElementById("p6btn1").formAction = "javascript:p6fn1();";
        document.getElementById("p6btn2").formAction = "javascript:p6fn2();";
    }
}

/**
 *	When the button Button 7 is pressed, you should apply the styles contained in the table to the elements in the page.
 */
function p7() {
    //Change "id = p7table"
    document.getElementById("p7table").style.background = "#f7f7f7";
    document.getElementById("p7table").style.textAlign = "center";
    document.getElementById("p7table").style.width = "100%";
    document.getElementById("p7table").style.boxShadow = "0 4px 8px 0 #d7dbde";
    document.getElementById("p7table").style.borderCollapse = "collapse";

    //Change "class = header"
    let header_target = document.getElementsByClassName("header");
    for (let i = 0; i < header_target.length; i++) {
        header_target[i].style.background = "#d0d5d9";
    }

    //Change "tag = tr"
    let tr_target = document.getElementsByTagName("tr");
    for (let i = 0; i < tr_target.length; i++) {
        tr_target[i].style.color = "##3f4245";
    }

    //Change "tag = td"
    let td_target = document.getElementsByTagName("td");
    for (let i = 0; i < td_target.length; i++) {
        td_target[i].style.borderBottom = "1px solid #ddd";
        td_target[i].style.padding = "15px";
    }

    //Change "tag = th"
    let th_target = document.getElementsByTagName("th");
    for (let i = 0; i < th_target.length; i++) {
        th_target[i].style.borderBottom = "1px solid #ddd";
        th_target[i].style.padding = "15px";
    }
}