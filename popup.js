chrome.runtime.sendMessage('changeButton', changeButton)
function changeButton(res){
	var enabled = res.value;
	text = 'Enable'
	if(enabled==true) text = 'Disable';
	document.querySelector('button').innerHTML = text
}
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('button').addEventListener('click', onclick, false)
	function onclick() {
		chrome.tabs.query({currentWindow:true, active: true},
		function (tabs){
			chrome.tabs.sendMessage(tabs[0].id, 'hi')
		})
		chrome.runtime.sendMessage('flip', changeButton)
		
	}
	
}, false)
