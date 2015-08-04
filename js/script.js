var el = {
  userName: $("#name"),
  userLocation: $("#location"),
  userEmail: $("#email"),
  userColor: $("#color"),
  userQuest: $("#quest"),
  write: $("#write")
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

// ----------------------------- EVENT HANDLERS ----------------------------- */
var setUserInfo = function() {
  var submit = $("#submit");
  submit.on('click', function() {

  });
};

var init = function() {
  setUserInfo();
  displayName();
};

init();
