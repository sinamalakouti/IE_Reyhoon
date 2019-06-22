$(document).ready(function(){


  getTopRests();
getGoodRests();

 getMainFoods();

});



function getTopRests(){

// http://demo2469824.mockable.io/best-restaurants
$.get('http://demo2469824.mockable.io/best-restaurants', function(data, status) {

	if ( status == 'success'){
		var restaurants = data.restaurants;
		// var main_div = $('.top_restaurant_grid');
		var main_div = document.getElementsByClassName("top_restaurant_grid")[0];
			 

		//  number of best rests is 3
		rest_divs = main_div.children;

		for (var i = 0; i < rest_divs.length; i++) {
			rest_div = rest_divs[i];
			 // alert(rest_div);

			rest_div.querySelector(".pic-rest").src = restaurants[i].imgUrl ;
			rest_div.querySelector("h3").innerHTML = restaurants[i].name;
			rest_div.querySelector(".gs").childNodes[0].innerHTML = restaurants[i].rate;
			star_list = rest_div.querySelector(".rate");
			checkRating(star_list, restaurants[i].rate);
			rest_div.querySelector(".voteQuantity").innerHTML = "("+restaurants[i].numOfRates + ")";
			rest_div.querySelector(".info").innerHTML = setKeywords_food(restaurants[i].foods);
			rest_div.querySelector(".info2").innerHTML = restaurants[i].address;

		}



	}else {
		alert("not a valid url wit code \t" + status)
	}


});


}


function getGoodRests() {


$.get('http://demo2469824.mockable.io/best-restaurants', function(data, status){

	if (status == "success") {

		var restaurants = data.restaurants;
		var main_div = $('.best_restuarnats_grid');

		// good_restaurants = main_div.find('img');
		// good_restaurants_name = main_div.find('p');
		for (var i = 0; i < 12; i++) {
				


			main_div.append( '<a class="restItem_p" href="#"><div class=\"restItem\"> <img src=\" ' + restaurants[i].imgUrl + '\"/> <p>' + restaurants[i].name + '</p> </div></a>');

			// good_restaurants[i].src = restaurants[i + 3].imgUrl;
			// good_restaurants_name[i].innerHTML= restaurant[i].name;

		}




	}

});

}

function getMainFoods() {

$.get('http://demo2469824.mockable.io/foods', function(data, status){

	var main_div1 = $('.foods_grid');
	var foods = data.getElementsByTagName('foods').item(0);
	
	for (var i = 0; i < 4; i++) {
		food = foods.getElementsByTagName('food').item(i);
		main_div1.append('<a href=\"#\">  <div class=\"foodItem\"> <img src= \"' +food.getElementsByTagName('imgUrl').item(0).innerHTML+' \"/>'+
                       '<p class=\"p1\">'+ translate_food(food.getElementsByTagName('name').item(0).innerHTML)  + '</p> <p class="p2">'
                           + translate_number(food.getElementsByTagName('count').item(0).innerHTML) + ('رستوران‌فعال')  +  '</p> </div></a>\n');
  //                          
                           

                       //     main_div1.append('<a href="#"> <div class=\"foodItem\">'
                       //  +' <img src="../assets/images/f4.jpeg"/>'
                       // +'<p class="p1">برگر</p><p class=\"p2\">۲۴۵۲ رستوران فعال '+
                       // '</p> </div></a>');
	}

	var main_div = $('.more_foods_grid');


	for (var i = 4; i < foods.getElementsByTagName('food').length ;i++) {
		food = foods.getElementsByTagName('food').item(i);
		main_div.append( '<div  class=\"item\">'
                       + '<a href="#" class=\"foodButton\">' + 
                           translate_food(food.getElementsByTagName('name').item(0).innerHTML)
                    + '  </a>  </div>');
		
	}

});

}

function login2register(){
	
	$('.login_div').load('register.html #inputs_reg')
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '../assets/css/register.css') );
	        // <link rel="stylesheet" href="../assets/css/register.css">

	$('link[href="login.css"]').prop('disabled', true);
		$('link[href="register.css"]').prop('disabled', false);
	$("#register").css({ "border-bottom-color": "#db1a67" , "border-bottom-style": "solid",
	"border-bottom-width": "1.5px"	})
		$("#login").css({"border" : "none"})
		$(".log")
		$("#loginLogo").attr('src','../assets/images/login.png')
		$("#registerLogo").attr('src', '../assets/images/register-pink.png')

// 
	// $('#inputs_log').style.display = 'none';

}
function register2log(){

	$('.login_div').load('login.html #inputs_log');
	$('#title').load('login.html #title');
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '../assets/css/login.css') );

	$('link[href="register.css"]').prop('disabled', true);
		$('link[href="login.css"]').prop('disabled', false);
		$("#login").css({ "border-bottom-color": "#db1a67" , "border-bottom-style": "solid",
	"border-bottom-width": "1.5px"	})
		$("#register").css({"border" : "none"})
				$("#loginLogo").attr('src','../assets/images/login-pink.png')
		$("#registerLogo").attr('src', '../assets/images/register.png')



// 
	// $('#inputs_log').style.display = 'on';

}
function setKeywords_food( list_foods)
{
	var text = "";
	for (var i = 0; i < list_foods.length; i++) {
		if ( i != list_foods.length - 1){

			text  = text + translate_food(list_foods[i]) + " . "
		}else {
			text = text + translate_food(list_foods[i]);
		}
	
	}
	return text;

}
function translate_food(eng_food){
	 eng_food.toLowerCase();
    const dict = {
        'pizza': 'پیتزا',
        'sandwich': 'ساندویچ',
        'burger': 'برگر',
        'kebab': 'کباب',
        'fastfood': 'فست‌فود',
        'salad': 'سالاد',
        'iranian': 'ایرانی',
        'pasta': 'پاستا',
        'fish': 'غذای دریایی',
        'breakfast': 'صبحانه',
        'juice': 'آبمیوه طبیعی',
        'steak': 'استیک',
        'soup': 'سوپ'
    };
    if(eng_food in dict) return dict[eng_food];
    return eng_food
}
function translate_number(eng_num){
    fa_num = "";
    for(var c_i in eng_num){
        fa_num = fa_num.concat(String.fromCharCode(eng_num.charCodeAt(c_i) + (1776 - 48)));
    }
    return fa_num;
}
function checkRating( element, rate){
	var h = element.querySelector("#star5");

	if ( rate >= 5)
		element.querySelector("#star5").checked = true;
	if ( rate >= 4)
		element.querySelector("#star4").checked = true;
	if ( rate >= 3)
		element.querySelector("#star3").checked = true;
	if( rate >= 2)
		element.querySelector("#star2").checked = true;
	if( rate >= 1)
		element.querySelector("#star1").checked = true;

}