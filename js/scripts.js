function navigation_sm_display(){
	jQuery(document).ready(function(){
		var navBtn = jQuery(".header_nav_btn");
		var navBtnActive = jQuery(".header_nav_btn_active");
		var navMenu = jQuery(".header_nav_menu")
		var navMenuActive = jQuery(".header_nav_menu_active")


		navBtn.click(function(){
			navBtn.toggleClass("header_nav_btn_active");
			navMenu.toggleClass("header_nav_menu_active");

		});
		navBtnActive.click(function(){
			navBtn.toggleClass("header_nav_btn_active");
			navMenu.toggleClass("header_nav_menu_active");
		});
	});
};

navigation_sm_display();