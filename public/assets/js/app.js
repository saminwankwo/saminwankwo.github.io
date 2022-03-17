
$(function(){
	/** add active class and stay opened when selected */
	let url = window.location;

    console.log(url);

	// for sidebar menu entirely but not cover treeview
	$('ul.navbar-nav.flex-column.text-left a').filter(function() {
		 return this.href == url;
	}).parent().addClass('active');

	// for treeview
	// $('ul.treeview-menu a').filter(function() {
	// 	 return this.href == url;
	// }).parentsUntil(".sidebar-menu > .treeview-menu").addClass('active');
	
});