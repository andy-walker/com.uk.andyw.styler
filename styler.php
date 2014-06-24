<?php

/**
 * Implementation of hook_civicrm_config
 */
function styler_civicrm_config() {

    // add styles
    CRM_Core_Resources::singleton()->addStyleFile(
        basename(__DIR__), 
        'default.css',
        CRM_Core_Resources::DEFAULT_WEIGHT,
        'html-header'
    );
    
    // add javascript
    CRM_Core_Resources::singleton()->addScriptFile(
        basename(__DIR__),  
        'styler.js' 
    );

}