$(document).ready(function() {

	$(".extra").click(function() {

		if ($(this).hasClass('opened') == true ) {
			$(".drop-down").fadeOut(200);
			$(".extra").removeClass('opened');

		} else {

			$(".drop-down").fadeIn(200);
			$(".extra").addClass('opened');

		}

	});

		$(".tab1").click(function() {
			$(".tab-link1").show();
			$(".tab-link2").hide();
			$(".tab-link3").hide();			
			$(".tab-link4").hide();		
		});

		$(".tab2").click(function() {
			$(".tab-link1").hide();
			$(".tab-link2").show();
			$(".tab-link3").hide();
			$(".tab-link4").hide();
		});

		$(".tab3").click(function() {
			$(".tab-link1").hide();
			$(".tab-link2").hide();
			$(".tab-link3").show();
			$(".tab-link4").hide();

		});

		$(".tab4").click(function() {
			$(".tab-link1").hide();
			$(".tab-link2").hide();
			$(".tab-link3").hide();
			$(".tab-link4").show();
		});

/* the table */
	$(".lat-company").click(function() {

		if ($(this).hasClass('opened') == true ) {
			$(".table-content").fadeOut(200);
			$(".lat-company").removeClass('opened');

		} else {

			$(".table-content").fadeIn(200);
			$(".lat-company").addClass('opened');

		};

	
	});
/* end the table */
	
	





});
