// Declare if running standalone
if (typeof p9 === "undefined") {
    p9 = {};
    p9.usermaster = {};
}

p9.usermaster.onSave = function(userData) {
    console.log("Trigger Save");
    console.log(userData);
}

p9.usermaster.onGet = function(userData) {
    console.log("Trigger Get");
    console.log(userData);
}

p9.usermaster.onDelete = function(userData) {
    console.log("Trigger Save");
    console.log(userData);
}

p9.usermaster.onEdit = function() {
    toggleEdit(true);
}

p9.usermaster.onDisplay = function() {
    toggleEdit(false);
}