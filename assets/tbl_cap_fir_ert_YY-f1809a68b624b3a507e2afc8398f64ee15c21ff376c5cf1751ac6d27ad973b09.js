var tbl_cap_fir_ert_YY={};!function(){function a(a){function t(){new google.visualization.ChartWrapper({chartType:"Table",containerId:"tbl_cap_fir_ert_YY",dataTable:r,options:{width:550,height:480,sort:"enable",sortColumn:0,sortAscending:!1},view:{columns:[0,1,2,3,4]}}).draw()}var r,o=d3.format(".2n"),i=new google.visualization.NumberFormat({fractionDigits:0,groupingSymbol:""}),e=new google.visualization.NumberFormat({fractionDigits:2,groupingSymbol:""});d3.text((a||"")+"/graphics/en-route_atfm_delay_fab/monthly_ert_dly_fab_fir.csv",function(a){var t=d3.csv.parseRows(a,function(a,t){if(0===t)return["Year","FAB","Flights","Delay [min.]","Avg. per Flight"];a[0]=+a[0],a[2]=+a[2],a[3]=+a[3];var r=0==a[2]?0:a[3]/a[2];return[a[0],a[1],a[2],a[3],o(r)]});r=new google.visualization.arrayToDataTable(t),i.format(r,0),e.format(r,4)}),google.setOnLoadCallback(t)}tbl_cap_fir_ert_YY.chart=a}();