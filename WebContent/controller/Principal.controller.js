sap.ui.controller(
    "ar.com.unq.controller.Principal",
    {
    	onAfterRendering: function() {     	   
    		this.cargarModelAulas();
    	},
    	
    	cargarModelAulas: function(){
    		var oView = this.getView();

    	    var oModelAulas = new sap.ui.model.json.JSONModel();

    	    var url = 'http://127.0.0.1:8000/api/aulas';
    	    $.get({
                   url : url,
                   headers: { "Accept": "application/json"},
   		           dataType: 'json',
                   success : function(data, textStatus, jqXHR) {
                	   oModelAulas.setData(data);
                       console.log(oModelAulas);   
                       oView.setModel(oModelAulas, "aulas");
                   },
                   error : function(jqXHR,textStatus,errorThrown) {
                	  console.log("Error en la conexion");
                   }
    	    });
    	}	
    }
);