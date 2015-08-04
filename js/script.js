var el = {
  userName: $("#name"),
  userLocation: $("#location"),
  userEmail: $("#email"),
  userColor: $("#color"),
  userQuest: $("#quest")
};

var storage = {
  userName: "userName",
  userLocation: "userLocation",
  userEmail: "userEmail",
  userColor: "userColor",
  userQuest: "userQuest"
};

// write user value as a constructor function
var getUserInfo = function(key, arg) {
  var inputValue = arg.val();
  localStorage.setItem(key, inputValue);
};

var setProfileDetails = function() {
  getUserInfo(storage.userName, el.userName);
  getUserInfo(storage.userLocation, el.userLocation);
  getUserInfo(storage.userEmail, el.userEmail);
  getUserInfo(storage.userColor, el.userColor);
  getUserInfo(storage.userQuest, el.userQuest);
};

// update user values
var changeUserInfo = function(key) {
  localStorage.setItem(key, "");
};

var eraseUserInfo = function(key) {
  changeUserInfo(key);
};

var displayInfo = function() {
  console.log(localStorage.userName);
  console.log(localStorage.userLocation);
  console.log(localStorage.userEmail);
  console.log(localStorage.userColor);
  console.log(localStorage.userQuest);
};

// ----------------------------- EVENT HANDLERS ----------------------------- */
var setUserInfo = function() {
  var submit = document.getElementById("submit");
  submit.on('click', function(e) {
    e.preventDefault();
    setProfileDetails();
  });
};
