// expects jQuery

$(function() {
	// listen to body for events
	$('body')
		// REQ: When they are hovered, text should appear under the icon that states what the color is and all other Icons in the row should fade out to a 50% opacity.
		// long selector ensures all needed is available.
		.on('mouseenter', '.shapes label[for] .shape__example', function() {
			var $example = $(this),
				$container = $example.closest('.shapes'),
				// find checkbox (and state) for example
				$label = $example.closest('label'),
				labelFor = $label.attr('for'),
				id = labelFor && `#${labelFor}`,
				$input = id && $(id) || $([]),
				checked = $input.prop('checked'),
				className = `is-${checked ? 'checked' : 'unchecked'}-hovered`;

			// exit gracefully if we can't find a checkbox
			// and thus cannot determine state
			if(!id) { return; }

			// add class to container based on state of hovered example
			$container.addClass(className);
		})
		.on('mouseleave', '.shapes .shape__example', function() {
			// remove state classes on container
			$(this).trigger('remove-hover-states');
		})
		// when a shape is changed, browser mouseenter state would remain until
		// mouse is moved, but let's do it immediately.
		.on('change', '.shapes > .shape__input', function() {
			$(this).trigger('remove-hover-states');
		})
		.on('remove-hover-states', '.shapes', function() {
			$(this)
				.removeClass('is-unchecked-hovered is-checked-hovered')
		});
})
