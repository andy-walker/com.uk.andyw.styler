/**
 * Javascript for additional styling
 * There are some tasks which we can't achieve with css alone sadly, so 
 * we'll use javascript to take care of those
 */

// replace '>>'' in button text with right angle quote
cj('.crm-container .crm-button input[type=button], .crm-container .crm-button input[type=submit]').each(function() {
    cj(this).val(cj(this).val().replace('>>', '»'));
});

// for each checkbox, create wrapper div and add label after element
cj('.crm-container input[type=checkbox]').each(function() {

	// if checkbox has no id, create one based on the name
	if (!cj(this).attr('id'))
		cj(this).attr('id', cj(this).attr('name').replace(/[\[\]]/g, '_'));

	// add wrapper div and label after checkbox
	cj(this).wrap('<div class="styled-checkbox"></div>')
	        .after('<label for="' + cj(this).attr('id') + '"></label>');
});

// for each radio button, create wrapper div and add label after element
cj('.crm-container input[type=radio]').each(function() {

	// if checkbox has no id, create one based on the name
	if (!cj(this).attr('id'))
		cj(this).attr('id', cj(this).attr('name').replace(/[\[\]]/g, '_'));

	// add wrapper div and label after checkbox
	cj(this).wrap('<div class="styled-radio"></div>')
	        .after('<label for="' + cj(this).attr('id') + '"></label>');
});

// add wrapper div to select boxes
cj('.crm-container select').each(function() {
	var width = cj(this).width();
	cj(this).wrap('<div class="select-box-wrapper" style="width:' + width + 'px"></div>');
	
	// make select box 20px wider, cutting off arrow due to overflow:hidden on wrapper
	cj(this).width(width + 20)
	cj(this).focus(function() {
				cj(this).parent().addClass('select-box-wrapper-focused');
			})
			.blur(function() {
				cj(this).parent().removeClass('select-box-wrapper-focused');
			});
});


cj('.crm-container select option:first-child').each(function() {
	var label = cj(this).html();
	if (label.match(/^\-.+\-$/)) {
		cj(this).html('<span class="option-first">' + label.replace(/^\-(.+)\-$/, '$1...') + '</span>');
	}
});
