
$(document).ready(function () {
'use strict';
// 1er exo
var wordlist= new Object();        
let objectify = array => array.reduce( (object,[key,value]) => (object[key]=value,object), {} );

Promise.all([
    fetch('src/wordlist.txt',{
      method: "GET",
    })
  .then(file => file.text()),
  ]).then(([resp]) => {
  

  var cells = resp.split('\n').map(function (el) { return el.split(/\s+/); });
  wordlist = objectify(cells);
  // console.log(wordlist);
  getPass();
  });

//selection des 5 nombres qui compose la clé d'un mot
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function wordKey(){
  var listNumber = "";
  for(var i=0; i <5;i++ ){
    listNumber = listNumber + getRandomInt(1, 7);
      }
  listNumber = Number(listNumber);
  return listNumber;
  
}

// selection des mots
function getPass(){
  var key = 0;
  var pass = "";
  for(var i=0; i<5; i++){
    // créer une clé
    key = wordKey();
    pass= pass + wordlist[key];
    $("#pass").append(wordlist[key]);
  }
}

// 2eme exo
  document.querySelector("#btn-submit").addEventListener("click", function(event) {
      var name = document.getElementById("InputName").value;
      var email = document.getElementById("InputEmail").value;
      var price =  Number(document.getElementById("InputPrice").value);
      var tva =  (price*20)/100;
      var total = price + tva;

      // $(".info").append( "<p>libellé de prestation: "+ name +"</p></br><p>Email: "+ email +"</p></br><p>montant de prestation: "+ price +"€</p></br><p>TVA: "+ tva +"€</p></br><p>Total: "+ (total) +"€</p>" );
      $("#name").append(name);
      $("#email").append(email);
      $("#price").append(price);
      $("#tva").append(tva);
      $("#total").append(total);

      $("table").toggleClass("invisible").toggleClass("visible");
      event.preventDefault();
  });
});
