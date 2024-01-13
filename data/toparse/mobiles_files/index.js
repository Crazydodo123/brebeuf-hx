(function($, undefined) {
	'use strict';
	
	var init = function () {
		$('.important-info-admin-input').change(function () {
			var t = $(this);
			var ctn = t.closest('.important-info-admin');
			var key = t.attr('name');

			updateLabelLangs(key, t.is(":checked").toString(), $('html').attr('lang'), function (){}, true);
		});

		$('.important-information-close-btn').click( function() {
			saveSessionVariable('toggledInfo', 'true', function () {
			    $('.important-information-wrapper').slideUp();
			});
		});
	};
	
	$(init);

})(jQuery);

function redirectLang() {
	var lang = (navigator.languages && navigator.languages[0].indexOf("en") !== -1) ? "en" : "fr";
	var currLang = document.getElementsByTagName("html")[0].getAttribute('lang');
	
	if (getCookie('hasBeenHomeRedirected') !== 'true') {
		setCookie('hasBeenHomeRedirected', 'true', '');
		
		if (lang === 'en' && currLang !== 'en') {
			window.location = '/en/';
		} else  {
			window.location = '/';
		}
	}
}


function setCookie(cname, cvalue, exdays) {
    if (exdays !== '') {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    var expires = "expires="+d.toUTCString();
    	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    } else {
    	document.cookie = cname + "=" + cvalue + ";";
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function saveSessionVariable(key, val, callback) {
    if (val === null) {
        ajax("/action/sessionVariables?key=" + key, callback, true);
    } else {
        ajax("/action/sessionVariables?key=" + key + "&value=" + val, callback, true);
    }
}

