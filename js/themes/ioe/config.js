var theme = theme || "ioe";
var themeMap = 
{
	'*': {
		// Template overrides are provided here
		
		// Resources (js) omit extension
		//'views/DataCatalogView' : 'themes/' + theme + '/views/DataCatalogView',
                'views/RegistryView' : 'themes/' + theme + '/views/RegistryView',
                //'models/AppModel': 'themes/' + theme + 'models/AppModel',
		//'routers/router' : 'themes/' + theme + '/routers/router',
		
		// Templates include extension
		'templates/app.html' : 'themes/' + theme + '/templates/app.html',
		'templates/appHead.html' : 'themes/' + theme + '/templates/appHead.html',
		'templates/navbar.html' : 'themes/' + theme + '/templates/navbar.html',
		'templates/footer.html' : 'themes/' + theme + '/templates/footer.html',
		'templates/mainContent.html' : 'themes/' + theme + '/templates/mainContent.html',
		'templates/altHeader.html' : 'themes/' + theme + '/templates/altHeader.html',
		'templates/defaultHeader.html' : 'themes/' + theme + '/templates/defaultHeader.html',
		'templates/about.html' : 'themes/' + theme + '/templates/about.html'
		}
};