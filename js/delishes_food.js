/* global window*/


// =============================================================
// part 2 abput icon in nave bar 
var clickeddd = window.document.querySelector(".clicked"),
    overnavebare = window.document.querySelector(".overnavebare");
clickeddd.onclick = function() {
    "use strict";
    if(clickeddd.style.color == "white") {
        overnavebare.style.display = "block";
        clickeddd.style.color = "#ffb03d";
    } else {
        overnavebare.style.display = "none";
        clickeddd.style.color = "white";
    }
}
// =============================================================
// about the list in small navebar
var hovered = document.querySelector(".hovered"),
    smallmino = document.querySelector(".smallmino");
hovered.onmouseover = function() {
    "use strict";
    smallmino.style.display = "block";
}
hovered.onmouseout = function() {
    "use strict";
    smallmino.style.display = "none";
}
// =============================================================
// about the curosal

var main_slider = document.querySelectorAll(".main-slider .main"),
    controls = document.querySelectorAll(".controls li"),
    righter = document.querySelector(".right"),
    lefter = document.querySelector(".left"),
    curant = 0;
righter.onclick = function() {
    "use strict";
    if(curant == 2) {
        curant = 0
    } else {
        curant = curant + 1
    }
    curosaler();
}
lefter.onclick = function() {
    "use strict";
    if(curant == 0) {
        curant = 2
    } else {
        curant--
    }
    curosaler();
}
for(var i = 0; i < controls.length; i++) {
    controls[i].onclick = function() {
        "use strict";
        curant = parseInt(this.getAttribute("data-target"));
        curosaler();
    }
}


 function curosaler() {
     "use strict";
     for(var i = 0; i < main_slider.length; i++) {
         main_slider[i].classList.remove("active");
         controls[i].classList.remove("active");
     }
     main_slider[curant].classList.add("active");
     controls[curant].classList.add("active");
 }
var spedddd = setInterval(function() {
    "use stict";
    if(curant == 2) {
        curant = 0
    } else{
     curant++;
    }
    curosaler();

},4000)
// =============================================================
// about the curosal
var array1 = [
    "afamous restorant in egypet",
    "greter place which you love",
    "best place to eat food"
]
var array2 = [
    "freash rise and fish",
    "chicken and meat",
    "botatos and vegetabels"
]
var firest_tiped = document.querySelector(".firest-tiped");
var sacand_tiped = document.querySelector(".sacand-tiped");
var arrayindex = 0;
var textindex = 0;
function tiped(arrays,delay,element) {
    "use strict";
    var timering = setInterval(function() {
        "use strict";
        if(textindex < arrays[arrayindex].length) {
            element.innerHTML = element.innerHTML + arrays[arrayindex].charAt(textindex);
            textindex++;
        } else {
            clearInterval(timering);
            setTimeout(function() {
                delets();
            },2000);
        }
    },delay);
function delets() {
    "use strict";
        textindex--
    var delation = setInterval(function() {
        "use strict";
        if(textindex < 0) {
            clearInterval(delation);
            if(arrayindex == 2) {
                arrayindex = 0
            } else {
                arrayindex++
            }
            tiped(array1,80,firest_tiped);
        } else{
            element.innerHTML = arrays[arrayindex].slice(0,textindex);
            textindex--;
        }
    },delay)
}
    
}
var arrayindex1 = 0;
var textindex1 = 0;
function tipeds(arrayr,delays,elements) {
    "use strict";

    var timering = setInterval(function() {
        "use strict";
        if(textindex1 < arrayr[arrayindex1].length) {
            elements.innerHTML = elements.innerHTML + arrayr[arrayindex1].charAt(textindex1);
            textindex1++;
        } else {
            clearInterval(timering);
            setTimeout(function() {
                delets();
            },2000);
        }
    },delays);
function delets() {
    "use strict";
        textindex1--
    var delation = setInterval(function() {
        "use strict";
        if(textindex1 < 0) {
            clearInterval(delation);
            if(arrayindex1 == 2) {
                arrayindex1 = 0
            } else {
                arrayindex1++
            }
            tipeds(array2,100,sacand_tiped);
        } else{
            elements.innerHTML = arrayr[arrayindex1].slice(0,textindex1);
            textindex1--
        }
    },delays)
}
}


