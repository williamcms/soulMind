$(document).ready(function(){
	$('#support-extended').change(function(){
		if(!$('#support-extended')[0].checked){
			$($('.support-wrapper .support-guide svg line.cls-2')[0]).css('display', 'block');
		}else{
			$($('.support-wrapper .support-guide svg line.cls-2')[0]).css('display', 'none');
		}
	});
	$('#aboutUs-extended').change(function(){
		if(!$('#aboutUs-extended')[0].checked){
			$($('.aboutUs-wrapper .aboutUs-guide svg line.cls-2')[0]).css('display', 'block');
		}else{
			$($('.aboutUs-wrapper .aboutUs-guide svg line.cls-2')[0]).css('display', 'none');
		}
	});
	$('.perks .item img')
		.mouseover(function(){
			var alt = $(this).attr('altsrc');

			$(this).attr('altsrc', this.src);
			this.src = alt;
		})
		.mouseout(function(){
			var alt = $(this).attr('altsrc');

			$(this).attr('altsrc', this.src);
			this.src = alt;
		});
});