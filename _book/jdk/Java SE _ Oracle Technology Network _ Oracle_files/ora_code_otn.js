/*!
######################################################
# ORA_CODE_OTN.JS
# OOTN RELEASE: v2.6.0
# BUILD DATE: 14-December-2017
######################################################
*/
function s_setAccount(){var sa=["oracledevall","otn",s_setOraLangCountryGLOBAL("oracle.com/technetwork")];if(location.host.indexOf("-stage")!=-1||location.host.indexOf("-dev")!=-1||location.host.indexOf("webstandards-us")!=-1||location.host.indexOf("localhost")!=-1){sa[0]="oracledevotn1,oracledevall";}else{sa[0]="oracleotnlive,oracleglobal";}return sa;}function s_prePlugins(s){var oraVersionMosaic=":otn:2.6";oraVersion=(oraVersion.indexOf(":otn")==-1)?oraVersion+oraVersionMosaic:oraVersion.substr(0,oraVersion.indexOf(":otn"))+oraVersionMosaic;var page_name=(document.getElementsByName("Keywords")[0])?(document.getElementsByName("Keywords")[0].getAttribute("content")):"";if(page_name.indexOf("404")!=-1||page_name.indexOf("Error:EP")!=-1||page_name.indexOf("Error:IP")!=-1){s.pageName=s_account[1]+":"+s_account[2]+":/404-error-page/404-error-page-3612544.html";}}
/*! postPlugins plus site functions */
function s_postPlugins(s){if(s.pageName.indexOf("404-error-page")!=-1){s.eVar52=location.protocol+"//"+location.host+"/technetwork/en/404-error-page/404-error-page-3612544.html";s.eVar24=(document.referrer)?(document.referrer):s.eVar24;}}function oraSetInternalFilters(){s.linkInternalFilters="javascript:,.oracle.";if(location.href.indexOf(":8888")||location.href.indexOf("webstandards-us")){s.linkInternalFilters="javascript:,localhost,webstandards-us.oracle.com,.oracle.";}}function gotjQ(){try{var jq=(jQuery)?true:false;}catch(err){var jq=false;}return jq;}if(gotjQ()){jQuery(document).ready(function($){$("li.cn02menu").each(function(){if(!$(this).find(".cn02w1").attr("data-lbl")){$(this).find(".cn02w1").attr("data-lbl",$(this).find(".cn02w1").attr("id").toLowerCase().split("cn02-")[1]);}$(this).find("h3 a").attr("data-lbl",$(this).find(".cn02w1").attr("data-lbl"));});$("div.c25w3").each(function(){if(!$(this).parent().attr("data-lbl")){if($(this).find("h3 a").get(0)&&!$(this).find("h3 a").attr("data-lbl")){$(this).parent().attr("data-lbl",$(this).find("h3 a").text().toLowerCase().replace(/ /g,"-").replace(/'/g,""));$(this).find("h3 a").attr("data-trackas","c25w2");}else{if($(this).find("h3 a").get(0)&&$(this).find("h3 a").attr("data-lbl")){$(this).parent().attr("data-lbl",$(this).find("h3 a").attr("data-lbl"));$(this).find("h3 a").attr("data-trackas","c25w2");}else{$(this).parent().attr("data-lbl",$(this).find("h3").text().toLowerCase().replace(/ /g,"-").replace(/'/g,""));}}}$(this).children("a").each(function(){if($(this).attr("data-lbl")){$(this).attr("data-trackas","c25w2");}});});$("form.u01searchform").bind("submit",function(e){if(s_setAccount()[1]){navTrack(s_setAccount()[1],s_setAccount()[2],"header","search");}});$("form.u02searchform").bind("submit",function(e){var searchVal=$(this).find("#txtSearch").val();if(s_setAccount()[1]){navTrack(s_setAccount()[1],s_setAccount()[2],"header","search:"+searchVal);}});var trackas=[["div.c01w4","c01"],["div.ct02","ct02"],["div.c04","c04"],["div.c40","c40"],["div.c19w1","social"],["div.c37w3","c37w3"],["div.c26w5","c26"],["a.c26link",false,"notrack"],["li.cn02menu","cn02menu"],["li.cn02more","cn02moremenu"],["div.c25w1","c25w1"],["div.c25w2","c25w2"],["div.c38","c38"],["div.cw01","cw01"],["div.cw01 a.cw01steplink","cw01","resetpage"],["div.cw02","cw02"],["div.cw03","cw03"],["div.c49","c49"],["div.w06","w06"],["div.c22","c22"],["div.c48","c48"]];$(document).on("click","div.u02modw1 a",function(e){var btxt=$(this).attr("data-lbl");navTrack(sn,ln,"header:call:popup",btxt);});$(document).on("click","li.u02menu-hasm a",function(e){if(!$(this).attr("data-lbl")){var btxt=$(this).siblings(".u02menu-l2").attr("data-lbl");btxt=(btxt!="undefined"||btxt!="")?btxt:"";$(this).attr("data-lbl",btxt);}});$(document).on("click","a.u02blink",function(e){if(!$(this).attr("data-lbl")){$(this).attr("data-lbl","back");}});$('a[rel*="lightbox"],a[rel*="opop"]').each(function(){var type=($(this).attr("rel")=="opop")?"popup":"lightbox";if(!$(this).attr("data-lbl")&&$(this).attr("title")){$(this).attr("data-lbl",type+"-open-"+$(this).attr("title").toLowerCase().replace(/ /g,"-"));}else{if(!$(this).attr("data-lbl")&&$(this).text()){$(this).attr("data-lbl",type+"-open-"+$(this).text().toLowerCase().replace(/ /g,"-"));}else{if($(this).attr("data-lbl")){$(this).attr("data-lbl",$(this).attr("data-lbl")+"-"+type+"-open");}else{$(this).attr("data-lbl",type+"-open");}}}if(!$(this).attr("data-trackas")){$(this).attr("data-trackas",type);}});var sn=s_setAccount()[1];var ln=s_setAccount()[2];for(var i=0;i<trackas.length;i++){if(!$(trackas[i][0]).attr("data-trackas")&&trackas[i][1]){$(trackas[i][0]).attr("data-trackas",trackas[i][1]);}if(trackas[i][2]&&trackas[i][2]=="resetpage"){$(trackas[i][0]).attr("data-pgreset","true");}else{if(trackas[i][2]&&!$(trackas[i][0]).attr("data-lbl")){$(trackas[i][0]).attr("data-lbl",trackas[i][2]);}}}$(document).on("click","*[data-trackas] a,a[data-trackas]",function(e){var lbl="";var o=$(this);if(o.attr("data-lbl")!="notrack"){if(o.attr("data-lbl")){lbl=o.attr("data-lbl");}else{if(o.attr("name")){lbl=o.attr("name");}else{if(o.attr("title")){lbl=o.attr("title");}else{if(o.find("img")&&o.find("img").first().attr("title")){lbl=o.find("img").first().attr("title");}else{if(o.find("img")&&o.find("img").first().attr("alt")){lbl=o.find("img").first().attr("alt");}else{if(o.find("img").first().attr("src")){lbl=o.find("img").first().attr("src");lbl=lbl.split("/")[(lbl.split("/").length-1)];}else{lbl=o.text();}}}}}}var d=o.closest("[data-trackas]").attr("data-trackas");d=(d=="hnav"||d=="header"||d=="menu")?":":"-";if(!o.attr("data-trackas")){while(o.parent()){o=o.parent();if(o.attr("data-lbl")){lbl=o.attr("data-lbl")+d+lbl;}if(o.attr("data-trackas")){break;}}}lbl=lbl.toLowerCase().replace(/ /g,"-").replace(/-+/g,"-");var sec=(o.attr("data-trackas"))?o.attr("data-trackas"):o.closest("*[data-trackas]").attr("data-trackas");if(location.href.indexOf(":8888")!=-1){console.log(sn+":"+ln+":"+sec+":"+lbl);}navTrack(sn,ln,sec,lbl);if(o.attr("data-pgreset")=="true"){s.clearVars();if(o.attr("href").indexOf("#")==0&&s.pageName){if(!$("body").attr("data-pgname")){$("body").attr("data-pgname",s.pageName);var pn=s.pageName;}else{var pn=$("body").attr("data-pgname");}s.pageName=pn+"/"+o.attr("href").split("#")[1];}else{s_orapageName(o.attr("href"));}oraSetInternalFilters();s.linkInternalFilters=s.linkInternalFilters+","+o.attr("href");var s_code=s.t();if(s_code){document.write(s_code);}oraSetInternalFilters();}}});});}