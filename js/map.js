let witdth = window.innerWidth;
	let zoom = 6;
	if (witdth <= 768) {
		zoom = 5
	} else if (witdth <= 480) {
		zoom = 4
	} else {
		let zoom = 6;
	}

	function initMap() {

		var myLatLng = {
			lat: 49.0526335,
			lng: 31.2110713
		};
		var rest = {
			lat: 49.5435911,
			lng: 25.6157549
		};
		var viplife = {
			lat: 50.5514657,
			lng: 30.2724961
		};
		var avtoPoz = {
			lat: 50.3987778,
			lng: 30.4984785
		};
		var chemp = {
			lat: 50.6316964,
			lng: 26.2177813
		};
		var Bitstop = {
			lat: 50.4781721,
			lng: 30.4904938
		};

		var TINT = {
			lat: 50.4266738,
			lng: 30.4370367
		};
		var Autoupgrade = {
			lat: 46.4751095,
			lng: 30.7202905
		};
		var Tonirovka03 = {
			lat: 50.5077286,
			lng: 30.6280306
		};
		var dopavto = {
			lat: 50.5079450,
			lng: 30.6290406
		};
		var BOKS9 = {
			lat: 46.5591827,
			lng: 30.7727854
		};
		var hameleon = {
			lat: 48.5393795,
			lng: 25.0425866
		};
		var Autoded = {
			lat: 49.8987672,
			lng: 28.5945907
		};
		var FaineAuto = {
			lat: 49.5222229,
			lng: 25.6026813
		};
		var konkretno = {
			lat: 50.4322652,
			lng: 30.539855
		};
		var volt_12 = {
			lat: 49.9840907,
			lng: 36.1859099
		};
		var Auto_Style_Protection = {
			lat: 50.9271193,
			lng: 34.7512643
		};
		var zabiyan = {
			lat: 48.672974,
			lng: 33.1096375
		};
		var CAR_FILM = {
			lat: 48.2702836,
			lng: 25.9517032
		};
		var PREMIUM_PROTECTION = {
			lat: 50.4129248,
			lng: 30.4800236
		};
		var autosklo = {
			lat: 50.0969362,
			lng: 25.7243996
		};
		var cirulik = {
			lat: 48.4065165,
			lng: 35.0704109
		};
		var autostar = {
			lat: 50.4118381,
			lng: 30.4943938
		};
		var sapfir = {
			lat: 50.4844844,
			lng: 30.5072549
		};


		var map22 = new google.maps.Map(document.getElementById('Map22'), {
			zoom: zoom,
			center: myLatLng
		});

		var marker24 = new google.maps.Marker({
			position: sapfir,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'ТОВ“ПРОФЕСІЙНЕ ТОНУВАННЯ СКЛА САПФІР”'
		});
		var marker23 = new google.maps.Marker({
			position: autostar,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Автостар г.Киев'
		});
		var marker22 = new google.maps.Marker({
			position: cirulik,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'ФОП Цирулік Анатолій г.Днепр'
		});
		var marker21 = new google.maps.Marker({
			position: dopavto,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Допавто г.Киев'
		});

		var marker20 = new google.maps.Marker({
			position: autosklo,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Автоскло г.Кременець'
		});
		var marker19 = new google.maps.Marker({
			position: PREMIUM_PROTECTION,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Детейлинг-студия PREMIUM PROTECTION'
		});
		var marker18 = new google.maps.Marker({
			position: CAR_FILM,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'CAR FILM '
		});

		var marker17 = new google.maps.Marker({
			position: zabiyan,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'ФОП Забіян Марина Олександрівна'
		});

		var marker16 = new google.maps.Marker({
			position: Auto_Style_Protection,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Auto Style Protection'
		});

		var marker15 = new google.maps.Marker({
			position: volt_12,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: '12volt г. Xарьков'
		});

		var marker14 = new google.maps.Marker({
			position: konkretno,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Чисто&Конкретно'
		});

		var marker13 = new google.maps.Marker({
			position: FaineAuto,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Файне Авто Тернополь'
		});

		var marker12 = new google.maps.Marker({
			position: Autoded,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Autoded г.Бердичев'
		});

		var marker11 = new google.maps.Marker({
			position: hameleon,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Студія автостайлінгу ХАМЕЛЕОН'
		});

		var marker10 = new google.maps.Marker({
			position: BOKS9,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: '9-BOKS г.Одесса'
		});

		var marker9 = new google.maps.Marker({
			position: Tonirovka03,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Tonirovka 03 г. Киев'
		});

		var marker8 = new google.maps.Marker({
			position: Autoupgrade,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Auto-upgrade г. Одесса '
		});
		var marker7 = new google.maps.Marker({
			position: TINT,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Студия автостайлинга TINT'
		});

		var marker1 = new google.maps.Marker({
			position: rest,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Restyling Тернопіль'
		});
		var marker2 = new google.maps.Marker({
			position: viplife,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Тюнинг-студия Виплайф'
		});
		var marker3 = new google.maps.Marker({
			position: avtoPoz,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Авто Позитив'
		});
		var marker4 = new google.maps.Marker({
			position: chemp,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Чемпіон, інсталяційний центр'
		});
		var marker5 = new google.maps.Marker({
			position: Bitstop,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Bitstop г.Киев'
		});
		var marker6 = new google.maps.Marker({
			position: Autofilmservice,
			map: map22,
			animation: google.maps.Animation.DROP,
			title: 'Autofilmservice г.Киев'
		});
	};