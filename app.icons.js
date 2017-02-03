angular
	.module('app')
	.config(appIcons);

	appIcons.$inject = ['$mdIconProvider'];
	function appIcons($mdIconProvider) {
		$mdIconProvider.defaultIconSet('img/mdi.svg');
	}