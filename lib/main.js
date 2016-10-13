var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var { setTimeout } = require("sdk/timers");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
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
  var currentTab = tabs.activeTab;
  tabs.open({
    url: 'omnifocus:///add?name=' + encodeURIComponent(name) + '&note=' + encodeURIComponent(note),
    onOpen: function onOpen(tab) {
      setTimeout(function() {
        tab.close();
        currentTab.activate();
      });
    }
  });
}
