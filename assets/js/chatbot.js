

$(document).ready(function(){
  $("#send").click(function(){
    var q = $("#text_value").val();
    var html_user = "<div class=\"message-human\"><div class=\"row\"><div class=\"img-human\"><img src=\"assets/img/user.png\" /></div><div class=\"message-human-c\">"+q+"</div></div></div>";
    var qb = "ohh no!! estamos experimentando problemas. Te sugiero que visites la sección PREGUNTAS FRECUENTES, que esta en el menu desplegable. mientras solucionamos el problema ";
    var html_bot = "<div class=\"message-bot\"><div class=\"row\"><div class=\"img-bot\"><img src=\"assets/img/ejecutivo.png\" /></div><div class=\"message-bot-c\">"+qb+"</div></div></div>";
    $("#add-msg").append(html_user + "<div style=\"clear:both;\"></div>" + html_bot);
    $('#main').animate({scrollTop: $('#main').prop("scrollHeight")}, 500);
    $("#text_value").val("");
  });
})