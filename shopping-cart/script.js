var playername1;
var playername2;
var playername3;
var playername4;
var playername5;
var playername6;
var players = 0;
var rounds = 0;
var purse = 0;
var entryFee = 0;
var totalPurse;
var serviceFee = 10;
var subFee = 0;
var prizeType;
var wallet1 = "100";
var wallet2;
var wallet3;
var wallet4;
var wallet5;
var wallet6;


function per(purse, fee) {

    var serviceCharge = (purse * fee) / 100;
    var servfee = purse - serviceCharge;
    var object = "Total Collected: $" + purse.toFixed(2) + "<br>";

    object += "Service Fee: " + fee + "%<br>";
    object += "Fee Collected: $" + serviceCharge.toFixed(2) + "<br>";

    object += "Total Prize Purse: $" + servfee.toFixed(2) + "<br>";

    document.getElementById('t1').innerHTML = object;


    rounds = document.getElementById('sel1').value;


    prizeType = document.getElementById('sel2').value;


    document.getElementById('rounds').innerHTML = rounds;


    if (prizeType == 1) {
        var prize1;


        document.getElementById('pursetype').innerHTML = "Winner Takes All $" + servfee.toFixed(2);

    }

    if (prizeType == 2) {
        var prize1 = (servfee * 50) / 100;
        var prize2 = (servfee * 50) / 100;

        document.getElementById('pursetype').innerHTML = "Top 2 50/50 <br/>First Place$" + prize1 + "<br/>Second Place: $" + prize2;

    }


    if (prizeType == 3) {
        var prize1 = (servfee * 50) / 100;
        var prize2 = (servfee * 30) / 100;
        var prize3 = (servfee * 20) / 100;




        document.getElementById('pursetype').innerHTML = "Top 3 50/30/20 <br/>First Place$" + prize1 + "<br/>Second Place: $" + prize2 + "<br/>Third Place: $" + prize3;

    }



    if (prizeType == 4) {

        var prize1 = (servfee * 50) / 100;
        var prize2 = (servfee * 30) / 100;
        var prize3 = (servfee * 15) / 100;
        var prize4 = (servfee * 5) / 100;





        document.getElementById('pursetype').innerHTML = "Top 3 50/30/15/5 <br/>First Place:$" + prize1 + "<br/>Second Place: $" + prize2 + "<br/>Third Place:$" + prize3 + "<br/>Fourth Place: $" + prize4;

    }

}

function doStuff(shirttoremove){
    shirttoremove.parentElement.parentElement.remove();
    var davemart = document.getElementsByClassName('shirtdiv').length;
    var remaining = document.getElementById('shirts').value = davemart;
    var remaining = Number(document.getElementById('shirts').value);
    var shirtQuantity = remaining;
    console.log(shirtQuantity);
    var shirtprice = shirtQuantity * 15;
    console.log(shirtprice);
    document.getElementById('t0').innerHTML = 'Subtotal: $' + shirtprice + '.00' + '<hr>';

    var discount = .2;
    var priceOff = shirtprice * discount;
    console.log(priceOff);
    document.getElementById('t1').innerHTML = 'Discount: $' + priceOff + '<hr>';


    var taxes = .08;




    var pretotal = shirtprice - priceOff;
    var taxtotal = pretotal * taxes;
    var total = pretotal + taxtotal;
    console.log(total);
    document.getElementById('t2').innerHTML = 'Taxes: $' + taxtotal + '<hr>';
    document.getElementById('t3').innerHTML = 'Total $' + total + '<button class="btn btn-success" onclick="PlayContest()" style="float: right;">Buy Now</button>';

   

    
}


function PlayerSlots() {

    var hide = document.getElementById('preview')
    hide.className = 'visible';
    var remaining = Number(document.getElementById('shirts').value);
    var shirtQuantity = remaining;
    console.log(shirtQuantity);
    var shirtprice = shirtQuantity * 15;
    console.log(shirtprice);
    document.getElementById('t0').innerHTML = 'Subtotal: $' + shirtprice + '.00' + '<hr>';

    var discount = .2;
    var priceOff = shirtprice * discount;
    console.log(priceOff);
    document.getElementById('t1').innerHTML = 'Discount: $' + priceOff + '<hr>';


    var taxes = .08;




    var pretotal = shirtprice - priceOff;
    var taxtotal = pretotal * taxes;
    var total = pretotal + taxtotal;
    console.log(total);
    document.getElementById('t2').innerHTML = 'Taxes: $' + taxtotal + '<hr>';
   document.getElementById('t3').innerHTML = 'Total $' + total + '<button class="btn btn-success" onclick="PlayContest()" style="float: right;">Buy Now</button>';


    



    var object = "";
    
    var selects = Number(document.getElementById("shirts").value);
    var selects2 = selects + 1;
    

    //var selectedText = selects.options[selects.selectedIndex].text; // gives u value2 

    

    var i = 0;


    document.getElementById('shirtlist').innerHTML = "   ";


    for (i = 0; i < selects; i++) {
       
        //addShirt = document.createElement('div')
        //addShirt.id = i + 1;
        //var shirts = document.getElementById('shirtlist');
        //shirts.appendChild(addShirt);
        //shirts.innerHTML = object;

        object += '<div class="row shirtdiv" class="visible" style="margin-bottom: 15px;"><hr />';
        object += '<div class="col-xs-2">';
        object += '<span><img src="shirt.jpg" width="50px" heigth="50px" style="margin-left: 10px;"></span>';
        object += '</div>';
        object += '<div class="col-xs-4">'
        object += '<form style="display: inline;"><select class="form-control" id="color" onchange="shirtColor()" style="margin-top: 5px">';
        object += '<option value="Red">Red</option>';
        object += '<option value="Blue">Blue</option>';
        object += '<option value="Blue">White</option>';
        object += '<option value="Blue">Gray</option>';
        object += '<option value="Blue">Green</option>';
        object += '<option value="Blue">Yellow</option>';
        object += '<option value="Blue">Orange</option>';
        object += '<option value="Blue">Black</option>';
        object += '</select></form>';
        object += '</div>';
        object += '<div class="col-xs-4">'
        object += '<form><select class="form-control" id="size" style="margin-top: 5px">';
        object += '<option value="Red">SM</option>';
        object += '<option value="Blue">M</option>';
        object += '<option value="Blue">L</option>';
        object += '<option value="Blue">XL</option>';
        object += '<option value="Blue">XXL</option>';
        object += '<option value="Blue">XXXL</option>';
        object += '</select></form>';
        object += '</div>';
        object += '<div class="col-xs-2"><a href="#" class="glyphicon glyphicon-trash" style="padding-left: 15px; padding-top: 15px;" onclick="doStuff(this)"></a></div>';
        object += '</div></div>';
        object += '</div>';
       
        
        
    }
    
        
    
         document.getElementById('shirtlist').innerHTML += object;

        
    }
        
  
       
       
        
    
    








