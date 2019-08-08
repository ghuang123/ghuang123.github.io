$("#KoiStart").on("loadeddata", function() {
	document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
	/*$("#KoiStart").bind("ended", function() {
		$("#KoiCycle").css("visibility","visible");
	    $("#KoiCycle").play();
	});*/

});

//$("#KoiStart").defaultPlaybackRate = 0.5;

var timer = 0;
var num = 150;
var selectedhome = $("#nav-home");
var selectedcase = $("#nav-case");
var selectedcontact = $("#nav-contact");

function caseActive(){
	selectedhome.removeClass("active");
	selectedcontact.removeClass("active");
	selectedcase.addClass("active");
}

function contactActive(){
	selectedcase.removeClass("active");
	selectedhome.removeClass("active");
	selectedcontact.addClass("active");
}

function homeActive(){
	selectedcase.removeClass("active");
	selectedcontact.removeClass("active");
	selectedhome.addClass("active");
}

$(window).bind('scroll', scrollWindowBind);

function scrollBind() {
	$(window).delay(800).bind('scroll', scrollWindowBind);
}

function scrollWindowBind() {
	if ($(window).scrollTop()>num){
        $('.menu').addClass('scrolled');
        console.log("scroll working");
    } else{
        $('.menu').removeClass('scrolled');
    };

	if(($(window).scrollTop() + $(window).height()) > ($(document).height() - 200)){
		contactActive();
	} else if ($(window).scrollTop() > (window.innerHeight - 100)){
		caseActive();
	} else {
		homeActive();
	};
}

function smoothScroll(hash){
	$(window).unbind('scroll');
	$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
	});
	setTimeout(scrollBind, 800);
};

$(document).ready(function(){
	// Add smooth scrolling to all links
	if(window.location.href !== "index.html" || window.location.href !== "/"){
		$(".NI").on('click', function(event){
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				smoothScroll(hash);
			} // End if
		});

		selectedhome.on('click', function(event) {
			homeActive();
		});

		selectedcase.on('click', function(event) {
			caseActive();
		});

		selectedcontact.on('click', function(event) {
			contactActive();
		});

	} else {
		homeActive();
	}

});

//PROJECT RENDERING


var projects = {
  "proj0": {
    "title": "IBM Hackathon",
    "projName": "BLUE BAGUETTE",
    "desc": "Blue Baguette generates conversational lessons tailored off of user’s personal experiences. Everyone learns differently from their use of words to style of learning and Blue Baguette’s takes that into account.",
    "link": "blue.html",
    "picture": "assets/blue.png",
  },
  "proj1": {
    "title": "IBM Bridging Communications",
    "projName": "GARAGE NEWS",
    "desc": "Worked with a cross functional team to create a prototype to organize information flow to be informative and efficient throughout IBM Garage’s local and international community.",
    "link": "bridge.html",
    "picture": "assets/ibm.png",
  },
  "proj2": {
    "title": "IBM User Experience",
    "projName": "A/B TESTING",
    "desc": "Increased digital marketing efficiencies via contact modules, forms, and campaigns to generate inbound leads.",
    "link": "user.html",
    "picture": "assets/garage.png",
  },
  "proj3": {
    "title": "Olin College: Principles of Engineering",
    "projName": "MANNY THE MAN",
    "desc": "Manny the man is a sculpture that mimics the motions of a person. The project comprises of mechanical, electrical and software pieces. Manny is controlled with pulleys, an arduino and an up board to control servos, and a microsoft kinect to receive user movements.",
    "link": "olin.html",
    "picture": "assets/xbox.png",
  },
  "proj4": {
    "title": "Softbank Robotics",
    "projName": "MARKET ANALYSIS",
    "desc": "Recommend product features and innovative go to market strategies for future robotic products. Conducted target industry value chain players interviews and observations. Identified key industry pain points and market opportunity",
    "link": "nda.html",
    "picture": "assets/robot.png",
  },
  "proj5": {
    "title": "DataRobot",
    "projName": "LEAD GENERATION",
    "desc": "Developed a standardized growth hacking prospecting process through 13 different Fortune 500 industries and generated 35 C-level executive meetings.",
    "link": "nda.html",
    "picture": "assets/dr.png",
  },
  "proj6": {
    "title": "HUGE INC",
    "projName": "TALENT + ASSET MAPPING",
    "desc": "Strategically identified over 64 opportunities for thought leadership (speaking engagements, editorial submissions etc.) Created 27 press kits and speaker bios for Huge DC key leadership and spokespeople. Helped organize a launch event via different outreach channels, i.e. Meetup.com with over 132 attendants",
    "link": "nda.html",
    "picture": "assets/huge.png",
  },
}

var numProjShown = 4;
var numProjTotal = Object.keys(projects).length;

function createProj(proj) {
  let title = projects[proj].title;
  let projName = projects[proj].projName;
  let desc = projects[proj].desc;
  let link = projects[proj].link;
  let picture = projects[proj].picture;

  var HTMLproj = `<div class='projItem ui two column grid' id="${proj}"><div class='column studyCard'><div class='studyHeader'>${title}</div><div class='studyTitle'>${projName}</div><div class='studyDesc'>${desc}</div><a class='seeMore' href="${link}">Learn more >></a></div><div class='column image-box'><a href="${link}"><img class='prev-img' src="${picture}"/></a></div></div>`

  var landingStudies = document.querySelector("#landingStudies");
  landingStudies.innerHTML += HTMLproj;
}

function deleteProj(proj) {
  $("#" + proj).remove();
}

function showHide() {
  let projItems = document.querySelectorAll(".projItem");
  let numProjItems = projItems.length;
  if (numProjItems < numProjShown+1) {
    for (let x = numProjShown; x < numProjTotal; x++) {
      let proj = "proj" + x;
      createProj(proj);
    }
    moreProjects.innerHTML = "show less";
  } else {
    for (let x = numProjShown; x < numProjTotal; x++) {
      let proj = "proj" + x;
      deleteProj(proj);
    }
    moreProjects.innerHTML = "view more";
  }
}

for (let x = 0; x < numProjShown; x++) {
  let proj = "proj" + x;
  createProj(proj);
}

var moreProjects = document.querySelector("#moreProjects");
moreProjects.addEventListener('click', showHide);





