// JavaScript Document

/*var my_password="auto_pass";
var my_email="emeka@kwenu.com";*/

/*	function login (email,password) {
			if (email==my_email && password==my_password); {
				alert("welcome back");
			}else{
				alert("email or password incorrect!");
			}
	}
	*/
	
	function signIn(){
		var email=document.getElementById('my_email').value;
		var password=document.getElementById('my_password').value;
		
			if(email==my_email && password==my_password) {
				alert("welcome" + email)
			}else{
				alert("email or password is incorrect!")
			}
					