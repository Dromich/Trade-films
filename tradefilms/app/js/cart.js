$(function(){

   
    //##################################################### AddGoods START
    // функция добавления товара в корзину
    function AddGoods(id, title, price, link, amount){

        if(amount === undefined)
            amount = 1;

        var Goods = JSON.parse(localStorage.getItem("Goods"));

        // если в корзине НЕ ПУСТО
        if(Goods !== null){

            if(Goods[id] !== undefined){ // если товар с таким id уже есть в корзине
                alert("Етот товар уже в корзине");
            } else{

                //#####################################################
                GoodsInfo = {};
                GoodsInfo.title = title;
                GoodsInfo.price = price;
                GoodsInfo.link = link;
                GoodsInfo.amount = amount;
                Goods[id] = GoodsInfo;
                localStorage.setItem("Goods", JSON.stringify(Goods)); // заносим новый товар в память
                //#####################################################
				$(".listing-cart tr:last").after('<tr class="oneGoods row"><td class="col-md-6 col"><a href="'+link+'" data-goodsId="'+id+'">'+title+'</a></td><td class="col-md-2 col"><input type="number" name="" class="col goodsAmount" min="1" value="'+amount+'"></td><td class="col-md-3 col productPrice"><b>'+price+'</b><span> грн.</span></td><td class="col-1"><span class="removeGoods">☒</span></td></tr>');
				//$('form#teleform').prepend('<input type="hidden" class="tele_form_inp" name="'+title+'" id="tef'+id+'" value="'+amount+'" />');
			
			}
			
        
        // если в корзине ПУСТО
        } else{

            //#####################################################
            Goods = new Object();
            GoodsInfo = {};
            GoodsInfo.title = title;
            GoodsInfo.price = price;
            GoodsInfo.link = link;
            GoodsInfo.amount = amount;
            Goods[id] = GoodsInfo;
            localStorage.setItem("Goods", JSON.stringify(Goods)); // заносим новый товар в память
            //#####################################################
			$(".listing-cart tr:last").after('<tr class="oneGoods row"><td class="col-md-6 col"><a href="'+link+'" data-goodsId="'+id+'">'+title+'</a></td><td class="col-md-2 col"><input type="number" name="" class="col goodsAmount" min="1" value="'+amount+'"></td><td class="col-md-3 col productPrice"><b>'+price+'</b><span> грн.</span></td><td class="col-1"><span class="removeGoods">☒</span></td></tr>');
			//$('form#teleform').prepend('<input type="hidden" class="tele_form_inp" name="'+title+'" id="tef'+id+'" value="'+amount+'" />');
			
        }

        restartGoods();
    }
    //##################################################### AddGoods END

    // получение информации о товарах в корзине
    function GetGoods(){
		return JSON.parse(localStorage.getItem("Goods"));
		
    }
	
    //console.log(GetGoods()[1]["title"]);

    // получение количество товаров в корзине
    function CountGoods(){
        var counter = 0;
        for (var i in GetGoods())
            counter++;
        return counter;
    }

    // общая сумма всех товаров в корзине
    function AllMoneyGoods(){
        var sum = 0;
        for (var i in GetGoods()){
            sum = sum + (parseInt(GetGoods()[i]["amount"]) * parseFloat(GetGoods()[i]["price"]));
        }
        return sum;
    }

    // обновляем некоторую инфу в корзине
    function restartGoods(){
        // выводим количество товаров в корзине
        $("#cart .number_goods").html('<b>' + CountGoods() + "</b> шт.");
        // заносим общую сумму всех товаров в корзине
		$(".totalGoods b, #cart .total_amount b").text(AllMoneyGoods());
		$("#teleform_total").val(AllMoneyGoods()+"грн.");
        PreOrder();
    }

    //#####################################################
    // INIT
    // Оновлюєм корзину і форму телеграм після перезагрузки сторінки
    for (var i in GetGoods()){
		$(".listing-cart tr:last, .staticCart tr:last").after('<tr class="oneGoods row"><td class="col-md-6 col"><a href="'+GetGoods()[i]["link"]+'" data-goodsId="'+[i]+'">'+GetGoods()[i]["title"]+'</a></td><td class="col-md-2 col"><input type="number" name="" class="goodsAmount" min="1" value="'+GetGoods()[i]["amount"]+'"></td><td class="col-md-3 col productPrice"><b>'+GetGoods()[i]["price"]+'</b><span> грн.</span></td><td class="col-1"><span class="removeGoods">☒</span></td></tr>');
		//$('form#teleform').prepend('<input type="hidden" class="tele_form_inp" name="'+GetGoods()[i]["title"]+'" id="tef'+[i]+'" value="'+GetGoods()[i]["amount"]+'" />');
		
		
    }

    if(GetGoods() === null)
        $("#staticCart .action_button_cart").remove();

    restartGoods();
    // INIT END
    //#####################################################

    /*jQuery.each(productIsset, function() {
        if(this == id)
            tmpCount = 1;
    });*/

    

    // добавляем товар в корзину
    $("body").on("click", ".add_to_cart", function(){		

        id = $(this).attr("data-goodsId");
        productTitle = $(this).attr("data-goodsTitle");
        productPrice = $(this).attr("data-goodsPrice");
        productLink = $(this).attr("data-linck");
      
        AddGoods(id, productTitle, productPrice, productLink);
		
        return false;
    });

    // // открываем модальное окно
    // $("body").on("click", "#cart", function(){
    //     $("#bg_0, #modalCart").fadeIn("slow");
    //     $('html, body').animate({scrollTop: 0}, 700);
    //     return false;
    // })

    // // закрываем модальное окно
    // $("body").on("click", "#bg_0, .cartClose", function(){
    //     $("#bg_0, #modalCart").fadeOut("slow");
    //     return false;
    // })

    // очистка корзины
    $("body").on("click", ".cartClear", function(){
        localStorage.clear();
		$(".oneGoods").remove();
		$(".tele_form_inp").remove();
        $(".allPrice b").text("0");
        $("#cart .number_goods").html('<b>0</b> шт.');
        $(".totalGoods b, #cart .total_amount b").text('0');
        return false;
    })

    // удаление одного товара
    $("body").on("click", ".removeGoods", function(){
        var goodsId = $(this).parents("tr").find("a:first").attr("data-goodsId");

        Goods = GetGoods();
        delete Goods[goodsId];
        localStorage.setItem("Goods", JSON.stringify(Goods));
        //console.log(Goods);
		$(this).parents("tr").remove();
		$("#tef" + goodsId ).remove();
        restartGoods();
    })

    // пересчёт товаров при изменении их кол-во
    $('body').on("change keyup input click", ".goodsAmount", function() {
        //this.value
        var goodsId = $(this).parents("tr").find("a:first").attr("data-goodsId");
        var goodsPrice = $(this).parent().next().find("b").text();

        Goods = GetGoods();

        if(this.value == "")
            amount = 1;
        else
            amount = parseInt(this.value);

        newPriceOnetGoods = amount * parseFloat(goodsPrice); //

        Goods[goodsId]["amount"] = amount;
        //Goods[goodsId]["price"] = newPriceOnetGoods;

		console.log(amount + " * " + goodsPrice + " = " + newPriceOnetGoods);
		
		$("#tef" + goodsId).val(amount);
		
        localStorage.setItem("Goods", JSON.stringify(Goods));
        
        restartGoods();
    });

    // предзаказ
    function PreOrder(){
        productsId = "";
		productsAmount = "";
		productsTtl =""
        if(GetGoods() !== null){
            for (var i in GetGoods()){
                productsId = productsId + i + ",";
				productsAmount = productsAmount + GetGoods()[i]["amount"] + ",";
				productsTtl = productsTtl + GetGoods()[i]["title"] ;
            }
            if(productsId.length > 1)
                productsId = productsId.substring(0, productsId.length - 1);
            if(productsAmount.length > 1)
				productsAmount = productsAmount.substring(0, productsAmount.length - 1);

				/*if(productsTtl.length > 1)
				productsTtl = productsTtl.substring(0, productsTtl.length - 1);*/
				
            $("#my_products").val(productsId);
			$("#productsAmount").val(productsAmount);
			//$('form#teleform').append('<input type="hidden" name="'+productsTtl+'" id="'+productsId+'" value="'+productsAmount+'" />');
        }
    }

    PreOrder();

    
})