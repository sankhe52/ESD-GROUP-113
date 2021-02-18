var car_data = {
	"i20" : {
		"Name" : "Hyundai i20",
		"Preview" : "https://trak.in/wp-content/uploads/2020/06/Untitled-design-6-2-1280x720.jpg",
		"Engine" : "1493 cc",
		"Power" : "118.36 Bhp",
		"Max Torque (nm@rpm)" : "171.62nm@1500-4000rpm",
		"Transmission" : "Auto",
		"Mileage" : "19.65 - 25.2 kmpl",
		"Boot Space (Litres)" : "311",
		"Seating Capacity" : "5",
		"Body Type" : "Hatchback"
		},
	"ms" : {
		"Name" : "Maruti Swift",
		"Preview" : "https://imgd.aeplcdn.com/0x0/n/cw/ec/26742/swift-exterior-right-front-three-quarter-2.jpeg",
		"Engine" : "1197 cc",
		"Power" : "81.80bhp@6000rpm",
		"Max Torque (nm@rpm)" : "113Nm@4200rpm",
		"Transmission" : "Auto",
		"Mileage" : "21.21 kmpl",
		"Boot Space (Litres)" : "268",
		"Seating Capacity" : "5",
		"Body Type" : "Hatchback"
		},
	"mb" : {
		"Name" : "Maruti Baleno",
		"Preview" : "https://imgd.aeplcdn.com/1056x594/n/zrj6isa_1467582.jpg?q=85",
		"Engine" : "1197 cc",
		"Power" : "81.80bhp@6000rpm",
		"Max Torque (nm@rpm)" : "113Nm@4200rpm",
		"Transmission" : "Automatic",
		"Mileage" : "19.56 kmpl",
		"Boot Space (Litres)" : "339",
		"Seating Capacity" : "5",
		"Body Type" : "Hatchback"
		},
	"mt" : {
		"Name" : "Mahindra Thar",
		"Preview" : "https://imgd.aeplcdn.com/1056x594/n/4qdbgta_1492264.jpg?q=85",
		"Engine" : "2184 cc",
		"Power" : "130bhp@3750rpm",
		"Max Torque (nm@rpm)" : "300nm@1600-2800rpm",
		"Transmission" : "Auto",
		"Mileage" : "15 kmpl",
		"Boot Space (Litres)" : "-",
		"Seating Capacity" : "4",
		"Body Type" : "SUV"
		},
	"bmw" : {
		"Name" : "BMW X3 xDrive30i SportX",
		"Preview" : "https://www.autodevot.com/wp-content/uploads/2021/02/BMW-X3-xDrive30i-SportX.jpg",
		"Engine" : "1998 cc",
		"Power" : "248.08bhp@5200rpm",
		"Max Torque (nm@rpm)" : "350Nm@1450-4800rpm",
		"Transmission" : "Auto",
		"Mileage" : "13.17 kmpl",
		"Boot Space (Litres)" : "485",
		"Seating Capacity" : "5",
		"Body Type" : "SUV"
		},
	"hc" : {
		"Name" : "Hyundai Creta",
		"Preview" : "https://imgd.aeplcdn.com/0x0/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg",
		"Engine" : "1353 cc",
		"Power" : "138bhp@6000rpm",
		"Max Torque (nm@rpm)" : "242.2nm@1500-3200rpm",
		"Transmission" : "Auto",
		"Mileage" : "16.8 kmpl",
		"Boot Space (Litres)" : "433",
		"Seating Capacity" : "5",
		"Body Type" : "SUV"
		},
	"3gl" : {
		"Name" : "BMW 3 Series Gran Limousine",
		"Preview" : "https://imgd.aeplcdn.com/664x374/n/cw/ec/52639/3-series-gran-limousine-exterior-left-front-three-quarter-2.jpeg?q=85",
		"Engine" : "1998 cc",
		"Power" : "254.79bhp@5000rpm",
		"Max Torque (nm@rpm)" : "400nm@1550-4400rpm",
		"Transmission" : "Auto",
		"Mileage" : "15.3 kmpl",
		"Boot Space (Litres)" : "500",
		"Seating Capacity" : "5",
		"Body Type" : "Sedan"
		},
	"ls" : {
		"Name" : "Lexus LS 500h Ultra Luxury",
		"Preview" : "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FLSModelImage.jpg&h=300&w=450&q=100",
		"Engine" : "3456 cc",
		"Power" : "354bhp@6600rpm",
		"Max Torque (nm@rpm)" : "350nm@5100rpm",
		"Transmission" : "Auto",
		"Mileage" : "15.4 kmpl",
		"Boot Space (Litres)" : "430",
		"Seating Capacity" : "4",
		"Body Type" : "Sedan"
		},
	"bc" : {
		"Name" : "Bugatti Chiron",
		"Preview" : "https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-1258b415549a46a6c22c628084712b69.jpg",
		"Engine" : "7993 cc",
		"Power" : "1479bhp@6700rpm",
		"Max Torque (nm@rpm)" : "1600Nm@2000-6000rpm",
		"Transmission" : "auto",
		"Mileage" : "3.8 kmpl",
		"Boot Space (Litres)" : "nil",
		"Seating Capacity" : "2",
		"Body Type" : "Coupe"
		},
	"amv" : {
		"Name" : "Aston Martin Vantage",
		"Preview" : "https://www.motortrend.com/uploads/sites/10/2017/05/2017-aston-martin-vanquish-base-coupe-angular-front.png",
		"Engine" : "3998 cc",
		"Power" : "502.88Bhp@6000rpm",
		"Max Torque (nm@rpm)" : "675Nm@2000-5000rpm",
		"Transmission" : "Manual",
		"Mileage" : "10 kmpl",
		"Boot Space (Litres)" : "nil",
		"Seating Capacity" : "2",
		"Body Type" : "Convertible"
		}
}
var car_header = document.querySelector('.car_header');
var datahtml = document.querySelector('#tableData');
var error_text = "Please Select two different models";
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
			else if (parameter === "Preview") {
				datahtml.innerHTML += `<tr><td>`+parameter+`</td>
										<td><img src="`+car_data[compare_car1][parameter]+`" class="table_img"></td>
										<td><img src="`+car_data[compare_car2][parameter]+`" class="table_img"></td></tr>`
			}
			else {
				datahtml.innerHTML += `<tr><td>`+parameter+`</td>
										<td>`+car_data[compare_car1][parameter]+`</td>
										<td>`+car_data[compare_car2][parameter]+`</td></tr>`;
			}
		}
		
		
	}
});
