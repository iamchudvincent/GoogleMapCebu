var RestaurantMap = CategorizableMap.extend({
	init: function(el, templateDirectory) {
		// simple map controls on bottom right w/ category legend on top left
		var options = {
			mapOptions: {
				mapTypeControl: false,
				panControl: true,
				panControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
			},

		};

		if (this.isMobile()) {
			// zoom to Ayala, Cebu
			options.latLng = new google.maps.LatLng(10.3180485,123.9067759),
			options.zoom = 20;
		}

		this._super(el, options);

		this.addCategory('filipino', {
			url: templateDirectory + 'google-icon-filipino.ico',
			size: new google.maps.Size(64, 64),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(25, 33)
		});

		this.addCategory('greek', {
			url: templateDirectory + 'google-icon-greece.ico',
			size: new google.maps.Size(64, 64),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(25, 33)
		});

		this.addCategory('mexico', {
			url: templateDirectory + 'google-icon-mexico.ico',
			size: new google.maps.Size(64, 64),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(25, 33)
		});

		this.addCategory('japanese', {
			url: templateDirectory + 'google-icon-japan.ico',
			size: new google.maps.Size(64, 64),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(25, 33)
		});

		this.addCategory('italian', {
			url: templateDirectory + 'google-icon-italy.ico',
			size: new google.maps.Size(64, 64),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(25, 33)
		});
		
		this.addCategory('thai', {
			url: templateDirectory + 'google-icon-thailand.ico',
			size: new google.maps.Size(64, 64),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(25, 33)
		});
		
		this.addCategory('usa', {
			url: templateDirectory + 'google-icon-usa.ico',
			size: new google.maps.Size(64, 64),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(25, 33)
		});

		this.initializeEvents();

		return this;
	},

	/**
	 * Bind events for handling map legend for category selection.
	 */
	initializeEvents: function() {
		var this_ = this;

		$('.google-map-categories li').on('click', function() {
			var locationCategory = $(this).data('location-category');

			this_.toggleCategory(locationCategory);
		});

		return this;
	},

	/**
	 * Fit all markers on screen for desktop and tablet devices.
	 */
	finalize: function() {
		if (!this.isMobile()) {
			this.zoomToMarkers();
		}
	},

	/**
	 * Make an estimate on whether current viewport is on mobile.
	 * e.g., reduced width
	 *
	 * @return True if the viewport width is less than Bootstrap's xs-min-width.
	 */
	isMobile: function() {
		return $('.google-map-legend').is(':hidden');
	},

	/**
	 * Override parent method to change HTML that appears in the InfoWindow
	 * that pops when clicking a marker.
	 *
	getLocationHtml: function(location) {
	},
	*/
});
