jQuery.sap.declare("ar.com.unq.Component");

sap.ui.core.UIComponent.extend("ar.com.unq.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "ar.com.unq.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		return oView;
	}
});