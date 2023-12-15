$(function(){
    $("#quantity").change(function(){
          $("#subtotal").val(parseInt($("#quantity").val()) * parseInt($("#price").val()));
      });
  });
  

  $(function(){
    $("#quantity_1").change(function(){
          $("#subtotal_1").val(parseInt($("#quantity_1").val()) * parseInt($("#price_1").val()));
      });
  });
  $(function(){
    $("#quantity,#quantity_1").change(function(){
        $("#grandtotal").val(parseInt($("#subtotal").val()) + parseInt($("#subtotal_1").val()));
      });
  });


