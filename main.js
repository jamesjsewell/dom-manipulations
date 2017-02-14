var clicked = false

document.querySelector("#thanks button").addEventListener('click',function(){
 	window.alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
 	var doubleNumber = document.querySelector('#compoundInvestment')
 	doubleNumber.innerHTML = parseInt(doubleNumber.innerHTML) * 2
})

document.querySelector("#color-circle button").addEventListener('click',function(){
	var whiteCircle = document.querySelector("#circle-bw")
	var circleStyle = window.getComputedStyle(whiteCircle)
	
	if(clicked === false){
		whiteCircle.style.background = "black"
		clicked = true
		return null
	}
	
	else{
		whiteCircle.style.background = "white"
		clicked	= false
		return null 
	}

})

document.querySelector("#blow-up button").addEventListener('click',function(){
					  
	var redCircle = document.querySelector(".circle-red")
	var circleStyle = window.getComputedStyle(redCircle)
	i = 0


	while(i<320){

		if (parseInt(circleStyle.width) > 319){

			redCircle.style.width = "40px"
			redCircle.style.height = "40px"

		}

		else{
	
			redCircle.style.width = parseInt(circleStyle.width) * 2 + "px"
			redCircle.style.height = parseInt(circleStyle.height) * 2 + "px"
		}
		i++
	}

})

document.querySelector("#remove button").addEventListener('click',function(){
 
	var list = document.querySelector("#userList")
	var listStyle = window.getComputedStyle(list)
	console.log(list.children.length)
	
	for(i = list.children.length-1; i > 0; i--){
		
		console.log(list.children[i].classList)
		
		if(list.children[i].classList.contains('inactive')){
			list.removeChild(list.children[i])
		}
	}

})

document.querySelector("#reverse-squares button").addEventListener('click',function(){

	var boxesOuter = document.querySelector("#reverse-squares div div") 
	var boxes = boxesOuter.children
	var boxesList = []

	for(i = boxes.length; i >= 0; i--){
		
		if (boxes[i]){
			boxesList.push(boxes[i])
		}
	}

	for(j = 0; j < boxesList.length; j++){
		if(boxes[j]){
			document.querySelector("#reverse-squares div div").appendChild(boxesList[j])
		}
	}

	console.log(boxesList)

})

document.querySelector("#pig-latin button").addEventListener('click',function(){

	var tasks = document.querySelector("#tasks") 
	var tasksList = tasks.children

	for(i = 0; i < tasksList.length; i++){	
		var text = tasksList[i].innerHTML
		var splitString = text.split(""); 
    	var reverseArray = splitString.reverse(); 
    	var joinArray = reverseArray.join("")
    	tasksList[i].innerHTML = joinArray
	}

})
var cycleImg = 0
document.querySelector("#cycle-image button").addEventListener('click',function(){
	
	var genImage = document.querySelector("#city-img") 
	cycleImg = cycleImg + 1

	if (cycleImg === 0){
    	genImage.src= "http://lorempixel.com/400/200/city/0"
    }

	if (cycleImg === 1){
    	genImage.src= "http://lorempixel.com/400/200/city/2"
    }

    if (cycleImg === 2){
    	genImage.src= "http://lorempixel.com/400/200/city/3"
    }

    if (cycleImg === 3){
    	genImage.src= "http://lorempixel.com/400/200/city/4"
    }

    if (cycleImg === 4){
    	genImage.src= "http://lorempixel.com/400/200/city/5"
    }

    if (cycleImg === 5){
    	cycleImg = 0
    	genImage.src= "http://lorempixel.com/400/200/city/0"
    }
    
})