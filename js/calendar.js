(function($) {

	"use strict";

	var options = {
        language: 'tr-TR',
		events_source: function () { return [
            {
                "id": "201",
                "title": "Doğum :)",
                "class": "event-success",
                "start": "1572243180000",
                "end":   "1572243240000"
            },
            {
                "id": "202",
                "title": "Hepatit B ilk doz",
                "class": "event-warning",
                "start": "1572243600000",
                "end":   "1572244200000"
            },
            {
                "id": "203",
                "title": "Hepatit B 2. doz",
                "class": "event-warning",
                "start": "1574928000000",
                "end":   "1574929800000"
            },
            {
                "id": "204",
                "title": "Kalça ultrasonu",
                "class": "event-info",
                "start": "1574922600000",
                "end":   "1574926200000"
            },
            {
                "id": "205",
                "title": "2. Kalça ultrasonu",
                "class": "event-warning",
                "start": "1577512800000",
                "end":   "1577514600000"
            },
            {
                "id": "206",
                "title": "BCG",
                "class": "event-warning",
                "start": "1578571200000",
                "end":   "1578573000000"
            },
            {
                "id": "207",
                "title": "DaBT - İPA - Hib 1. doz",
                "class": "event-warning",
                "start": "1578571200000",
                "end":   "1578573000000"
            },
            {
                "id": "208",
                "title": "KPA 1. doz",
                "class": "event-warning",
                "start": "1578571200000",
                "end":   "1578573000000"
            }
        ]; },
		view: 'month',
		tmpl_path: 'tmpls/',
		tmpl_cache: false,
		onAfterEventsLoad: function(events) {
			if(!events) {
				return;
			}
			var list = $('#eventlist');
			list.html('');

			$.each(events, function(key, val) {
				$(document.createElement('li'))
					.html('<a href="' + val.url + '">' + val.title + '</a>')
					.appendTo(list);
			});
		},
		onAfterViewLoad: function(view) {
			$('.page-header h3').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('button[data-calendar-view="' + view + '"]').addClass('active');
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var calendar = $('#calendar').calendar(options);

	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.view($this.data('calendar-view'));
		});
	});
}(jQuery));