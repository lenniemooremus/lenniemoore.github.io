$(window).load(function() {
		
		
	    $customScrollBox=$("#customScrollBox");
	    $customScrollBox_container=$("#customScrollBox .container");
	    $customScrollBox_content=$("#customScrollBox .content");
	    $dragger_container=$("#dragger_container");
	    $dragger=$("#dragger");
		
		$customScrollBox1=$("#customScrollBox1");
	    $customScrollBox_container1=$("#customScrollBox1 .container");
	    $customScrollBox_content1=$("#customScrollBox1 .content");
	    $dragger_container1=$("#dragger_container1");
	    $dragger1=$("#dragger1");
	 
	    visibleHeight=$customScrollBox.height();
	    if($customScrollBox_container.height()>visibleHeight){ //enable scrollbar if content is long
	        $customScrollBox.css("overflow", "hidden");
	        $dragger_container.css("display", "block");
	        totalContent=$customScrollBox_content.height();
	        minDraggerHeight=$dragger.height();
	        draggerContainerHeight=$dragger_container.height();
	        ad$DraggerHeight=totalContent-((totalContent-visibleHeight)*1.3); //ad$ust dragger height analogous to content
	        if(ad$DraggerHeight>minDraggerHeight){ //minimum dragger height
	            $dragger.css("height",ad$DraggerHeight+"px").css("line-height",ad$DraggerHeight+"px");
	        } else {
	            $dragger.css("height",minDraggerHeight+"px").css("line-height",minDraggerHeight+"px");
	        }
	        if(ad$DraggerHeight<draggerContainerHeight){ //maximum dragger height
	            $dragger.css("height",ad$DraggerHeight+"px").css("line-height",ad$DraggerHeight+"px");
	        } else {
	            $dragger.css("height",draggerContainerHeight-10+"px").css("line-height",draggerContainerHeight-10+"px");
	        }
	        animSpeed=400; //animation speed


	        easeType="easeOutCirc"; //easing type

	        bottomSpace=1.05; //bottom scrolling space
	        targY=0;
	        draggerHeight=$dragger.height();
	        $dragger.draggable({
	            axis: "y",
	            containment: "parent",
	            drag: function(event, ui) {
	                Scroll();
	            },
	            stop: function(event, ui) {
	                DraggerOut();
	            }
	        });
	 
	        //scrollbar click
	        $dragger_container.click(function(e) {
	            $this=$(this);
	            $this.css("background-color","#555");
	            var mouseCoord=(e.pageY - $this.offset().top);
	            var targetPos=mouseCoord+$dragger.height();
	            if(targetPos<$dragger_container.height()){
	                $dragger.css("top",mouseCoord);
	                Scroll();
	            } else {
	                $dragger.css("top",$dragger_container.height()-$dragger.height());
	                Scroll();
	            }
	        });
	 
	        //mousewheel
	        $(function($) {
	            $customScrollBox.bind("mousewheel", function(event, delta) {
	                vel = Math.abs(delta*10);
	                $dragger.css("top", $dragger.position().top-(delta*vel));
	                Scroll();
	                if($dragger.position().top<0){
	                    $dragger.css("top", 0);
	                    $customScrollBox_container.stop();
	                    Scroll();
	                }
	                if($dragger.position().top>$dragger_container.height()-$dragger.height()){
	                    $dragger.css("top", $dragger_container.height()-$dragger.height());
	                    $customScrollBox_container.stop();
	                    Scroll();
	                }
	                return false;
	            });
	        });
	 
	        //scroll
	        function Scroll(){
	            var scrollAmount=(totalContent-(visibleHeight/bottomSpace))/(draggerContainerHeight-draggerHeight);
	            var draggerY=$dragger.position().top;
	            targY=-draggerY*scrollAmount;
	            var thePos=$customScrollBox_container.position().top-targY;
	            $customScrollBox_container.stop().animate({top: "-="+thePos}, animSpeed, easeType); //with easing
	            //$customScrollBox_container.css("top",$customScrollBox_container.position().top-thePos+"px"); //no easing
	        }
	 
	        $dragger.mouseup(function(){
	            DraggerOut();
	        }).mousedown(function(){
	            DraggerOver();
	        });
	 
	        function DraggerOver(){
	            $dragger.css("background-color", "#ccc").css("color", "#666").css("border-left-color", "#fff").css("border-right-color", "#555");
	        }
	 
	        function DraggerOut(){
	            $dragger.css("background-color", "#999").css("color", "#666").css("border-left-color", "#ccc").css("border-right-color", "#555");
	        }
	    } else { //disable scrollbar if content is short
	        $dragger.css("display","none");
	        $dragger_container.css("display","none");
	    }
	});// $avaScript Document