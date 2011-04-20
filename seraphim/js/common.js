/*	With Jquery 1.4.2
	@ author Panda[N]
	Url:http://www.laozhuhome.com
*/
/*首页图片切换*/
function AutoSlide(container){
	var len=container.find("li").length;
	var w=container.find("li").width()
	var i=0;
	var time=setInterval(function(){
		i++;
		if(i==len){i=0}
		Move(i)
	},5000)
	function Move(i){
		container.animate({"margin-left":-w*i},1000)
	}
}
/*内页左侧下部导航*/
function NavToggle(obj){
	obj.find(".toggle a").css("opacity","0")
	obj.find("li:first .list").hide();
	obj.find("li:last .list").css("border","none");
	obj.find(".list").click(function(){
		$(this).hide().parent().find(".show").slideDown(400).parent().siblings().find(".show").slideUp(600).end().find(".list").show();
		return false;
	})
	obj.find(".toggle").click(function(){
		//$(this).parent().hide().parents("li").find(".list").slideDown()
		return false;
	})
}
/*简单气泡提示*/
function SimpleTips(){
	$("span.tips").css("opacity","0.85")
	$(".nav li").hover(function(){
		$(this).find("span.tips").css("top",-$(this).find("span.tips").height()-2)
		$(this).find("span.tips").toggle()
	})
}
/*内页图片切换效果*/
function imgToggle(outer,ctrl,info){
	
	ctrl.click(function(){
		var i=ctrl.index(this)
		outer.find("li").eq(i).fadeIn().siblings().fadeOut();
		info.eq(i).addClass("on").siblings().removeClass("on")
		return false;
	})
}
function Popbox(box,closed){
	var bw=box.width();
	var bh=box.height();
	var l=$(window).width()/2-bw/2
	var t=$(window).scrollTop()+$(window).height()/2-bh/2
	box.show().css({left:l,top:t})
	closed.click(function(){
		box.hide()
		return false;
	})
}
function Autoscroll(obj){
	var i=0;
	var data=obj.html()
	obj.append(data)
	var timer=setInterval(function(){
		i++;
		obj.find(".info").eq(0).css("margin-top",-i)
		if(i==60){
			obj.find(".info").eq(0).css("margin-top",0)
			obj.append(obj.find(".info:lt(3)"))
			i=0;
		}
	},100)
	
}
function AutoscrollB(obj){
	var i=0;
	var data=obj.html()
	obj.append(data)
	var timer=setInterval(function(){
		i++;
		obj.find(".scrollC").eq(0).css("margin-top",-i)
		if(i==obj.find(".scrollC").height()){
			obj.find(".scrollC").eq(0).css("margin-top",0)
			obj.append(obj.find(".scrollC:first"))
			i=0;
		}
	},100)
	
}
$(function(){
	AutoSlide($("ol"));
	Autoscroll($("#footer ._newsinfoA"))
	Autoscroll($("#footer ._newsinfoB .imginfo"))
	AutoscrollB($("._newsinfoC .imginfo"))
	NavToggle($(".subside"))
	SimpleTips()
	imgToggle($(".subproimg"),$(".subctrlimg li"),$(".sunproinfo li"))
	$(".showA").find("a").click(function(){
		var i=$(this).attr("class").charAt(1)
		Popbox($('.p'+i),$('.closea'+i))
		return false;
	})
})