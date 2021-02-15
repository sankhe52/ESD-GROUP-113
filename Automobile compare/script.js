var car_data = {
	"ms" : {
		"Name" : "Maruti Suzuki",
		"Engine" : "xyz",
		"Variants" : "abc"
	},
	"hc" : {
		"Name" : "Honda City",
		"Engine" : "pqr",
		"Variants" : "inh"
	},
	"hi20" : {
		"Name" : "Hundai i20",
		"Engine" : "i20engine",
		"Variants" : "i20var"
	},
	"wg" : {
		"Name" : "Wagonare",
		"Engine" : "1000cc",
		"Variants" : "petrol, disel"
	}
}
var car_header = document.querySelector('.car_header');
var datahtml = document.querySelector('#tableData');
var error_text = "Please Select two different models"
var compare_btn = document.querySelector('.compare_btn');
var error_element = document.querySelector('.error_content');

var drop = document.getElementsByClassName('compare_drop');
console.log(drop);


(function set_drops() {
	let temp = '';
	let drop_start = '<option value="-1" selected>Select a model</option>'
	for (const car_name in car_data) {
	
	temp += `<option value="`+car_name+`">`+car_data[car_name]["Name"]+`</option>`;
	
	}
	drop[0].innerHTML = drop_start + temp;
	drop[1].innerHTML = drop_start + temp;

})();




compare_btn.addEventListener('click', () => {
	var compare_car1 = document.querySelector('.compare1').value;
	var compare_car2 = document.querySelector('.compare2').value;
	
	if (compare_car1 === compare_car2 || (compare_car2 == "-1" || compare_car1 == "-1")) {
		error_element.innerHTML = error_text;
	}
	else if((compare_car1 in car_data) && (compare_car2 in car_data)) {
		error_element.innerHTML = '';
		datahtml.innerHTML = '';
		car_header.innerHTML = '';
		for (const parameter in car_data[compare_car1]) {
			if (parameter === "Name") {
				car_header.innerHTML = `<thead><tr><th scope="col">Parameters</th>
								<th class="col">`+car_data[compare_car1]["Name"]+`</th>
								<th class="col">`+car_data[compare_car2]["Name"]+`</th></tr></thead>`;
			}
			else {
				datahtml.innerHTML += `<tr><td>`+parameter+`</td>
										<td>`+car_data[compare_car1][parameter]+`</td>
										<td>`+car_data[compare_car2][parameter]+`</td></tr>`;
			}
		}
		
		
	}
});



//for const parameter in car_data[compare_car1] {
//			if(parameter === "Name") {
//				car_header.innerHTML += `<thead><tr><th scope="col">Parameters</th>
//								<th class="col">`+car_data[compare_car1]["Name"]+`</th>
//								<th class="col">`+car_data[compare_car2]["Name"]+`</th></tr></thead>`;
//			}
//			else{
//
//			}
//			
//		}
//






//datahtml.innerHTML += `<thead><tr><th scope="col">Parameters</th>
	//							<th class="col">`+car_data[compare_car1]["Name"]+`</th>`
//	document.querySelector('tbody').innerHTML = `
//	<tr>
//      <th scope="row">Name</th>
//      <td>`+ tempJson.fname +`</td>
//      <td>Otto</td>
//      
//    </tr>
//    <tr>
//      <th scope="row">OK</th>
//      <td>Jacob</td>
//      <td>Thornton</td>
//      
//    </tr>
//    <tr>
//      <th scope="row">3</th>
//      <td>LHUwaaaaaaaaaaaaaaaaannnaaa change</td>
//      
//    </tr>`
//