sap.ui.controller(
    "ar.com.unq.controller.Principal",
    {
    	onAfterRendering: function() {     	   
    		this.cargarModelAulas();
    		this.cargarModelMaterias();
    		this.cargarModelCursadas();
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
    	},
    	
    	cargarModelMaterias: function(){
    		var oView = this.getView();

    	    var oModelMaterias = new sap.ui.model.json.JSONModel();

    	    var url = 'http://127.0.0.1:8000/api/materias';
    	    $.get({
                   url : url,
                   headers: { "Accept": "application/json"},
   		           dataType: 'json',
                   success : function(data, textStatus, jqXHR) {
                	   oModelMaterias.setData(data);
                       console.log(oModelMaterias);   
                       oView.setModel(oModelMaterias, "materias");
                   },
                   error : function(jqXHR,textStatus,errorThrown) {
                	  console.log("Error en la conexion");
                   }
    	    });
    	},
    	
    	cargarModelCursadas: function(){
    		var oView = this.getView();

    	    var oModelCursadas = new sap.ui.model.json.JSONModel();

    	    var url = 'http://127.0.0.1:8000/api/cursadas';
    	    $.get({
                   url : url,
                   headers: { "Accept": "application/json"},
   		           dataType: 'json',
                   success : function(data, textStatus, jqXHR) {
                	   oModelCursadas.setData(data);
                       console.log(oModelCursadas);   
                       oView.setModel(oModelCursadas, "cursadas");
                   },
                   error : function(jqXHR,textStatus,errorThrown) {
                	  console.log("Error en la conexion");
                   }
    	    });
    	}
    	
    }
);