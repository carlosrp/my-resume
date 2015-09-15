
//
// Bio
//
var bio = {
    "name": "Carlos Rodriguez",
    "role": "ICT Manager",
    "contacts": {
      "mobile": "+61 407 054 203",
      "email": "carlos@rodriguez.eu.com",
      "github": "carlosrp",
      "location": "Melbourne, Australia"
     },
    "skills": ["C/C++", "python", "SQL", "cooking", "saling"],
    "photo": "images/IMG_0325.JPG",
    //"photo": "http://cdn.magic899.com.au/images/minion.jpg"
    "welcomeMessage": "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
};

bio.display = function() {
  // Name & role
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  // Top Contact details
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile );
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email );
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github );
  $("#topContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location );
  $("#topContacts").append(formattedLocation);
  // Picture and Welcome message
  var formattedPicture = HTMLbioPic.replace("%data%", bio.photo);
  $("#header").append(formattedPicture);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);
  // Skills
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach( function( element ) {
      var formattedSkill = HTMLskills.replace("%data%", element);
      $("#skills").append(formattedSkill);
    });
  };
}
bio.display();

//
// Work Experience
//
var work = {
  "jobs": [
    {
      "title": "ICT Manager",
      "employer": "Watersure",
      "date_from": "Jan/2013",
      "date_to": "present",
      "location": "Wonthaggi, Australia",
      "description": "Victorian Desalination Plant"
    },
    {
      "title": "PCS Project Manager",
      "employer": "TDJV",
      "date_from": "Apr/2011",
      "date_to": "Dec/2012",
      "location": "Melbourne, Australia",
      "description": "Victorian Desalination Plant"
    },
    {
      "title": "Testing Manager",
      "employer": "SICE Australia",
      "date_from": "Jan/2016",
      "date_to": "Dec/2010",
      "location": "Melbourne, Australia",
      "description": "Eastlink Project"
    }
  ]
};

work.display = function() {
  for( job in work.jobs ) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkDates = HTMLworkDates.replace("%data%",
      work.jobs[job].date_from + " - " + work.jobs[job].date_to);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  };
}
work.display();

function locationizer(work_obj) {
  var locs_arr = [];
  for(job in work_obj.jobs) {
    locs_arr.push(work_obj.jobs[job].location);
  }
  return locs_arr;
}

//
// Projects
//
var projects = {
  "projects": [
    {
      "title": "My Portfolio",
      "date": "June/2015",
      "date_to": "June/2015",
      "description": "First Front-End Web Developer Nanodegree project:\n\
        template site for portfolio of projects. It uses bootstrap and\n\
        responsive images.",
      "images": [] //["http://placehold.it/200/400", "http://placehold.it/100/200"]
    },
    {
      "title": "My Resume",
      "date": "Aug/2015",
      "date_to": "Aug/2015",
      "description": "Seconf Front-End Web Developer Nanodegree project:\n\
        Resume site using JavaScript and jQuery.",
      "images": [] //["http://placehold.it/200/400"]
    }
  ]
};

//
// projects.display function: adds all projects information into
// projects section.
//
projects.display = function() {
  for(prj in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prj].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",
      projects.projects[prj].date + " - " + projects.projects[prj].date_to);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[prj].description);
    $(".project-entry:last").append(formattedDescription);
    if(projects.projects[prj].images.length > 0) {
      for(img in projects.projects[prj].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[prj].images[img]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  };
}
projects.display();

//
// Education
//
var education = {
  "schools": [
    {
      "name": "Universitat de Barcelona",
      "location": "Barcelona, Spain",
      "degree": "Licenciado",
      "major": ["Physics"],
      "grad_year": "1989",
      "URL": "http://www.ub.edu/fisica/en/"
    },
    {
      "name": "ESADE",
      "location": "Barcelona, Spain",
      "degree": "Masters",
      "major": ["Business Administration"],
      "grad_year": "1994",
      "URL": "http://www.esade.edu/mba/eng"
    }
  ],
  "onlineCourses": [
    {
      "title": "Python Programming Certificate",
      "school": "O'Reilly School of Technology",
      "date": "2013",
      "URL": "http://www.oreillyschool.com/"
    },
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "date": "2015",
      "URL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

//
// Education - Schools
//
education.displaySchools = function() {
  education.schools.forEach( function( element ) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolandDegree = HTMLschoolName.replace("%data%", element.name) +
      HTMLschoolDegree.replace("%data%", element.degree);
    $(".education-entry:last").append(formattedSchoolandDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", element.grad_year);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", element.location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", element.major);
    $(".education-entry:last").append(formattedSchoolMajor);
  });
}
education.displaySchools();

//
// Education - Online
//
education.displayOnline = function() {
  //
  // Check first if the list is not empty, so we  show the
  // <h3>Online Courses</h3> only if it's not empty.
  //
  if( education.onlineCourses.length > 0 ) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach( function( element ) {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitleandSchool = HTMLonlineTitle.replace("%data%", element.title) +
        HTMLonlineSchool.replace("%data%", element.school);
      $(".education-entry:last").append(formattedOnlineTitleandSchool);
      $(".education-entry:last a").attr("href", element.URL);
      var formattedOnlineDate = HTMLonlineDates.replace("%data%", element.date);
      $(".education-entry:last").append(formattedOnlineDate);
    });
  }
};
education.displayOnline();

function inName(name) {
  var tmpname = name.trim().split(" ");
  tmpname[0] = tmpname[0].slice(0,1).toUpperCase() +
    tmpname[0].slice(1).toLowerCase();
  tmpname[1] = tmpname[1].toUpperCase();

  return tmpname[0] + ' ' + tmpname[1];
}

//
// Other locations I have lived and worked in
// (although, the PlaceService textSearch goes
// OVER_QUERY_LIMIT; max seems to be 10)
//
var other_locations = [
  "Lima, Peru",
  "Santiago, Chile",
  "San Sebastian de los Reyes, Madrid, Spain",
  "Tel Aviv, Israel",
  "Medellin, Colombia",
  "Buenos Aires, Argentina",
];

//$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);


//
// Footer
//
var footer = {
  "contacts": {
    "mobile": bio.contacts.mobile,
    "email": bio.contacts.email,
    "github": bio.contacts.github
   }
};
footer.display = function() {
  // Footer Contact details
  var formattedMobile = HTMLmobile.replace("%data%", footer.contacts.mobile );
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", footer.contacts.email );
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", footer.contacts.github );
  $("#footerContacts").append(formattedGithub);
}
footer.display();
