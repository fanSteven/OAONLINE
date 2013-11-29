(function($) {
	//	
	$.TransportBuilder = function(defaultSettings){
		
		if(!defaultSettings) defaultSettings = $.TransportBuilder.settings.defaults;
		
		var _gsub = function(source, pattern, replacement) {
			var result = '', match;
			while (source.length > 0) {
				if (match = source.match(pattern)) {
					result += source.slice(0, match.index);
					result += replacement(match).toString();
					source  = source.slice(match.index + match[0].length);
				} else {
					result += source, source = '';
				}
			}
			return result;
		};
		
		var _updateOptions = function(target, data, force) {
			var result;
			if(target===undefined) {
				result = data;
			}else if(target!==null && typeof(target)=='object') {
				result = {};
				for(var key in target) {
					result[key] = target[key];
				}
				for(var key in data) {
					result[key] = _updateOptions(target[key], data[key], force);
				}
			}else if(force) {
				result = data;
			}else {
				result = target;
			}
			return result;
		};
		
		this.buildQueryString = function(queryParams){
			return $.param(queryParams);
		};
		
		this.buildUrl = function(params, action, settings) {
			var sourceUrl = settings[action].urlTemp;
			var queryParamList = settings[action].queryParams;
			if(!params) return sourceUrl;
			
			var urlParams = [];
			var result = _gsub(sourceUrl, /\{(.+?)\}/, function(match){
				var key = match[1];
				var value = params[key];
				if( value===undefined ) {
					return match[0];
				}else if(value===null) {
					value = '';
				}
				urlParams.push(key);
				return encodeURIComponent(value);
			});
			
			if(settings.ext) result += settings.ext;
			if(settings.baseUrl) result = settings.baseUrl + result;
			
			if(queryParamList) {
				var queryParams = {};
				for(var key in params) {
					if($.inArray(key, queryParamList)) {
						queryParams[key] = params[key];
					}
				}
				
				var queryString = this.buildQueryString(searchParams);
				if(queryString) result += "?" + queryString;
			}
			
			return result;
		};
		
		this.build = function(settings) {
			
			var result = {};
			var _this = this;
			
			for(var key in settings) {
				result[key] = settings[key];
			}

			if(result.read) {
				result.read.url = function (data) {
					return _this.buildUrl(data, "read", result);
				};
			}
			if(result.create) {
				result.create.url = function (data) {
					return _this.buildUrl(data, "create", result);
				};
			}
			if(result.update) {
				result.update.url = function (data) {
					return _this.buildUrl(data, "update", result);
				};
			}
			if(result.destroy) {
				result.destroy.url = function (data) {
					return _this.buildUrl(data, "destroy", result);
				};
			}
						
			return _updateOptions(result, defaultSettings);
		};
		
	};
	
	$.TransportBuilder.settings = {};
	
	$.TransportBuilder.settings.rest_json = {			
		read: {
			type: "GET",
			dataType: "json",
			contentType: "application/json",
			async: false
		},
		update: {
			type: "PUT",
			dataType:"json",
			contentType: "application/json",
			async: false
		},
		create: {
			type: "POST",
			dataType:"json",
			contentType: "application/json"
		},
		destroy: {
			type: "DELETE",
			dataType:"json"
		},
		parameterMap: function (options, operation) {
			// if the current operation is an update
			if (operation != "read" && operation != "destroy") {
				return JSON.stringify(options);
			}else {
				return options;
			}
		}
	};
	
	$.TransportBuilder.settings.defaults = $.TransportBuilder.settings.rest_json;
	
})(jQuery);