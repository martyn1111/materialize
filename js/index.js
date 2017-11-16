
var data = [
    {
      "title": "Jose Martin Perez",
      "nombre": "Jose Martin Perez Cuevas",
      "extension":"561114",
      "correo": "info@coppel.com",
      "telefono": "656123456",
      "ubicacion": "La Lonja"
    },
    {
      "title": "Alejandro Sanchez",
      "nombre": "Alejandro Sanchez Oviedo",
      "extension":"561114",
      "correo": "info@coppel.com",
      "telefono": "677123456",
      "ubicacion": "La Lonja"
    },
    {
      "title": "Edvin Bravo",
      "nombre": "Edvin Bravo Sanchez",
      "extension":"561114",
      "correo": "info@coppel.com",
      "telefono": "6656123456",
      "ubicacion": "La Lonja"
    },
    {
      "title": "Humberto Rochin",
      "nombre": "Humberto Rochin Macias",
      "extension":"561114",
      "correo": "info@coppel.com",
      "telefono": "673123456",
      "ubicacion": "La Lonja"
    }];

function renderCards(data) {
    console.log("Entrando a renderCards: "+data);
    var html = '';
    $.each(data,function(key,value){
        html += '<div class="col s12 m4"><div class="card blue-grey darken-4"><div class="card-content white-text"><span class="card-title">'+ data.title+ '</span><p><t>Nombre:</t><t class="thick">' + data.nombre +'</t></p><p><t>Extensión:</t> <t class="thick">' + data.extension +'</t></p><p><t>Telefono:</t> <t class="thick">' + data.telefono +'</t></p><p><t>Correo:</t> <t class="thick">' + data.correo +'</t></p><p><t>Ubicación:</t> <t class="thick">' + data.ubicacion +'</t></p></div><div class="card-action"><a class = "light-blue-text " href="#">EDITAR</a></div></div></div>';
        console.log(html);
    });
    
}



  renderCards(data);
  
