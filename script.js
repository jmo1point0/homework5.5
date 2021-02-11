

var now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);

// Grab the reference HTML ELEMENT and update the Value on the DOM
var currentDate = document.querySelector('#currentDay');
currentDate.innerHTML = now;

var currentHr = moment().format('HH');
console.log(currentHr);

//create an array with all the hrs in it
var blockHr = document.querySelectorAll(".time-block")

//run a for loop to compare the current hr to the listed hr
for( i=0; i < blockHr.length; i++ ){
blockHr.textContent = i
console.log(blockHr.textContent)

//if the current hr is less than the listed hr use css styling for past

if ( (8 + (i)) < currentHr ){
    blockHr[i].classList.add("past")
    console.log('past')
    }

    //if the current hr == the listed hr use css styling for current

    else if (( 8 + (i)) == currentHr ) {
    blockHr[i].classList.remove("past");
    blockHr[i].classList.add("present");
    console.log("present");
    }
    else {

    //and if the current hr is greater than the listed hr use css styling for future    
    blockHr[i].classList.remove("past");
    blockHr[i].classList.remove("present")
    blockHr[i].classList.add("future")
    console.log("future");
    }
}
//saving input events in local storage

//make an array of the buttons by gathering all

var buttons = document.querySelectorAll(".saveBtn")



//create an array of items combining the hr with the text entered at that time
buttons.forEach((el)=>
    el.addEventListener("click", function(){        
        var text = el.previousElementSibling.value;
        var time = el.parentElement.getAttribute("id")
       
        console.log(text);
        console.log(time);

        //store the items in local storage
        localStorage.setItem(time,text);
    })
    );


//retrieve the items from local storage and place in daytimer
document.querySelector("#hr-8").innerHTML = localStorage.getItem(8,)
document.querySelector("#hr-9").innerHTML = localStorage.getItem(9,)
document.querySelector("#hr-10").innerHTML = localStorage.getItem(10,)
document.querySelector("#hr-11").innerHTML = localStorage.getItem(11,)
document.querySelector("#hr-12").innerHTML = localStorage.getItem(12,)
document.querySelector("#hr-1").innerHTML = localStorage.getItem(1,)
document.querySelector("#hr-2").innerHTML = localStorage.getItem(2,)
document.querySelector("#hr-3").innerHTML = localStorage.getItem(3,)
document.querySelector("#hr-4").innerHTML = localStorage.getItem(4,)