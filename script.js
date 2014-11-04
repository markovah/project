window.onload = init;

window.setInterval(putToPage, 10000);

function init(){
	getCSV() ;	
}

function getCSV() {
var csv = "|hour|browsers|Visits|Page views|\n\
|00|30938|31937|111379|\n\
|01|14783|15923|51524|\n\
|02|8386|9091|30181|\n\
|03|6284|6748|22556|\n\
|04|7103|7461|24912|\n\
|05|14390|14761|49015|\n\
|06|32723|33338|111373|\n\
|07|57001|58133|189120|\n\
|08|73789|75757|248303|\n\
|09|81920|84570|278652|\n\
|10|80706|83708|301120|\n\
|11|63631|65061|225315|\n\
|12|0|0|0|\n\
|13|0|0|0|\n\
|14|0|0|0|\n\
|15|0|0|0|\n\
|16|0|0|0|\n\
,|17|0|0|0|\n\
|18|0|0|0|\n\
|19|0|0|0|\n\
|20|0|0|0|\n\
|21|0|0|0|\n\
|22|0|0|0|\n\
|23|0|0|0|";
    putToPage(csv) ;
}

function putToPage(csv) {
    var rows = csv.split(/\r\n|\n/);
    var table = document.createElement('table');

    for ( var i = 0; i <rows.length; i++ ) {
        var row = document.createElement('tr');
        var tds = rows[i].split('|');
        for ( var j = 1; j < tds.length-1; j++ ) {
           row.appendChild(document.createElement('td'));
		   row.cells[j-1].appendChild(document.createTextNode(tds[j] ));
        }
        table.appendChild(row);
    }
    var output = document.getElementById('output');
    var elements = document.getElementsByTagName('table');
    for (var i = 0; i < elements.length; i++) {
        output.removeChild(elements[i]);
}
    output.appendChild(table);
}