window.enabled = true;
chrome.runtime.onMessage.addListener(function (request,
	sender, doit){
	if(request=='getenabled') {
		doit({value: window.enabled});
	}
	else if(request=='flip'){
		window.enabled = !window.enabled;
		doit({value: window.enabled});
	} else{
		doit({value: window.enabled});
	}
	// document.getElementById('toggle_button').value = enabled ? "Disable" : "Enable";
})