!function(){function a(){var a=new google.visualization.ChartWrapper({chartType:"Table",containerId:"tbl_cap_fir_ert_YY",dataTable:t,options:{width:550,height:240,sort:"enable",sortColumn:0,sortAscending:!1},view:{columns:[0,1,2,3,4]}});a.draw()}var t,o=d3.format(".2n"),r=new google.visualization.NumberFormat({fractionDigits:0,groupingSymbol:""}),i=new google.visualization.NumberFormat({fractionDigits:2,groupingSymbol:""});d3.text("/data/set/ert_flt/En-Route_Traffic_FAB_FIR.csv",function(a){var e=d3.csv.parseRows(a,function(a,t){if(0===t)return["Year","FAB","Flights","Delay [min.]","Avg. per Flight"];a[0]=+a[0],a[2]=+a[2],a[3]=+a[3];var r=0==a[2]?0:a[3]/a[2];return[a[0],a[1],a[2],a[3],o(r)]});t=new google.visualization.arrayToDataTable(e),r.format(t,0),i.format(t,4)}),google.setOnLoadCallback(a)}();