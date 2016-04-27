!function(){"use strict";function e(e){var t=["YEAR","MONTH_NUM","MONTH_MON","ENTRY_DATE","ENTITY_NAME","ENTITY_TYPE","TYPE_MODEL","DIST_FLOWN_KM","DIST_DIRECT_KM","DIST_ACHIEVED_KM"];json2csv({data:e,fields:t},function(e,t){e&&(T.classed(),T.log(e));var n=new Blob([t],{type:"text/csv"});saveAs(n,"horizontal_flight_efficiency.csv")})}function t(e){var t=d3.time.format("%d-%b-%y");return e.forEach(function(e){e.YEAR=+e.YEAR,e.MONTH_NUM=+e.MONTH_NUM,e.date=t.parse(e.ENTRY_DATE),e.ENTITY_NAME=e.ENTITY_NAME?e.ENTITY_NAME.trim():"",e.ENTITY_NAME=e.ENTITY_NAME.length?e.ENTITY_NAME:"ZZZ",e.ENTITY_TYPE=e.ENTITY_TYPE?e.ENTITY_TYPE.trim():"",e.ENTITY_TYPE=e.ENTITY_TYPE.length?e.ENTITY_TYPE:"ZZZ",e.DIST_FLOWN_KM=e.DIST_FLOWN_KM?+e.DIST_FLOWN_KM:0,e.DIST_DIRECT_KM=e.DIST_DIRECT_KM?+e.DIST_DIRECT_KM:0,e.DIST_ACHIEVED_KM=e.DIST_ACHIEVED_KM?+e.DIST_ACHIEVED_KM:0}),e}function n(t){var n,o=crossfilter(t),r=o.groupAll(),E=o.dimension(function(e){return e.date}),i=o.dimension(function(e){return e.YEAR}),a=i.group(Math.floor),_=o.dimension(function(e){return e.ENTITY_NAME}),d=_.group(),s=o.dimension(function(e){return e.TYPE_MODEL}),u=s.group(),c=d3.format("02d");buildFilter("#hfe-year","All Years",i,a),buildFilter("#hfe-entity","All Entities",_,d),buildFilter("#hfe-model","All Profile Models",s,u),l.stop(),T.classed("hidden",!0),n=dc.dataTable("#hfe-data-table").dimension(E).group(function(e){return e.date.getFullYear()+"/"+c(e.date.getMonth()+1)}).size(12).columns([{label:"YYYY/MM",format:function(e){return e.date.getFullYear()+"/"+c(e.date.getMonth()+1)}},{label:"Date",format:function(e){return e.ENTRY_DATE}},{label:"Entity",format:function(e){return e.ENTITY_NAME}},"ENTITY_TYPE","TYPE_MODEL","DIST_FLOWN_KM","DIST_DIRECT_KM","DIST_ACHIEVED_KM"]).sortBy(function(e){return e.date}).order(d3.ascending),dc.dataCount(".dc-data-count").dimension(o).group(r).html({some:"<strong>%filter-count</strong> selected out of <strong>%total-count</strong> records (only a max of <em>"+n.size()+"</em> shown below.)",all:"All <strong>%total-count</strong> records selected (only a max of <em>"+n.size()+"</em> shown below.)"}),dc.renderAll(),$(document).ready(function(){$("#hfe-download").click(function(){e(i.top(1/0))})})}function o(e,o){e?(T.text("Error:"+e),l.stop()):(T.classed("hidden",!0),n(t(o)))}var r="hfe.json",T=d3.select("#errorfield"),E=document.getElementById("hfe-data-table"),l=(new Spinner).spin(E);queue().defer(d3.csv,r).await(o)}();