var requestedFileName = '';

function parseParams() {
	var currentLocation = new String(self.document.location);
	var locationArray = currentLocation.split('?');
	
	if (2 != locationArray.length) {
		return ;
	}
	
	var url = new String(locationArray[0]);
	url = url.replace(new RegExp('/([^/]+)$'), '/');
	
	var paramsString = new String(locationArray[1]);
	var paramsArray = paramsString.split('&');
	
	for (i = 0; i < paramsArray.length; i++) {
		var paramString = new String(paramsArray[i]);
		var paramArray = paramString.split('=');
		var paramKey = paramArray[0];
		var paramValue = paramArray[1];
		
		if ('fileName' == paramKey) {
			requestedFileName = paramValue;
		}
	}
}

function showPage() {
	parseParams();
	
	if ('' != requestedFileName) {
		try {
			top.BODY.document.location = requestedFileName;
		} catch (e) {}
		}
	else {
		try {
			top.BODY.document.location = 'about.htm';
		} catch (e) {}
		}
	
}

onload = showPage;

