if (top == self) {
	var fileName = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
	var pathToDirectory = location.href.substring(0, location.href.lastIndexOf('/')+1);
	
	location.href = pathToDirectory + 'index.htm?fileName=' + fileName;	
}