tiped(array1,100,firest_tiped);
tipeds(array2,100,sacand_tiped);
// end typed 


// start notifack
var notifaksss = document.querySelectorAll(".notifak");
for(var n = 0; n < notifaksss.length ; n++) {
    notifaksss[n].onmouseover = function() {
    "use strict";
        var newspan = document.createElement("span");
        var newspantext = document.createTextNode(this.getAttribute("title"));
        newspan.className = "notification";
        newspan.appendChild(newspantext);
        document.body.insertBefore(newspan,document.body.firstElementChild);
        this.removeAttribute("title");
        var leftrings = this.offsetLeft;
        var toppers = this.offsetTop + 20;
        newspan.style.top = toppers  + "px";
        newspan.style.left = leftrings + "px";
        newspan.style.visibility = "visible";
        newspan.style.opacity = "1";
        newspan.style.transform = "scale(1)";

}
}

for(var x = 0; x < notifaksss.length ; x++) {
  notifaksss[x].onmouseout = function() {
    "use strict";
    this.title = this.textContent;
    var creater = document.querySelector(".notification");
      creater.remove()
  }
}
// end notifack 


// start shafel part
var shafel = document.querySelectorAll(".filter");

    for(var b = 0; b < shafel.length; b++) {
      shafel[b].onclick = function() {
        for(var z = 0;z < shafel.length ;z++) {
        shafel[z].style.color = "#333";
        shafel[z].style.background = "transparent";
        }
        this.style.color = "#fff";
        this.style.background = "#ffb03d";
      }
    }

// end shafel part

// start Check part
var ancored = document.querySelectorAll(".ancored li"),
    counting = document.querySelectorAll(".counting");
(function chicking() {
    "use strict";

            var i = 0;
    for(i; i < ancored.length; i++) {
        ancored[i].onclick = function () {
                if(window.innerWidth <= 960) {
            for(var x = 0; x < ancored.length; x++) {
                ancored[x].classList.remove("active", "active1");
                counting[x].classList.remove("active");
            }
            this.classList.add("active1");
            counting[this.getAttribute("data-target")].classList.add("active");
        } else {

            for(var x = 0; x < ancored.length; x++) {
                ancored[x].classList.remove("active","active1");
                counting[x].classList.remove("active");
            }
            this.classList.add("active");
            counting[this.getAttribute("data-target")].classList.add("active");
        }
      }
      }
    }());

// end shafel part

// start main-colapsed part

var collapsed_head = document.querySelectorAll(".main-colapsed .collapsed-head"),
    collapsed_ansower = document.querySelectorAll(".main-colapsed .collapsed-ansower");

var i = 0;
for(i; i < collapsed_head.length; i++) {
    collapsed_head[i].onclick = function() {
        "use strict";
        if(this.nextElementSibling.offsetHeight == "0") {
            closed();
            if (window.innerWidth <= 990) {
                this.nextElementSibling.style.height = "340px";
            } else {
                this.nextElementSibling.style.height = "300px";
            }
                if(window.innerWidth <= 720) {
                this.nextElementSibling.style.height = "380px";
            }
             this.nextElementSibling.style.padding = "15px 15px";
             this.firstElementChild.classList.add("adition");
              this.firstElementChild.style.color = "#ffb03d";
        } else {
             this.nextElementSibling.style.height = "0";
             this.nextElementSibling.style.padding = "0px 15px";
             this.firstElementChild.classList.remove("adition");
             this.firstElementChild.style.color = "#6b6767";
        }
    }
}
function closed() {
    for(var e = 0; e < collapsed_ansower.length; e++) {
        collapsed_ansower[e].style.height = "0px";
        collapsed_ansower[e].style.padding = "0px 15px";
        collapsed_head[e].firstElementChild.style.color = "#6b6767";
        collapsed_head[e].firstElementChild.classList.remove("adition");
    }
}
// end shafel part
// start box model part
var imagemodel = document.querySelectorAll(".box-model .pairant img"),
    over_boxmodel = document.querySelector(".over-boxmodel"),
    controler = document.querySelectorAll(".over-boxmodel span");
