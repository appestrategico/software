
$(document).ready(function() {
    $('.header').load('menu.html');
});

function consultar(){
    var cedula = "";
    var url="http://appestrategico.online/prueba.php";
     $.ajax({
      type:"post",
      url:url,
      data:{cedula:cedula},
      success:function(datos){
        $("#formulario").html(datos);
    }

     })
     return true;
    }


