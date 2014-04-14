<?php

/**
 * Implementation of hook_civicrm_config
 */
function styler_civicrm_config() {

	// add styles
	CRM_Core_Resources::singleton()->addStyleFile(
		'com.uk.andyw.styler', 
		'default.css',
		CRM_Core_Resources::DEFAULT_WEIGHT,
        'html-header'
	);
 	
 	// add javascript
	CRM_Core_Resources::singleton()->addScriptFile(
		'com.uk.andyw.styler', 
		'styler.js'	
	);

}