var adding = 0;


for(var h = 0; h < imagemodel.length; h++) {
    imagemodel[h].setAttribute("data-numper",h);
}

 for(var l = 0; l < imagemodel.length; l++) {
     imagemodel[l].onclick = function() {
         adding = parseInt(this.getAttribute("data-numper"));
         showMe();
     }
 }
         
controler[0].onclick = function() {
    "use strict";
    if(adding == 7) {
        adding = 0;
    } else {
        adding++
    }
    over_boxmodel.firstElementChild.children[0].style.transform = "translatex(-150px)";
    showMe();
}     
controler[1].onclick = function() {
    "use strict";
    if(adding == 0) {
        adding = 7;
    } else {
       adding--;
    }
    over_boxmodel.firstElementChild.children[0].style.transform = "translatex(150px)";
    showMe();
}
function showMe() {
    "use strict";
    if(over_boxmodel.firstElementChild.children.length == 0) {
        
    } else {
        over_boxmodel.firstElementChild.children[0].style.opacity = "0";
        setTimeout(function() {
        over_boxmodel.firstElementChild.children[0].remove();
        },500);
    }
    over_boxmodel.style.visibility = "visible";
    over_boxmodel.style.opacity = "1";
    var mycopyed = imagemodel[adding].cloneNode(true);
    over_boxmodel.firstElementChild.appendChild(mycopyed);
}
controler[2].onclick = function() {
    "use strict";
    over_boxmodel.style.visibility = "hidden";
    over_boxmodel.style.opacity = "0";
}
document.addEventListener("click",function(e){
    "use strict";
    if(e.target.classList.contains("over-boxmodel")) {
    over_boxmodel.style.visibility = "hidden";
    over_boxmodel.style.opacity = "0";
    }
});
// end box model part
// start tasks part
var pairantss = document.querySelector(".tasks .pairant"),
    inputing = document.querySelector(".tasks .inputing"),
    child2 = document.querySelector(".tasks .child2"),
    writingtask = document.querySelector(".tasks .writingtask"),
    child3 = document.querySelector(".tasks .child3");
   
inputing.lastElementChild.onclick = function() {
    "use strict";
    agintext();
    if(inputing.firstElementChild.value == "") {
        var naewspanes = document.createElement("span");
        var naewspanetext = document.createTextNode("please enter eny tasks");
        var icotask = document.createElement("i");
        icotask.className = "fa fa-info";
        naewspanes.classList = "tasksnotch";
        naewspanes.appendChild(naewspanetext);
        naewspanes.appendChild(icotask);
        window.document.body.insertBefore(naewspanes,document.body.firstElementChild);
        var taskTop = child2.offsetTop - 0;
        var taskleft = child2.offsetLeft - 0;
        naewspanes.style.top = taskTop + "px";
        naewspanes.style.left = taskleft + "px";
        setInterval(function() {
            naewspanes.remove();
        },2000)
    } else {
        var tasksdiv = document.createElement("div");
        tasksdiv.className = "writingtask";
        var taskspan = document.createElement("span");
        var taskicon = document.createElement("i");
        taskicon.className = "fa fa-trash-o";
        taskicon.classList.add("deletico");
        var taskdiv2 = document.createElement("div");
        var taskdiv2text = document.createTextNode(inputing.firstElementChild.value);
        taskdiv2.appendChild(taskdiv2text);
        taskdiv2.classList = "tasktext";
        taskspan.appendChild(taskicon);
        tasksdiv.appendChild(taskspan);
        tasksdiv.appendChild(taskdiv2);
        child2.appendChild(tasksdiv);
        if(child2.firstElementChild.classList.contains("notasks")) {
            child2.firstElementChild.remove();
        }
        inputing.firstElementChild.value = "";
        inputing.firstElementChild.focus();
        colection();
    }
}

