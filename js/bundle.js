"use strict";function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}$(document).ready(function(){$(".mainPanel").on("click","#added",function(t){t.preventDefault();var e=$("#sample_table tr"),n=$("#tableTarget >tbody >tr").length+1,a=null;(a=e.clone(!0)).attr("id","record-"+n),a.find("#delete").attr("data-id",n),a.appendTo("#target_body"),a.find(".sn").html(n)}),$(".panelBelanja tbody").on("click","a#delete",function(t){if(t.preventDefault(),1!=confirm("apa anda yakin akan menghapus ? "))return!1;var e=$(this).attr("data-id");return console.log("ini hapus nilai data id = "+e),$("#record-"+e).remove(),$("#target_body tr").each(function(t){$(this).find("span.sn").html(t+1)}),!0}),$(".buttonController").on("click","#clearAll",function(){return console.log("hapus semua"),$(".panelBelanja #tableTarget tbody").find("tr").remove(),!0}),$(".panelBelanja tbody").on("change keyup paste","input",function(t){t.preventDefault();var e=$(this).closest("tr"),n=e.find(".QTY").val(),a=e.find(".Price").val()*n;e.find(".subTotal").val(a);var o=0;$(".item-jual .subTotal").each(function(){var t=$(this).val();return 0<(o+=parseInt(t))&&(console.log("valSubTotals = "+o),$(".endPayment tr").find("#endSubTotal").html("$"+o),!0)})}),$(".panelIdentitas form").on("change keyup","input[type='radio']",function(t){var e=$("form input[type='radio']:checked").val();"member"==e?$("#Discount").html("10%"):"nonmember"==e?$("#Discount").html("0%"):$("#Discount").html("Choice Status")});var o=0;$(".panelBelanja tbody, .panelIdentitas form").on("change keyup paste","td > input.auto_kali, input[type='radio']",function(t){t.preventDefault();var e=$("form input[type='radio']:checked"),n=e.val(),a=$(".endPayment tr").find("#endSubTotal").text().slice(1);a=parseInt(a),0<e.length?"member"==n?(o=a-.1*a,console.log("member = "+o)):"nonmember"==n?(o=a-0*a,console.log("nonmember = "+o)):$("#Discount").html("Error Total"):(console.log("error your  status"),$(".endPayment tr #Total").html("need new input")),$(".endPayment tr").find("#Total").html("$"+parseInt(o))}),$(".endPayment tbody").on("keyup change paste","td > input#paidInput",function(t){t.preventDefault();var e=$("input#paidInput").val(),n=$("#Total").text().slice(1),a=e-(n=parseInt(n));$(".endPayment tr").find("#Due").html("$"+a)}),$(".endPayment tbody").on("click","a#dataJson",function(){var t;console.log("ini data json");var e=$(".endPayment td#endSubTotal").text(),n=$(".endPayment td#Discount").text(),a=$(".endPayment td#Total").text(),o=$(".endPayment input#paidInput").val(),l=$(".endPayment td#Due").text(),i=(_defineProperty(t={Total:e,Discount:n},"Total",a),_defineProperty(t,"Paid",o),_defineProperty(t,"Due",l),_defineProperty(t,"detailsShopp",[]),t);$(".item-jual").each(function(){var t=$(this).find(".detailPenjualan-1").val(),e=$(this).find(".detailPenjualan-2").val(),n=$(this).find(".detailPenjualan-3").val(),a=$(this).find(".detailPenjualan-4").val();i.detailsShopp.push({Item:t,QTY:e,Price:n,SubTotal:a})});var r="\n"+JSON.stringify(i,"\t",2),d=window.open();d.document.open("../data_Json.html","_blank"),d.document.write("<html><body><pre>"+r+"</pre></body></html>"),d.document.close()})});