
chrome.runtime.sendMessage('getenabled', doit);
function doit(now){
	var enabled = now.value;
	var x = document.getElementsByClassName("roundbox sidebox");
	for (var i = x.length - 1; i >= 0; i--) {
		y = x[i].getElementsByClassName("caption titled");
		if(y.length >= 1){
			if(enabled==true && y[0].innerText.search('Problem tags') != -1){
				x[i].innerHTML = "Hidden";
			}
		}
	}
}








// x[0].innerHTML = "Hello World!"
// var enabled = 1;
// function isRealValue(obj)
// {
//  return obj && obj !== 'null' && obj !== 'undefined';
// }
// chrome.storage.local.get(['enabled'], function(result) {
// 		// alert(result.key)
// 	    if(result.key==undefined) {
// 	    	alert('null')
// 	    	enabled = 1;
// 	    	chrome.storage.local.set({enabled: 1}, function() {
//  			});
// 	    } else enabled = result.key;
// 	    // alert(Number(result))
// 	 });
// alert(enabled)

// chrome.runtime.onMessage.addListener(function (request,
// 	sender, senResponse){
// 	chrome.storage.local.get(['enabled'], function(result) {
// 	    enabled = result.key;
// 	 });
// 	nw = 0;
// 	if(enabled == 0) nw = 1;
// 	chrome.storage.local.set({enabled: nw}, function() {
// 	});
// 	// document.getElementById('toggle_button').value = enabled ? "Disable" : "Enable";
// })