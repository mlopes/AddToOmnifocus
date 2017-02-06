var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Send to OmniFocus Inbox",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  var name = "Read - " + tabs.activeTab.title;
  var selection = require("sdk/selection");
  var note = tabs.activeTab.url + (selection.text != undefined ?  "\n" + selection.text : "");
  tabs.open('omnifocus:///add?name=' + encodeURIComponent(name) + '&note=' + encodeURIComponent(note));
  tabs.activeTab.close();
}
