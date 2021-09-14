let sun = document.getElementById("sun")
let hills1 = document.getElementById("hills1")
let hills2 = document.getElementById("hills2")
let cloud1 = document.getElementById("cloud1")
let cloud2 = document.getElementById("cloud2")
let cloud3 = document.getElementById("cloud3")
let text = document.getElementById("name")

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    let speed = 10000

    sun.style.top = value * 0.5 + 'px';
    sun.style.left = -value * 0.15 + 'px';
    hills1.style.top = value * 0.3 + 'px';
    hills1.style.left = -value * 0.15 + 'px';
    hills2.style.top = value * 0.15 + 'px';
    hills2.style.left = value * 0.1 + 'px';
    cloud1.style.left = -value * 0.5 + 'px';
    cloud2.style.left = value * 0.5 + 'px';
    cloud3.style.left = -value * 1 + 'px';
    text.style.top = value * 1.15 + 'px';
    
})

var wobbleElements = document.querySelectorAll('.wobble');

wobbleElements.forEach(function(el){
	el.addEventListener('mouseover', function(){
		
		if(!el.classList.contains('animating') && !el.classList.contains('mouseover')){
		
			el.classList.add('animating','mouseover');
		
			var letters = el.innerText.split('');
			
			setTimeout(function(){ el.classList.remove('animating'); }, (letters.length + 1) * 50);
			
			var animationName = el.dataset.animation;
			if(!animationName){ animationName = "jump"; }
		
			el.innerText = '';
		
			letters.forEach(function(letter){
				if(letter == " "){
					letter = "&nbsp;";
				}
				el.innerHTML += '<span class="letter">'+letter+'</span>';
			});
			
			var letterElements = el.querySelectorAll('.letter');
			letterElements.forEach(function(letter, i){
				setTimeout(function(){
					letter.classList.add(animationName);
				}, 50 * i);
			});
			
		}
		
	});
	
	el.addEventListener('mouseout', function(){				
		el.classList.remove('mouseover');
	});
});