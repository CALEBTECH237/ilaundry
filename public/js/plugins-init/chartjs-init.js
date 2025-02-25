// $(document).ready(function () {
// 	async function indexchart() {
// 		let baseUrl = window.location.origin;
// 		$.ajax({
// 		   type:'post',
// 		   url: baseUrl+"/indexchart",
// 		   dataType:'json',
// 		   success:function(res){
// 			alert(res.message)
// 		   }
// 		})
// 	}
// });

(function($) {
    /* "use strict" */

	
	/* function draw() {
		
	} */

 var dzSparkLine = function(){
	let draw = Chart.controllers.line.__super__.draw; //draw shadow
	
	var screenWidth = $(window).width();
	
	var barChart1 = function(){
		if(jQuery('#barChart_1').length > 0 ){
			const barChart_1 = document.getElementById("barChart_1").getContext('2d');
			
			barChart_1.height = 100;

			new Chart(barChart_1, {
				type: 'bar',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [65, 59, 80, 81, 56, 55, 40],
							borderColor: 'rgba(64, 24, 157, 1)',
							borderWidth: "0",
							backgroundColor: 'rgba(64, 24, 157, 1)'
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}],
						xAxes: [{
							// Change here
							barPercentage: 0.5
						}]
					}
				}
			});
		}
	}
	var barChart2 = function(){
		if(jQuery('#barChart_2').length > 0 ){
			let allmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

			let orderdata = document.getElementById("indextotorder").value;
			let alldata = [], tmonth = [], tnumber = []
			if (orderdata) {
				let sdata = orderdata.split("&&!")

				sdata.forEach(a => {
					let year = a.split("&!")
					let yearwise = { year: year[0], month: [] }
					
					// tyear.push(year[0])

					let splmonth = year[1].split("@")
					splmonth.forEach(b => {
						let splfinal = b.split("#")

						tmonth.push(`${year[0]}/${allmonth[parseFloat(splfinal[0])-1]}`)
						tnumber.push(splfinal[1])

						yearwise.month.push({tmonth: allmonth[parseFloat(splfinal[0])-1], tottal: splfinal[1]})
					})
					alldata.push(yearwise)
				})

			}

			if (tmonth.length > 12 && tnumber.length > 12) {
				tmonth.slice(-12);
				tnumber.slice(-12);
			}

			//gradient bar chart
			const barChart_2 = document.getElementById("barChart_2").getContext('2d');
			//generate gradient
			const barChart_2gradientStroke = barChart_2.createLinearGradient(0, 0, 0, 250);
			barChart_2gradientStroke.addColorStop(0, "rgb(0, 129, 238)");
			barChart_2gradientStroke.addColorStop(1, "rgba(0, 129, 238, 0.5)");

			barChart_2.height = 100;

			new Chart(barChart_2, {
				type: 'bar',
				data: {
					defaultFontFamily: 'Poppins',
					labels: tmonth,
					datasets: [
						{
							label: "Total Order",
							data: tnumber,
							borderColor: barChart_2gradientStroke,
							borderWidth: "0",
							backgroundColor: barChart_2gradientStroke, 
							hoverBackgroundColor: barChart_2gradientStroke
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}],
						xAxes: [{
							// Change here
							barPercentage: 0.5
						}]
					}
				}
			});



			// //gradient bar chart
			// const barChart_2 = document.getElementById("barChart_2").getContext('2d');
			// //generate gradient
			// const barChart_2gradientStroke = barChart_2.createLinearGradient(0, 0, 0, 250);
			// barChart_2gradientStroke.addColorStop(0, "rgba(64, 24, 157, 1)");
			// barChart_2gradientStroke.addColorStop(1, "rgba(64, 24, 157, 0.5)");

			// barChart_2.height = 100;

			// new Chart(barChart_2, {
			// 	type: 'bar',
			// 	data: {
			// 		defaultFontFamily: 'Poppins',
			// 		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			// 		datasets: [
			// 			{
			// 				label: "My First dataset",
			// 				data: [65, 59, 80, 81, 56, 55, 40],
			// 				borderColor: barChart_2gradientStroke,
			// 				borderWidth: "0",
			// 				backgroundColor: barChart_2gradientStroke, 
			// 				hoverBackgroundColor: barChart_2gradientStroke
			// 			}
			// 		]
			// 	},
			// 	options: {
			// 		legend: false, 
			// 		scales: {
			// 			yAxes: [{
			// 				ticks: {
			// 					beginAtZero: true
			// 				}
			// 			}],
			// 			xAxes: [{
			// 				// Change here
			// 				barPercentage: 0.5
			// 			}]
			// 		}
			// 	}
			// });
		}
	}

	var barChart3 = function(){
		//stalked bar chart
		if(jQuery('#barChart_3').length > 0 ){
			const barChart_3 = document.getElementById("barChart_3").getContext('2d');
			//generate gradient
			const barChart_3gradientStroke = barChart_3.createLinearGradient(50, 100, 50, 50);
			barChart_3gradientStroke.addColorStop(0, "rgba(64, 24, 157, 1)");
			barChart_3gradientStroke.addColorStop(1, "rgba(64, 24, 157, 0.5)");

			const barChart_3gradientStroke2 = barChart_3.createLinearGradient(50, 100, 50, 50);
			barChart_3gradientStroke2.addColorStop(0, "rgba(27, 208, 132, 1)");
			barChart_3gradientStroke2.addColorStop(1, "rgba(27, 208, 132, 1)");

			const barChart_3gradientStroke3 = barChart_3.createLinearGradient(50, 100, 50, 50);
			barChart_3gradientStroke3.addColorStop(0, "rgba(139, 199, 64, 1)");
			barChart_3gradientStroke3.addColorStop(1, "rgba(139, 199, 64, 1)");
			
			barChart_3.height = 100;

			let barChartData = {
				defaultFontFamily: 'Poppins',
				labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
				datasets: [{
					label: 'Red',
					backgroundColor: barChart_3gradientStroke,
					hoverBackgroundColor: barChart_3gradientStroke, 
					data: [
						'12',
						'12',
						'12',
						'12',
						'12',
						'12',
						'12'
					]
				}, {
					label: 'Green',
					backgroundColor: barChart_3gradientStroke2,
					hoverBackgroundColor: barChart_3gradientStroke2, 
					data: [
						'12',
						'12',
						'12',
						'12',
						'12',
						'12',
						'12'
					]
				}, {
					label: 'Blue',
					backgroundColor: barChart_3gradientStroke3,
					hoverBackgroundColor: barChart_3gradientStroke3, 
					data: [
						'12',
						'12',
						'12',
						'12',
						'12',
						'12',
						'12'
					]
				}]

			};

			new Chart(barChart_3, {
				type: 'bar',
				data: barChartData,
				options: {
					legend: {
						display: false
					}, 
					title: {
						display: false
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			});


		}
	}
	var lineChart1 = function(){
		
		
		if(jQuery('#lineChart_1').length > 0 ){


		//basic line chart
			const lineChart_1 = document.getElementById("lineChart_1").getContext('2d');

			Chart.controllers.line = Chart.controllers.line.extend({
				draw: function () {
					draw.apply(this, arguments);
					let nk = this.chart.chart.ctx;
					let _stroke = nk.stroke;
					nk.stroke = function () {
						nk.save();
						nk.shadowColor = 'rgba(255, 0, 0, .2)';
						nk.shadowBlur = 10;
						nk.shadowOffsetX = 0;
						nk.shadowOffsetY = 10;
						_stroke.apply(this, arguments)
						nk.restore();
					}
				}
			});
			
			lineChart_1.height = 100;

			new Chart(lineChart_1, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [25, 20, 60, 41, 66, 45, 80],
							borderColor: 'rgba(64, 24, 157, 1)',
							borderWidth: "2",
							backgroundColor: 'transparent',  
							pointBackgroundColor: 'rgba(64, 24, 157, 1)'
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true, 
								max: 100, 
								min: 0, 
								stepSize: 20, 
								padding: 10
							}
						}],
						xAxes: [{
							ticks: {
								padding: 5
							}
						}]
					}
				}
			});
			
		}
	}
	
	/* var draw = function(){
		
	} */
	
	var lineChart2 = function(){
		//gradient line chart
		if(jQuery('#lineChart_2').length > 0 ){
			
			const lineChart_2 = document.getElementById("lineChart_2").getContext('2d');
			//generate gradient
			const lineChart_2gradientStroke = lineChart_2.createLinearGradient(500, 0, 100, 0);
			lineChart_2gradientStroke.addColorStop(0, "rgba(64, 24, 157, 1)");
			lineChart_2gradientStroke.addColorStop(1, "rgba(64, 24, 157, 0.5)");

			//Chart.controllers.line.draw = function(){ };
			
			Chart.controllers.line = Chart.controllers.line.extend({
				draw: function () {
					draw.apply(this, arguments);
					let nk = this.chart.chart.ctx;
					let _stroke = nk.stroke;
					nk.stroke = function () {
						nk.save();
						nk.shadowColor = 'rgba(0, 0, 128, .2)';
						nk.shadowBlur = 10;
						nk.shadowOffsetX = 0;
						nk.shadowOffsetY = 10;
						_stroke.apply(this, arguments)
						nk.restore();
					}
				}
				
			});
				
				
			lineChart_2.height = 100;

			new Chart(lineChart_2, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [25, 20, 60, 41, 66, 45, 80],
							borderColor: lineChart_2gradientStroke,
							borderWidth: "2",
							backgroundColor: 'transparent', 
							pointBackgroundColor: 'rgba(64, 24, 157, 0.5)'
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true, 
								max: 100, 
								min: 0, 
								stepSize: 20, 
								padding: 10
							}
						}],
						xAxes: [{ 
							ticks: {
								padding: 5
							}
						}]
					}
				}
			});
		}
	}
	var lineChart3 = function(){
		//dual line chart
		if(jQuery('#lineChart_3').length > 0 ){
			const lineChart_3 = document.getElementById("lineChart_3").getContext('2d');
			//generate gradient
			const lineChart_3gradientStroke1 = lineChart_3.createLinearGradient(500, 0, 100, 0);
			lineChart_3gradientStroke1.addColorStop(0, "rgba(64, 24, 157, 1)");
			lineChart_3gradientStroke1.addColorStop(1, "rgba(64, 24, 157, 0.5)");

			const lineChart_3gradientStroke2 = lineChart_3.createLinearGradient(500, 0, 100, 0);
			lineChart_3gradientStroke2.addColorStop(0, "rgba(254, 128, 36, 1)");
			lineChart_3gradientStroke2.addColorStop(1, "rgba(254, 128, 36, 1)");

			Chart.controllers.line = Chart.controllers.line.extend({
				draw: function () {
					draw.apply(this, arguments);
					let nk = this.chart.chart.ctx;
					let _stroke = nk.stroke;
					nk.stroke = function () {
						nk.save();
						nk.shadowColor = 'rgba(0, 0, 0, 0)';
						nk.shadowBlur = 10;
						nk.shadowOffsetX = 0;
						nk.shadowOffsetY = 10;
						_stroke.apply(this, arguments)
						nk.restore();
					}
				}
			});
				
			lineChart_3.height = 100;

			new Chart(lineChart_3, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [25, 20, 60, 41, 66, 45, 80],
							borderColor: lineChart_3gradientStroke1,
							borderWidth: "2",
							backgroundColor: 'transparent', 
							pointBackgroundColor: 'rgba(64, 24, 157, 0.5)'
						}, {
							label: "My First dataset",
							data: [5, 20, 15, 41, 35, 65, 80],
							borderColor: lineChart_3gradientStroke2,
							borderWidth: "2",
							backgroundColor: 'transparent', 
							pointBackgroundColor: 'rgba(254, 176, 25, 1)'
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true, 
								max: 100, 
								min: 0, 
								stepSize: 20, 
								padding: 10
							}
						}],
						xAxes: [{ 
							ticks: {
								padding: 5
							}
						}]
					}
				}
			});
		}
	}
	var lineChart03 = function(){
		//dual line chart
		if(jQuery('#lineChart_3Kk').length > 0 ){
			const lineChart_3Kk = document.getElementById("lineChart_3Kk").getContext('2d');
			//generate gradient
			
			Chart.controllers.line = Chart.controllers.line.extend({
				draw: function () {
					draw.apply(this, arguments);
					let nk = this.chart.chart.ctx;
					let _stroke = nk.stroke;
					nk.stroke = function () {
						nk.save();
						nk.shadowColor = 'rgba(0, 0, 0, 0)';
						nk.shadowBlur = 10;
						nk.shadowOffsetX = 0;
						nk.shadowOffsetY = 10;
						_stroke.apply(this, arguments)
						nk.restore();
					}
				}
			});
				
			lineChart_3Kk.height = 100;

			new Chart(lineChart_3Kk, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [90, 60, 80, 50, 60, 55, 80],
							borderColor: 'rgba(58,122,254,1)',
							borderWidth: "3",
							backgroundColor: 'rgba(0,0,0,0)', 
							pointBackgroundColor: 'rgba(0, 0, 0, 0)'
						}
					]
				},
				options: {
					legend: false, 
					elements: {
							point:{
								radius: 0
							}
					},
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true, 
								max: 100, 
								min: 0, 
								stepSize: 20, 
								padding: 10
							},
							borderWidth:3,
							display:false,
							lineTension:0.4,
						}],
						xAxes: [{ 
							ticks: {
								padding: 5
							},
							
						}]
					}
				}
			});
		}

	}	
	var areaChart1 = function(){	
		//basic area chart
		if(jQuery('#areaChart_1').length > 0 ){
			const areaChart_1 = document.getElementById("areaChart_1").getContext('2d');
			
			areaChart_1.height = 100;

			new Chart(areaChart_1, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [25, 20, 60, 41, 66, 45, 80],
							borderColor: 'rgba(0, 0, 1128, .3)',
							borderWidth: "1",
							backgroundColor: 'rgba(64, 24, 157, .5)', 
							pointBackgroundColor: 'rgba(0, 0, 1128, .3)'
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true, 
								max: 100, 
								min: 0, 
								stepSize: 20, 
								padding: 10
							}
						}],
						xAxes: [{ 
							ticks: {
								padding: 5
							}
						}]
					}
				}
			});
		}
	}
	var areaChart2 = function(){	
		//gradient area chart
		if(jQuery('#areaChart_2').length > 0 ){
			// let sym = $('input[name=sym]').val(), pls = $('input[name=pls]').val()

			// let thousands_replace = $('input[name=thousands_separator]').val(), separator = ""

			// if (thousands_replace == '1') {
			//   separator = ','
			// } else if (thousands_replace == '2') {
			//   separator = '.'
			// } else if (thousands_replace == '3') {
			//   separator = '`'
			// } else if (thousands_replace == '4') {
			//   separator = ''
			// } else {
			//   separator = ' '
			// }

			let allmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

			let orderdata = document.getElementById("indextosales").value;
			let alldata = [], tmonth = [], tnumber = []
			if (orderdata) {
				let sdata = orderdata.split("&&!")

				sdata.forEach(a => {
					let year = a.split("&!")
					let yearwise = { year: year[0], month: [] }

					let splmonth = year[1].split("@")
					splmonth.forEach(b => {
						let splfinal = b.split("#")

						tmonth.push(`${year[0]}/${allmonth[parseFloat(splfinal[0])-1]}`)

						let cnumber = splfinal[1];
						// for (let i = 0; i < cnumber.length;) {
						 
						// 	let num_parts = cnumber[i].toString().split(".");
						// 	num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
							
						// 	cnumber[i] = num_parts.join(".")
						// 	++i
						// }

						// if(pls == 1){
						// 	for (let a = 0; a < cnumber.length;) {
						// 		cnumber =  cnumber[a]+' '+ sym;
						// 		++a
						// 	}
						// }else{
						// 	for (let b = 0; b < cnumber.length;) {
						// 		cnumber = sym+' ' + cnumber[b];
						// 		++b
						// 	}
						// }

						tnumber.push(cnumber)

						yearwise.month.push({tmonth: allmonth[parseFloat(splfinal[0])-1], tottal: splfinal[1]})
					})
					alldata.push(yearwise)
				})
			}

			if (tmonth.length > 12 && tnumber.length > 12) {
				tmonth.slice(-12);
				tnumber.slice(-12);
			}

			const areaChart_2 = document.getElementById("areaChart_2").getContext('2d');
			//generate gradient
			const areaChart_2gradientStroke = areaChart_2.createLinearGradient(0, 1, 0, 500);
			areaChart_2gradientStroke.addColorStop(0, "rgba(0, 129, 238, 0.3)");
			areaChart_2gradientStroke.addColorStop(1, "rgba(0, 129, 238, 0)");
			
			areaChart_2.height = 100;

			new Chart(areaChart_2, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: tmonth,
					datasets: [
						{
							label: "Total Sales",
							data: tnumber,
							borderColor: "#0081EE",
							borderWidth: "4",
							backgroundColor: areaChart_2gradientStroke
						}
					]
				},
				options: {
					legend: false,
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}],
						xAxes: [{ 
							ticks: {
								padding: 5
							}
						}]
					}
				}
			});



			// const areaChart_2 = document.getElementById("areaChart_2").getContext('2d');
			// //generate gradient
			// const areaChart_2gradientStroke = areaChart_2.createLinearGradient(0, 1, 0, 500);
			// areaChart_2gradientStroke.addColorStop(0, "rgba(139, 199, 64, 0.2)");
			// areaChart_2gradientStroke.addColorStop(1, "rgba(139, 199, 64, 0)");
			
			// areaChart_2.height = 100;

			// new Chart(areaChart_2, {
			// 	type: 'line',
			// 	data: {
			// 		defaultFontFamily: 'Poppins',
			// 		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			// 		datasets: [
			// 			{
			// 				label: "My First dataset",
			// 				data: [25, 20, 60, 41, 66, 45, 80],
			// 				borderColor: "#ff6746",
			// 				borderWidth: "4",
			// 				backgroundColor: areaChart_2gradientStroke
			// 			}
			// 		]
			// 	},
			// 	options: {
			// 		legend: false, 
			// 		scales: {
			// 			yAxes: [{
			// 				ticks: {
			// 					beginAtZero: true, 
			// 					max: 100, 
			// 					min: 0, 
			// 					stepSize: 20, 
			// 					padding: 5
			// 				}
			// 			}],
			// 			xAxes: [{ 
			// 				ticks: {
			// 					padding: 5
			// 				}
			// 			}]
			// 		}
			// 	}
			// });



		}    
	}    

	var areaChart3 = function(){	
		//gradient area chart
		if(jQuery('#areaChart_3').length > 0 ){
			const areaChart_3 = document.getElementById("areaChart_3").getContext('2d');
			
			areaChart_3.height = 100;

			new Chart(areaChart_3, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [25, 20, 60, 41, 66, 45, 80],
							borderColor: 'rgb(64, 24, 157)',
							borderWidth: "1",
							backgroundColor: 'rgba(64, 24, 157, .5)'
						}, 
						{
							label: "My First dataset",
							data: [5, 25, 20, 41, 36, 75, 70],
							borderColor: 'rgb(254, 128, 36)',
							borderWidth: "1",
							backgroundColor: 'rgba(254, 128, 36, .5)'
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true, 
								max: 100, 
								min: 0, 
								stepSize: 20, 
								padding: 10
							}
						}],
						xAxes: [{ 
							ticks: {
								padding: 5
							}
						}]
					}
				}
			});
		}
	}

	var radarChart = function(){	
		if(jQuery('#radar_chart').length > 0 ){
			//radar chart
			const radar_chart = document.getElementById("radar_chart").getContext('2d');

			const radar_chartgradientStroke1 = radar_chart.createLinearGradient(500, 0, 100, 0);
			radar_chartgradientStroke1.addColorStop(0, "rgba(54, 185, 216, .5)");
			radar_chartgradientStroke1.addColorStop(1, "rgba(75, 255, 162, .5)");

			const radar_chartgradientStroke2 = radar_chart.createLinearGradient(500, 0, 100, 0);
			radar_chartgradientStroke2.addColorStop(0, "rgba(68, 0, 235, .5");
			radar_chartgradientStroke2.addColorStop(1, "rgba(68, 236, 245, .5");

			// radar_chart.height = 100;
			new Chart(radar_chart, {
				type: 'radar',
				data: {
					defaultFontFamily: 'Poppins',
					labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
					datasets: [
						{
							label: "My First dataset",
							data: [65, 59, 66, 45, 56, 55, 40],
							borderColor: '#f21780',
							borderWidth: "1",
							backgroundColor: radar_chartgradientStroke2
						},
						{
							label: "My Second dataset",
							data: [28, 12, 40, 19, 63, 27, 87],
							borderColor: '#f21780',
							borderWidth: "1",
							backgroundColor: radar_chartgradientStroke1
						}
					]
				},
				options: {
					legend: false,
					maintainAspectRatio: false, 
					scale: {
						ticks: {
							beginAtZero: true
						}
					}
				}
			});
		}
	}
	var pieChart = function(){
		//pie chart
		if(jQuery('#pie_chart').length > 0 ){
			//pie chart
			const pie_chart = document.getElementById("pie_chart").getContext('2d');
			// pie_chart.height = 100;
			new Chart(pie_chart, {
				type: 'pie',
				data: {
					defaultFontFamily: 'Poppins',
					datasets: [{
						data: [45, 25, 20, 10],
						borderWidth: 0, 
						backgroundColor: [
							"rgba(64, 24, 157, .9)",
							"rgba(64, 24, 157, .7)",
							"rgba(64, 24, 157, .5)",
							"rgba(0,0,0,0.07)"
						],
						hoverBackgroundColor: [
							"rgba(64, 24, 157, .9)",
							"rgba(64, 24, 157, .7)",
							"rgba(64, 24, 157, .5)",
							"rgba(0,0,0,0.07)"
						]

					}],
					labels: [
						"one",
						"two",
						"three", 
						"four"
					]
				},
				options: {
					responsive: true, 
					legend: false, 
					maintainAspectRatio: false
				}
			});
		}
	}
    var doughnutChart = function(){
		if(jQuery('#doughnut_chart').length > 0 ){
			//doughut chart
			const doughnut_chart = document.getElementById("doughnut_chart").getContext('2d');
			// doughnut_chart.height = 100;
			new Chart(doughnut_chart, {
				type: 'doughnut',
				data: {
					weight: 5,	
					defaultFontFamily: 'Poppins',
					datasets: [{
						data: [45, 25, 20],
						borderWidth: 3, 
						borderColor: "rgba(255,255,255,1)",
						backgroundColor: [
							"rgba(64, 24, 157, 1)",
							"rgba(27, 208, 132, 1)",
							"rgba(139, 199, 64, 1)"
						],
						hoverBackgroundColor: [
							"rgba(64, 24, 157, 0.9)",
							"rgba(27, 208, 132, .9)",
							"rgba(139, 199, 64, .9)"
						]

					}],
					// labels: [
					//     "green",
					//     "green",
					//     "green",
					//     "green"
					// ]
				},
				options: {
					weight: 1,	
					 cutoutPercentage: 70,
					responsive: true,
					maintainAspectRatio: false
				}
			});
		}
	}
	var polarChart = function(){
		if(jQuery('#polar_chart').length > 0 ){
			//polar chart
			const polar_chart = document.getElementById("polar_chart").getContext('2d');
			// polar_chart.height = 100;
			new Chart(polar_chart, {
				type: 'polarArea',
				data: {
					defaultFontFamily: 'Poppins',
					datasets: [{
						data: [15, 18, 9, 6, 19],
						borderWidth: 0, 
						backgroundColor: [
							"rgba(64, 24, 157, 1)",
							"rgba(27, 208, 132, 1)",
							"rgba(139, 199, 64, 1)",
							"rgba(255, 103, 70, 1)",
							"rgba(254, 128, 36, 1)"
						]

					}]
				},
				options: {
					responsive: true, 
					maintainAspectRatio: false
				}
			});

		}
	}



	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				barChart1();	
				barChart2();
				barChart3();	
				lineChart1();	
				lineChart2();		
				lineChart3();
				lineChart03();
				areaChart1();
				areaChart2();
				areaChart3();
				radarChart();
				pieChart();
				doughnutChart(); 
				polarChart(); 
			},
			
			resize:function(){
				barChart1();	
				barChart2();
				barChart3();	
				lineChart1();	
				lineChart2();		
				lineChart3();
				lineChart03();
				areaChart1();
				areaChart2();
				areaChart3();
				radarChart();
				pieChart();
				doughnutChart(); 
				polarChart(); 
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		dzSparkLine.load();
	});

	jQuery(window).on('resize',function(){
		//dzSparkLine.resize();
		setTimeout(function(){ dzSparkLine.resize(); }, 1000);
	});     

})(jQuery);