function onOmniFocusTabCreate(tab) {
	browser.tabs.remove(tab.id);
}

function onQueryComplete(tabs) {
	var tab = tabs[0];

	var name = tab.title;
	var note = tab.url;

    var url = "omnifocus:///add?name=" + encodeURIComponent(name) + '&note=' + encodeURIComponent(note);
	browser.tabs.create({url: url}).then(onOmniFocusTabCreate, onError);
}

function onError(error) {
	console.log("Error: ", error);
}

function onClicked() {
	browser.tabs.query({currentWindow: true, active: true}).then(onQueryComplete, onError);
}

browser.browserAction.onClicked.addListener(onClicked);