function agintext() {
var ourtasks = document.querySelectorAll(".tasktext");
    "use strict";
    for(var j = 0; j < ourtasks.length; j++) {
        if(ourtasks[j].textContent == inputing.firstElementChild.value) {
        var naewspanes = document.createElement("span");
        var naewspanetext = document.createTextNode("your task wich you enter is her");
        var icotask = document.createElement("i");
        icotask.className = "fa fa-info";
        naewspanes.classList = "tasksnotch";
        naewspanes.appendChild(naewspanetext);
        naewspanes.appendChild(icotask);
        window.document.body.insertBefore(naewspanes,document.body.firstElementChild);
        var taskTop = child2.offsetTop - 0;
        var taskleft = child2.offsetLeft - 0;
        naewspanes.style.top = taskTop + "px";
        naewspanes.style.left = taskleft + "px";
        setInterval(function() {
            naewspanes.remove();
        },2000);
            ourtasks[j].parentElement.remove();
        }
    } 
}


document.body.addEventListener("click",function(e) {
    if(e.target.classList.contains("deletico")) {
        e.target.parentElement.parentElement.remove();
        inputing.firstElementChild.focus();
    } 
    if(child2.children.length == 0) {
        var tasksnewdiv = document.createElement("div");
        tasksnewdiv.className = "notasks";
        var texttasksnewdiv = document.createTextNode("No Tasks To Show");
        tasksnewdiv.appendChild(texttasksnewdiv);
        child2.appendChild(tasksnewdiv);
    }
    if(e.target.classList.contains("tasktext")) {
        e.target.classList.toggle("active");
    }
    colection();
})

function colection() {
    "use strict";
    var classactive = document.querySelectorAll(".tasks .child2 .active");
    var numpering = document.querySelectorAll(".tasks .child2 .writingtask");
    child3.children[0].firstElementChild.innerHTML = classactive.length;
    child3.children[2].firstElementChild.innerHTML = numpering.length;
}

child3.children[1].onclick = function() {
    "use strict";
    var collo = document.querySelectorAll(".writingtask");
    for(var p = 0; p < collo.length; p++) {
        collo[p].remove();
    }
}
// end tasks part
// start contact-us part

var contact_us = document.querySelector(".contact-us");
var contact_uschild2 = contact_us.querySelector(".child2");
var contactInput  = contact_uschild2.querySelectorAll("div");

function validation() {
    "use strict";
    for (var f = 0; f < contactInput.length; f++) {
    if(contactInput[f].firstElementChild.value.length == 0) {
        var contactnewdiv = document.createElement("div");
        contactnewdiv.className = "tasksnotch";
        contactnewdiv.classList.add("tasksnotch1");
        var contactnewdivtext = document.createTextNode("pleas dont make input fild impity");
        var contactnewdivI = document.createElement("i");
        contactnewdivI.classList = "fa fa-info";
        contactnewdiv.appendChild(contactnewdivtext);
        contactnewdiv.appendChild(contactnewdivI);
        document.body.insertBefore(contactnewdiv,document.body.firstElementChild);
        var contactTop = contactInput[f].offsetTop + contactInput[f].offsetHeight;
        var contactleft = contactInput[f].offsetLeft + 15;
        contactnewdiv.style.top = contactTop + "px";
        contactnewdiv.style.left = contactleft + "px";
    }

}

        setTimeout(function() {
            var tasksnotch155 = document.querySelectorAll('.tasksnotch1');
            for(var o = 0; o < tasksnotch155.length; o++ ) {
                tasksnotch155[o].remove();
            }
        },2000)
}
// end contact-us part
// start boking part
var booking = document.querySelector(".bockticket");
var bookinginput = booking.querySelectorAll("input");
var over_booking = booking.querySelector(".over-booking");
var clicktobook = document.querySelector(".clicktobook");
for(var pp = 0; pp < bookinginput.length; pp++) {
    bookinginput[pp].onfocus = function() {
        this.parentElement.classList.add("active") 
}
    bookinginput[pp].onblur = function() {
        this.parentElement.classList.remove("active")  
}
}
over_booking.onclick = function() {
    "use strict";
    booking.style.visibility = "hidden";
    booking.style.opacity = "0";
    booking.firstElementChild.style.transform = "translatey(-200%)"
}
clicktobook.onclick = function() {
    "use strict";
    booking.style.visibility = "visible";
    booking.style.opacity = "1";
    setTimeout(function() {
        booking.firstElementChild.style.transform = "translatey(0)"
    },700)
}
// end boking part
// start uuping button part
var uppingbuttonnn = document.querySelector(".upping-button");
// part 1 about nave bar
var uppernave = window.document.querySelector(".upper-nave"),
    navbar = document.querySelector(".navbar"),
    navebarli = document.querySelectorAll(".navbar .list1");
