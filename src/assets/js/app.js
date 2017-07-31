import $ from 'jquery';
import whatInput from 'what-input';
window.jQuery = window.$ = $;
import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
        responsive: true,
        items : 3,
        autoPlay : true,
        navigation : true,
        navigationText :  ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        pagination : false,
        itemsDesktop : [1200,3],
        itemsDesktopSmall : [1100,2],
        itemsTablet: [768,1],
        itemsMobile : [479,1]
	});
});