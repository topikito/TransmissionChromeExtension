jQuery(document).ready(function()
{
	var loader 					= jQuery('#loader')
	,	iframe 					= jQuery('#transmissionFrame')
	,	settings 				= jQuery('#settings')
	,	saveSettingsButton 		= jQuery('#saveSettings')
	,	transmissionUrlInput 	= jQuery('#transmissionUrl')
	,	checkStorage = function()
	{
		loader.hide();
		settings.hide();
		iframe.hide();
		transmissionUrl = '';
		if (localStorage.transmissionUrl)
		{
			transmissionUrl = localStorage.transmissionUrl;
			iframe.attr('src',transmissionUrl).show();
		}
		else
		{
			settings.show();
		}
	}
	,	saveSettings = function(newData)
	{
		if (newData.transmissionUrl)
		{
			localStorage.transmissionUrl = newData.transmissionUrl;
		}
		checkStorage();
	};

	checkStorage();
	saveSettingsButton.bind('click', function() { saveSettings({ "transmissionUrl" : transmissionUrlInput.val() }); });

});