var about = document.getElementById("about");
var menue = document.getElementById("menue");
var spechils = document.getElementById("spechils");
var event = document.getElementById("event");
var chefs = document.getElementById("chefs");
var galary = document.getElementById("galary");
var contact = document.getElementById("contact");

window.onscroll = function() {
    "use strict";
    if(document.documentElement.scrollTop <= 600) {
        uppingbuttonnn.style.opacity = "0";
        uppingbuttonnn.style.visibility = "heddin";
    } else {
        uppingbuttonnn.style.opacity = "1";
        uppingbuttonnn.style.visibility = "visible";
    }
    if (window.pageYOffset >= 200) {
        uppernave.style.display = "none";
        navbar.classList.add("scrold");
    } else {
        uppernave.style.display = "block";
        navbar.classList.remove("scrold");
    }
    for(var qq = 0; qq < navebarli.length; qq++) {
        navebarli[qq].firstElementChild.classList.remove("active");
    } 
    if(window.scrollY >= contact.offsetTop) {
        navebarli[7].firstElementChild.classList.add("active");
    } else if(window.scrollY >= galary.offsetTop) {
        navebarli[6].firstElementChild.classList.add("active");
    } else if(window.scrollY >= chefs.offsetTop) {
        navebarli[5].firstElementChild.classList.add("active");
    } else if(window.scrollY >= event.offsetTop) {
        navebarli[4].firstElementChild.classList.add("active");
    } else if(window.scrollY >= spechils.offsetTop) {
        navebarli[3].firstElementChild.classList.add("active");
    } else if(window.scrollY >= menue.offsetTop) {
        navebarli[2].firstElementChild.classList.add("active");
    } else if (window.scrollY >= about.offsetTop) {
        navebarli[1].firstElementChild.classList.add("active");
    } else {
        navebarli[0].firstElementChild.classList.add("active");
    }
}
uppingbuttonnn.onclick = function() {
    "use strict";
    var cleringss = setInterval(function() {
        window.scrollBy(0,-100);
        if(window.pageYOffset == 0) {
            clearInterval(cleringss)
        }
    },30)
}
// end uuping button part
// start witing-div part
var witing_div = document.querySelector(".witing-div");
window.onload = function() {
    "use strict";
    setTimeout(function() {
        witing_div.style.display = "none";
        document.body.style.overflow = "auto"
    },2000);
    if(document.documentElement.scrollTop <= 600) {
        uppingbuttonnn.style.opacity = "0";
        uppingbuttonnn.style.visibility = "heddin";
    } else {
        uppingbuttonnn.style.opacity = "1";
        uppingbuttonnn.style.visibility = "visible";
    }
}
// end witing-div part
// start style control part

var aside = document.querySelector(".aside");
aside.children[0].onclick = function() {
    "use strict";
    aside.children[0].firstElementChild.classList.toggle("fa-spin");
    aside.classList.toggle("active");
}
aside.children[2].addEventListener("click",function(e) {
    "use strict";
    var licolor = e.target.getAttribute("data-color");
    document.documentElement.style.setProperty("--main-color",licolor);
    
})

















