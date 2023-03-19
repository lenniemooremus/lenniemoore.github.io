function scrollerScrollToX(refid,valTo){

if (valTo>0)
{
var $dragger=$(“#”+refid+” .dragger”);
var $customScrollBox=$(“#”+refid+” .customScrollBox”);
var $customScrollBox_container=$(“#”+refid+” .customScrollBox .container”);
var $dragger_container=$(“#”+refid+” .dragger_container”);

container_width=$customScrollBox.width(); content_width=$customScrollBox_container.width(); drag_width=$dragger_container.width();
dragger_width=$dragger.width();
if (valTo>(content_width-container_width)) valTo=content_width-container_width;

var scrollAmount=(content_width-container_width)/(drag_width-dragger_width);

var btnsScrollTo=parseInt(valTo/scrollAmount);

var scrollSpeed=Math.abs($dragger.position().left-btnsScrollTo)*(100/150);
$dragger.stop().animate({left: btnsScrollTo}, scrollSpeed,”linear”);
$customScrollBox_container.stop().animate({left: “-=”+valTo}, 300, “easeOutCirc”);
}}

function scrollerScrollToY(refid,valTo){

if (valTo>0)
{
var $dragger=$(“#”+refid+” .dragger”);
var $customScrollBox=$(“#”+refid+” .customScrollBox”);
var $customScrollBox_container=$(“#”+refid+” .customScrollBox .container”);
var $dragger_container=$(“#”+refid+” .dragger_container”);

container_height=$customScrollBox.height(); content_height=$customScrollBox_container.height(); drag_height=$dragger_container.height();
dragger_height=$dragger.height();
if (valTo>(content_height-container_height)) valTo=content_height-container_height;

var scrollAmount=(content_height-container_height)/(drag_height-dragger_height);

var btnsScrollToY=parseInt(valTo/scrollAmount);

var scrollSpeed=Math.abs($dragger.position().left-btnsScrollToY)*(100/150);
$dragger.stop().animate({top: btnsScrollToY}, scrollSpeed,”linear”);
$customScrollBox_container.stop().animate({top: “-=”+valTo}, 300, “easeOutCirc”);
}}