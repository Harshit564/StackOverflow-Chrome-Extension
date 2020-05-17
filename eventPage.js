var menuItem ={
	"id": "SS",
	"title": "Stackoverflow Search",
	"contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str){
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if (clickData.menuItemId == "SS" && clickData.selectionText){
		var stackUrl ="https://stackoverflow.com/questions/tagged/" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": stackUrl,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": screen.availHeight/2,
			"height": screen.availHeight/2
		};
		chrome.windows.create(createData, function(){});
	}
});