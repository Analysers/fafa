<script type="text/javascript">
		function loadData(id) {
			var form = self.parent.document.forms['reportGeneralForm'];
			var paramString = 'checkedRows,checkedContratorNo,search,searchResultsCheckboxSender';
			var paramList = [];
			if(paramString != ''){
				paramList = paramString.split(',');
			}
			for (var i=0; i<favouriteListTable.getRowsNum(); i++){
            	var rowId = favouriteListTable.cellByIndex(i,0).getValue();
            	if(id == rowId){
            		var data = JSON.parse(favouriteListTable.cellByIndex(i,5).getValue());
            		for (var index in data) { 
							var entity = data[index];
							for (var fIndex in form.elements) { 
								var fValue = form.elements[fIndex];
								if(fValue && fValue.name && fValue.name == entity.name && (paramList.length == 0 || contains(paramList, fValue.name))){
									if(fValue.type=='text' || fValue.type=='hidden'){
										fValue.value = entity.value;
										if(fValue.onchange) {
											fValue.onchange();
										}
									}else if(fValue.type=='checkbox'){
										fValue.disabled = entity.value;
									}
								}
							}
						}
            	}
            }
            self.parent.executeAfterLoad();
            parent.dhxWins.window("w1").close();
		}
		
		function saveData(id){
			var form = self.parent.document.forms['reportGeneralForm'];
			var favouriteDataForm = document.forms['favouriteDataForm'];
			var paramString = 'checkedRows,checkedContratorNo,search,searchResultsCheckboxSender';
			var paramList = [];
			if(paramString != ''){
				paramList = paramString.split(',');
			}
			var jsonObj = []; //declare array
			for (var fIndex in form.elements) { 
				var fValue = form.elements[fIndex];
				if(fValue && fValue.name && (paramList.length == 0 || contains(paramList, fValue.name))){
					if(fValue.type=='text' || fValue.type=='hidden'){
						jsonObj.push({name: fValue.name, value: fValue.value});
					}else if(fValue.type=='checkbox'){
						jsonObj.push({name: fValue.name, value: fValue.disabled});
					}
				}
			}
			
			for (var i=0; i<favouriteListTable.getRowsNum(); i++){
            	var rowId = favouriteListTable.cellByIndex(i,0).getValue();
            	if(id == rowId){
            		favouriteDataForm.name.value = favouriteListTable.cellByIndex(i,3).getValue();
            		favouriteDataForm.description.value = favouriteListTable.cellByIndex(i,4).getValue();
            	}
            }
            favouriteDataForm.actionId.value = 'store';
            favouriteDataForm.id.value = id;
            favouriteDataForm.favouriteData.value = JSON.stringify(jsonObj);
            favouriteDataForm.submit();
		}
		
		function deleteData(id){
			var favouriteDataForm = document.forms['favouriteDataForm'];
			if(confirm('Really remove this favourite setting?')){
				favouriteDataForm.actionId.value = 'delete';
	            favouriteDataForm.id.value = id;
	            favouriteDataForm.submit();
            }
		}

        function exportData(id) {
            var favouriteDataForm = document.forms['favouriteDataForm'];
            favouriteDataForm.actionId.value = 'export';
            favouriteDataForm.id.value = id;
            favouriteDataForm.submit();
        }

		function selectFile(id) {
			var favouriteDataForm = document.forms['favouriteDataForm'];
			favouriteDataForm.id.value = id;
			if (id != "") {
				for (var i=0; i<favouriteListTable.getRowsNum(); i++){
					var rowId = favouriteListTable.cellByIndex(i,0).getValue();
					if(id == rowId){
						favouriteDataForm.name.value = favouriteListTable.cellByIndex(i,3).getValue();
						favouriteDataForm.description.value = favouriteListTable.cellByIndex(i,4).getValue();
					}
				}
			} else {
				favouriteDataForm.name.value = "";
				favouriteDataForm.description.value = "";
			}
			document.getElementsByName("file")[0].click();
		}

        function importData() {
            var favouriteDataForm = document.forms['favouriteDataForm'];
            favouriteDataForm.actionId.value = 'import';
            favouriteDataForm.submit();
        }

        function hideExportColumn() {
			favouriteListTable.setColumnHidden(6, true);
		}

		function hideImportColumn() {
			favouriteListTable.setColumnHidden(7, true);
		}

		function hideColumns() {
			if (favouriteDataForm.srcTab.value != "sender" && favouriteDataForm.srcTab.value != "empfanger") {
				hideExportColumn();
				hideImportColumn();
			}
		}
		
		function green(img) {
			img.src='../pics/tick_green.png';
		}
		
		function gray(img) {
			img.src='../pics/tick_gray.png';
		}
		
		function contains(a, obj) {
		    var i = a.length;
		    while (i--) {
		       if (a[i] === obj) {
		           return true;
		       }
		    }
		    return false;
		}
	</script>
