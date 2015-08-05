var el = {
  userName: $("#name"),
  userLocation: $("#location"),
  userEmail: $("#email"),
  userColor: $("#color"),
  userQuest: $("#quest"),
  write: $("#write"),
  projects: $("#projects").children()
};

var storage = {
  userName: "userName",
  userLocation: "userLocation",
  userEmail: "userEmail",
  userColor: "userColor",
  userQuest: "userQuest"
};

// Need to set the initial values for the item, then need to set the items
// as the user changes the values of their profile information.

var setUserInfo = function(key, arg) {
  var inputValue = arg.val();
  localStorage.setItem(key, inputValue);
};

// write user value as a constructor function
var getUserInfo = function(key) {
  localStorage.getItem(key);
};

// update user values
var changeUserInfo = function(key) {
  localStorage.setItem(key, "");
};

var displayName = function() {
  return el.write.text(localStorage.userName);
};

// The switcheroo method is an example determining output based on the item
// selected's id attribute. This function would be a business logic method, ideally
// used in the model.
var switcheroo = function( elem ) {
  switch (elem.attr("id")) {
    case "prj1":
      console.log("first project selected");
      break;
    case "prj2":
      console.log("second project selected");
      break;
    case "prj3":
      console.log("third project selected");
      break;
    case "prj4":
      console.log("fourth project selected");
      break;
  }
};

// The whichProject function processes the event to provide user output.
// I've put it directly underneath the switch statement for easy access while
// referencing. Of course, this would ideally go below into the event handlers
// section. 
var whichProject = function() {
  el.projects.on("click", function() {
    switcheroo($(this));
  });
};

// ----------------------------- EVENT HANDLERS ----------------------------- */
var setUserInfo = function() {
  var submit = $("#submit");
  submit.on('click', function() {

  });
};


var init = function() {
  setUserInfo();
  displayName();
  whichProject();
};

init();
