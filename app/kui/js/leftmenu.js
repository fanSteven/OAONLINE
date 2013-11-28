/**
 * 左侧导航菜单
 */
$(document).ready(function() {
	var _host = window.location.host;
	var _path = window.location.pathname.split('/')[1];
	var __host_path = "http://" + _host + "/" + _path + "/";
	// alert(__host_path);
	var panelBar = $("#panelbar-images").kendoPanelBar({
		dataSource : [ {
			text : "事件",
			imageUrl : __host_path + "images/icons/chart.ico",
			items : [ {
				text : "事件列表",
				url : __host_path + "EventList.html",
				imageUrl : __host_path + "images/icons/chart_1.ico"
			} ]
		}, {
			text : "事件类型",
			imageUrl : __host_path + "images/icons/chart.ico",
			items : [ {
				text : "事件类型列表",
				url : __host_path + "EventTypeList.html",
				imageUrl : __host_path + "images/icons/chart_1.ico"
			} ]
		}, {
			text : "过滤器",
			imageUrl : __host_path + "images/icons/baseResources.ico",
			items : [ {
				text : "过滤器列表",
				url : __host_path + "FilterList.html",
				imageUrl : __host_path + "images/icons/vm.ico"
			}, ]
		}, {
			text : "事件标签",
			imageUrl : __host_path + "images/icons/package.ico",
			items : [ {
				text : "标签列表",
				url : __host_path + "EventLabelList.html",
				imageUrl : __host_path + "images/icons/host_1.ico"
			} ]
		} ]
	});
	panelBar.bind("select", function() {
		// console.log("select event");
	});
	$("#panelbar-images").delegate("a", "click", function(e) {
		// console.log("click event");
		/*var element = $(this), href = this.href;
		e.preventDefault();
		if (!location.href.match(href)) {
			// alert(href);
			// updateNavLinks(element.parent(),
			// $("#panelbar-images
			// a"));
			Application.load(href);
		}*/
	});
});