</body>
</html><!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script type="text/javascript">
		function loadData(id) {
			var form = self.parent.document.forms['reportGeneralForm'];
			var paramString = 'checkedRows,checkedContratorNo,search,searchResultsCheckboxSender';
			var paramList = [];
			if(paramString != ''){
				paramList = paramString.split(',');
			}
			for (var i=0; i<favouriteListTable.getRowsNum(); i++){
            	var rowId = favouriteListTable.cellByIndex(i,0).getValue();
            	if(id == rowId){
            		var data = JSON.parse(favouriteListTable.cellByIndex(i,5).getValue());
            		for (var index in data) { 
							var entity = data[index];
							for (var fIndex in form.elements) { 
								var fValue = form.elements[fIndex];
								if(fValue && fValue.name && fValue.name == entity.name && (paramList.length == 0 || contains(paramList, fValue.name))){
									if(fValue.type=='text' || fValue.type=='hidden'){
										fValue.value = entity.value;
										if(fValue.onchange) {
											fValue.onchange();
										}
									}else if(fValue.type=='checkbox'){
										fValue.disabled = entity.value;
									}
								}
							}
						}
            	}
            }
            self.parent.executeAfterLoad();
            parent.dhxWins.window("w1").close();
		}
		
		function saveData(id){
			var form = self.parent.document.forms['reportGeneralForm'];
			var favouriteDataForm = document.forms['favouriteDataForm'];
			var paramString = 'checkedRows,checkedContratorNo,search,searchResultsCheckboxSender';
			var paramList = [];
			if(paramString != ''){
				paramList = paramString.split(',');
			}
			var jsonObj = []; //declare array
			for (var fIndex in form.elements) { 
				var fValue = form.elements[fIndex];
				if(fValue && fValue.name && (paramList.length == 0 || contains(paramList, fValue.name))){
					if(fValue.type=='text' || fValue.type=='hidden'){
						jsonObj.push({name: fValue.name, value: fValue.value});
					}else if(fValue.type=='checkbox'){
						jsonObj.push({name: fValue.name, value: fValue.disabled});
					}
				}
			}
			
			for (var i=0; i<favouriteListTable.getRowsNum(); i++){
            	var rowId = favouriteListTable.cellByIndex(i,0).getValue();
            	if(id == rowId){
            		favouriteDataForm.name.value = favouriteListTable.cellByIndex(i,3).getValue();
            		favouriteDataForm.description.value = favouriteListTable.cellByIndex(i,4).getValue();
            	}
            }
            favouriteDataForm.actionId.value = 'store';
            favouriteDataForm.id.value = id;
            favouriteDataForm.favouriteData.value = JSON.stringify(jsonObj);
            favouriteDataForm.submit();
		}
		
		function deleteData(id){
			var favouriteDataForm = document.forms['favouriteDataForm'];
			if(confirm('Really remove this favourite setting?')){
				favouriteDataForm.actionId.value = 'delete';
	            favouriteDataForm.id.value = id;
	            favouriteDataForm.submit();
            }
		}

        function exportData(id) {
            var favouriteDataForm = document.forms['favouriteDataForm'];
            favouriteDataForm.actionId.value = 'export';
            favouriteDataForm.id.value = id;
            favouriteDataForm.submit();
        }

		function selectFile(id) {
			var favouriteDataForm = document.forms['favouriteDataForm'];
			favouriteDataForm.id.value = id;
			if (id != "") {
				for (var i=0; i<favouriteListTable.getRowsNum(); i++){
					var rowId = favouriteListTable.cellByIndex(i,0).getValue();
					if(id == rowId){
						favouriteDataForm.name.value = favouriteListTable.cellByIndex(i,3).getValue();
						favouriteDataForm.description.value = favouriteListTable.cellByIndex(i,4).getValue();
					}
				}
			} else {
				favouriteDataForm.name.value = "";
				favouriteDataForm.description.value = "";
			}
			document.getElementsByName("file")[0].click();
		}

        function importData() {
            var favouriteDataForm = document.forms['favouriteDataForm'];
            favouriteDataForm.actionId.value = 'import';
            favouriteDataForm.submit();
        }

        function hideExportColumn() {
			favouriteListTable.setColumnHidden(6, true);
		}

		function hideImportColumn() {
			favouriteListTable.setColumnHidden(7, true);
		}

		function hideColumns() {
			if (favouriteDataForm.srcTab.value != "sender" && favouriteDataForm.srcTab.value != "empfanger") {
				hideExportColumn();
				hideImportColumn();
			}
		}
		
		function green(img) {
			img.src='../pics/tick_green.png';
		}
		
		function gray(img) {
			img.src='../pics/tick_gray.png';
		}
		
		function contains(a, obj) {
		    var i = a.length;
		    while (i--) {
		       if (a[i] === obj) {
		           return true;
		       }
		    }
		    return false;
		}
	</script>