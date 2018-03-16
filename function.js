//javascript
function evenNumber() {
	var doc = document.getElementById('my_number');
	var num = doc.value;
	if (isNaN(num)){
		document.getElementById("the_answer").innerHMTL = "please enter a number. other characters are not allowed";
		return
		}
	if  (num == null){
		document.getElementById("the_answer").innerHMTL = "please enter a valid number";
		return
		}
	if(num == null || num == ""){
		document.getElementById("the_answer").innerHTML = "please enter a valid number";
		return
		}
		if (num%2 == 0){
			document.getElementById("the_answer").innerHTML = "the number is even";
			}else{
				document.getElementById("the_answer").innerHTML = "the number is odd";
				}
					}