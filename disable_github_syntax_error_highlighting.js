////////////////////////////////////////////////////////////////////////////////////////////////////
// on a github pull request, this removes the red background / white font color for syntax errors //
//                                              !ES2016!                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////
(function() {for (var el of document.getElementsByClassName("pl-ii")) {
	el.style.backgroundColor = "transparent";
	el.style.color = "#24292e";
}})();