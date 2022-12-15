
    function createTableHeader(arrayOfHeaders){	
	
		// creates a <table> element and a <tbody> element
		const tbl = document.createElement("table");
		const tblBody = document.createElement("tbody");
		
		// creates a table row
		const row = document.createElement("tr");
		
		for (let j = 0; j < arrayOfHeaders.length; j++) 
		{
		
			const cell = document.createElement("td");
			
			cellText = document.createTextNode(arrayOfHeaders[j]);
			
			cell.appendChild(cellText);
			
			cell.style.textAlign = "center";
			
			row.appendChild(cell);
			
			// add the row to the end of the table body
			tblBody.appendChild(row);
		}
		
		
		
		// put the <tbody> in the <table>
		tbl.appendChild(tblBody);
		
		// appends <table> into <body>
		document.body.appendChild(tbl);
		
		// sets the border attribute of tbl to '2'
		tbl.setAttribute("border", "2");
	}
		
	