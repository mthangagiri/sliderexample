// JavaScript Document
var filtercontainerheight = 615;
var cnt = 2;
$(document).ready(function(e) {
	sliderflag = 0;
    //alert($(window).height()+"   "+$(window).width());
	$(".cross-container").click(function() {
		
			if(sliderflag == 1) {
				var obj = this;
			$("#main-slider1").animate({left: '-150px'}, function() { $("#main-slider1").hide();showslider(obj); });
							
			}
			
			else if(sliderflag == 2) {
				var obj =this;
				$("#main-slider2").animate({left: '-150px'}, function() {  $("#main-slider2").hide();showslider(obj); });
				
			}
			
			else {
				showslider(this);
			}
			
			function showslider(obj) {
				/*console.log(obj);
				
				console.log($(obj));
				
				
				console.log($(obj).parent());
				console.log($(obj).parent().parent());*/
				var temp = $(obj).parent().parent().attr("id");
				var temp1 = "main-" + temp;
				//console.log(temp1);
				if(temp.indexOf("1")!=-1) {
					sliderflag = 1;	
				}
			
				else {
					sliderflag = 2;
				}
				$("#"+temp1).show();
				//$("#"+temp1).animate({left: '220px'}, 500, function() {$("#"+temp1).animate({left:'200px'})});
				$("#"+temp1).animate({left: '200px'}, function(){jerk();} );
				function jerk() {
					$("#"+temp1).animate({left:'230px'}, function(){ $("#"+temp1).animate({left:'200px'})});
				}
			}
								
				
	});
	
	$(".cancel-button").click(function() {
		var temp = $(this).parent().parent().parent().attr("id");
		//console.log(temp);
		//$("#"+temp).hide();
		 
		$("#"+temp).animate({left: '-150px'}, function() {$("#"+temp).hide();});
		
		sliderflag = 0;
	})
	
/*	$(".cancel-button").click(function() {
		$("#main-slider1").animate({left: '-150px'});
		$("#main-slider1").hide();
		sliderflag = 0;
	})*/
	
	$(".add-cross-container").click(function() {	
		addfilter();

	})
	
	$(".color-div").click(function() {
		var cl = $(this).css("background-color");
		$("#color-text").css("background-color",cl);
	})
});

function addfilter() {
	if($("#slider1-filter-container").height()==615) {
		$("#slider1-filter-container").addClass("height615").removeClass("autoheight").addClass("scroll");
		filtercontainerheight += 45;
	}
		var line1 = "<div class=\"filter m15\">";
		var selectnum =  "<div class=\"select-num floatL\"><div id=\"select-num-content\" class=\"floatL\"><p class=\"mL5\">"+cnt+"</p></div><div class=\"down-arrow floatL\"></div></div>";
		var selectrole = 	"<div class=\"select-role floatL mL20\"><div id=\"select-role-content\" class=\"floatL\"></div><div class=\"down-arrow floatL\"></div></div>";
       var selectstats = "<div class=\"select-stats floatL mL20\"><div id=\"select-stats-content\" class=\"floatL\"></div><div class=\"down-arrow floatL\"></div></div>";
       var addfilter = "<div class=\"add-filter mL10 mt5 floatL\"><div class=\"add-cross-container\" onclick=\"addfilter()\"><div class=\"cross mL5\"></div></div><div class=\"minus mT8 mL1\" onclick=\"removefilter(this)\"></div></div>";
       var lastline = "</div>";			
		//$(".filter").clone().appendTo("#slider1-filter-container");
		var lastele = $(".filter").last();
		$(lastele).find(".add-filter .add-cross-container").addClass("dN");
		$("#slider1-filter-container").append(line1+selectnum+selectrole+selectstats+addfilter+lastline);
		$("#slider1-filter-container").scrollTop(filtercontainerheight-45);
		cnt+=1;
		if($(".filter").length == 2) {
			var firstele = $(".filter").first();
			$(firstele).find(".add-filter .minus").removeClass("dN");
		}
		
}

function removefilter(obj) {
	
	$(obj).parent().parent().remove();
	var lastele = $(".filter").last();
	$(lastele).find(".add-filter .add-cross-container").removeClass("dN");
	
	if($(".filter").length == 1) {
			var firstele = $(".filter").first();
			$(firstele).find(".add-filter .minus").addClass("dN");
		}
	
	if(filtercontainerheight>615) {
			filtercontainerheight -= 45;
	}
	if ( filtercontainerheight == 615 && $("#slider1-filter-container").height()==615 ) {
		$("#slider1-filter-container").removeClass("height615").addClass("autoheight").removeClass("scroll");
	}
}

function keypress(obj) {
	$("#color-text").removeClass("dN").addClass("dIB");
	$("#preview").removeClass("dN");
	$("#color-text").text(($(obj).val()));
	if($("#color-text").text().length == 0) {
		$("#color-text").removeClass("dIB").addClass("dN");
		$("#preview").addClass("dN");
	}
	reposition();
}

function reposition() {
	$("#color-text").css({
		left: ($("#color-text-container").width() - $("#color-text").width())/2 - 10
		});
}