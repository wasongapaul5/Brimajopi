

// $(document).ready(function(){
//   $(".more p").hide();

//   $(".more img.one").click(function(){
//     $(".more p.one").toggle(1200);
//     $(".more img.one").toggle(1000);
//   });

//   $(".more p.one").click(function(){
//     $(".more img.one").toggle(1200);
//     $(".more p.one").toggle(1000);
//   });


//   $(".more img.two").click(function(){
//     $(".more p.two").toggle(1200);
//     $(".more img.two").toggle(1000);
//   });

//   $(".moreo p.two").click(function(){
//     $(".more img.two").toggle(1200);
//     $(".more p.two").toggle(1000);
//   });


//   $(".more img.three").click(function(){
//     $(".more p.three").toggle(1200);
//     $(".more img.three").toggle(1000);
//   });

//   $(".more p.three").click(function(){
//     $(".more img.three").toggle(1200);
//     $(".more p.three").toggle(1000);
//   });
  

//   $('.btn.order').click(function() {
//     var sizeOfPizza = $(".size option:selected").val();
//     var toppingsOfPizza = $(".toppings option:selected").val();
//     var crustOfPizza = $(".crust option:selected").val();
//     var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
//     var order = 1;
//     var grandTotal = 0;

//     $("table").show();
//     $(".add-buttons").show();
//     $(".btn.order").hide();

//     $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
//     $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
//     $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
//     $("#total").html(total);

//     function Pizza(size, toppings, crust, total, orderNo) {
//       this.size = size;
//       this.toppings = toppings;
//       this.crust = crust;
//       this.total = total;
//       this.orderNo = orderNo;
//     }


//     $('.btn.add-pizza').click(function() {
//       var sizeOfPizza = $(".size option:selected").val();
//       var toppingsOfPizza = $(".toppings option:selected").val();
//       var crustOfPizza = $(".crust option:selected").val();
//       var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
//       order = order + 1;
//       grandTotal = grandTotal + total;


//       var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

//       var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

//       $("#pizza").append(newRow);
//     });

//     $(".btn.check-out").click(function() {
//       $(".btn.add-pizza").hide();
//       $(".btn.check-out").hide();
//       $(".add-info").show();
//       $(".btn.yes").show();
//       $(".btn.no").show();
//       $(".add-info .loc").hide();
//       grandTotal = grandTotal + total;

//       $(".add-info h3 span").html(grandTotal);
//     });

//     $(".btn.yes").click(function() {
//       $(".add-info h5").hide();
//       $(".btn.yes").hide();
//       $(".btn.no").hide();
//       $(".add-info .loc").show();
//       $(".add-info h3 span").html(grandTotal + 200);
//     });

//     $(".btn.no").click(function() {
//       $(".add-info h5").hide();
//       $(".btn.yes").hide();
//       $(".btn.no").hide();
//       $(".add-info .loc").show();
//     });

//     $(".btn.complete").click(function() {
//       var loc = $(".add-info .loc input").val();
//       $(".add-info h4").show();
//       $(".add-info .loc").hide();
//       $(".add-info h4 span").html(loc);
//     });

//   });

// });
