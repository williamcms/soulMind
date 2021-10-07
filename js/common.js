$(document).ready(function(){
	$('#support-extended').change(function(){
		if(!$('#support-extended')[0].checked){
			$('.support-guide .changeView')[0].src = 'svgs/soulmind_layout_botao_mais.svg';
		}else{
			$('.support-guide .changeView')[0].src = 'svgs/soulmind_layout_botao_menos.svg';
		}
	});
	$('#aboutUs-extended').change(function(){
		if(!$('#aboutUs-extended')[0].checked){
			$('.aboutUs-guide .changeView')[0].src = 'svgs/soulmind_layout_botao_mais.svg';
		}else{
			$('.aboutUs-guide .changeView')[0].src = 'svgs/soulmind_layout_botao_menos.svg';
		}
	});
});