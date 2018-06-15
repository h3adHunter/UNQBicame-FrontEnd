sap.ui.jsview("ar.com.unq.view.App", {

	getControllerName: function () {
		return "ar.com.unq.controller.App";
	},
	
	createContent: function (oController) {
		
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App("unqbicameApp");
		
		// load the master page
		var master = sap.ui.xmlview("Principal", "ar.com.unq.view.Principal");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		return this.app;
	}
});