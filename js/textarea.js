  var textArea=$("#contact textarea");
  textArea.wrap("<div class='textarea-wrapper' />");
  var textAreaWrapper=textArea.parent(".textarea-wrapper");
  textAreaWrapper.mCustomScrollbar({scrollInertia:0});
  var hiddenDiv=$(document.createElement("div")),
	content=null;
  hiddenDiv.addClass("hiddendiv");
  $("body").prepend(hiddenDiv);
  textArea.bind("keyup",function(e){
	content=$(this).val();
	var clength=content.length;
	var cursorPosition=textArea.getCursorPosition();
	content="<span>"+content.substr(0,cursorPosition)+"</span>"+content.substr(cursorPosition,content.length);
	content=content.replace(/\n/g,"<br />");
	hiddenDiv.html(content+"<br />");
	$(this).css("height",hiddenDiv.height());
	textAreaWrapper.mCustomScrollbar("update");
	var hiddenDivSpan=hiddenDiv.children("span"),
	  hiddenDivSpanOffset=parseInt(hiddenDivSpan.css("line-height"))-parseInt(hiddenDivSpan.css("font-size")),
	  viewLimitBottom=(parseInt(hiddenDiv.css("min-height")))-hiddenDivSpanOffset,
	  viewLimitTop=hiddenDivSpanOffset,
	  viewRatio=Math.round(hiddenDivSpan.height()+textAreaWrapper.find(".mCSB_container").position().top);
	if(viewRatio>viewLimitBottom || viewRatio<viewLimitTop){
	  if((hiddenDivSpan.height()-hiddenDivSpanOffset)>0){
		textAreaWrapper.mCustomScrollbar("scrollTo",hiddenDivSpan.height()-hiddenDivSpanOffset);
	  }else{
		textAreaWrapper.mCustomScrollbar("scrollTo","top");
	  }
	}
  });
  $.fn.getCursorPosition=function(){
	var el=$(this).get(0),
	  pos=0;
	if("selectionStart" in el){
	  pos=el.selectionStart;
	}else if("selection" in document){
	  el.focus();
	  var sel=document.selection.createRange(),
		selLength=document.selection.createRange().text.length;
	  sel.moveStart("character",-el.value.length);
	  pos=sel.text.length-selLength;
	}
	return pos;
  }
  $("#contact").mCustomScrollbar({
	scrollInertia:400, 
	mouseWheel:8, 
	scrollButtons:{
	  enable:true
	},
	});
