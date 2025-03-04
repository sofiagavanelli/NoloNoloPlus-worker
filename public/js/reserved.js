
var clientARRAY = [];
var inventoryARRAY = [];
var rentARRAY = [];
var WORKERINFO = [];
var total= 0.0;


$(document).ready(function() { //NOLEGGI
  
  $.ajax({
    type: 'GET',
      url: '/prods' ,
        success: function (data) {
  
          inventoryARRAY = JSON.parse(data);
          console.log(inventoryARRAY);
        },

        error: function (xhr, ajaxOptions, thrownError) {

        }
  });

})

$(document).ready(function() {  //CLIENTI
  
  $.ajax({
    type: 'GET',
      url: '/allClients' ,
        success: function (data) {
  
          clientARRAY = JSON.parse(data);
          console.log(clientARRAY);
        },

        error: function (xhr, ajaxOptions, thrownError) {

        }
  });

})

$(document).ready(function() {
  
  $.ajax({
    type: 'GET',
      url: '/allRents' ,
        success: function (data) {
  
          rentARRAY = JSON.parse(data);
          console.log(rentARRAY);

          lateRents(rentARRAY);
        },

        error: function (xhr, ajaxOptions, thrownError) {

        }
  });

})

/************************* */
//LOGIN DEL WORKER/MANAGER
function login(){

  _id = document.getElementById("userWorker").value;
  _pass = document.getElementById("passWorker").value;

  
  if(_id) {
      $.ajax({
          type: 'GET',
          url: '/worker/' + _id ,
          success: function (info) {

              WORKERINFO = JSON.parse(info);

              acceptWorker(WORKERINFO, _pass);


          },
          error: function (xhr, ajaxOptions, thrownError) {

          }
      });
  }
  else {

  }

}

function acceptWorker(data, insertedP) {

  for (let i in data) {

    if(data[i].password == insertedP) {

        if(data[i].manager == true) {
          document.getElementById("managBtn").disabled = false;
        }
        else if(document.getElementById("managCheck"))
        console.log("sono dentro");
        sessionStorage.setItem('isLogged', true);
        location.href = '/worker';

        var found = true;
    }
  }

  if (!found) 
      console.log("non esiste WORKER con questa accoppiata pass-nome");


}

function logOut(){
  sessionStorage.setItem('isLogged', false);
  location.href = '/login';

}

function is_logged(){

  let log = sessionStorage.getItem('isLogged');

  if(!log){
    location.href = '/login';
  }

}

/***************************** */
/*SIDEBAR -> CLIENTI */
function openClient() {
  $( "#ctable" ).empty();
  $( "#ctable2" ).empty();

  populate(clientARRAY);
  div = $(`
            <form class="example">
            <input type="text" id="clientId" placeholder="Cerca cliente..." name="search">
            <button class="form-btn" type="submit" onclick="searchClientID(id)"><i class="fa fa-search"></i></button>
            </form>

            `);
            $("#ctable").append(div);


  function populate(ClientInfo){

      for (let i in ClientInfo) {
          let div = null;

            div = $(`
                <div class="card" style="width: 17em; float: left; display: block; margin-left: 5em;">        
                  <img src="${ClientInfo[i].image}" style="height: 13em;"class="card-img-top" alt="...">              
                  <div class="card-body">              
                    <h5 class="card-title" style="text-align: center;">${ClientInfo[i].name} ${ClientInfo[i].surname}</h5>              
                    <p class="card-text" style="text-align: center;">ID: ${ClientInfo[i].client_id}</p>    
                    <div class="card-footer">  
                      <button id="${ClientInfo[i].client_id}" onclick= "modifyClient(clientARRAY,id)" class="btn-d">Altro..</button>       
                    </div>    
                  </div>             
                </div> 

            `);
            $("#ctable2").append(div);
}
} 
}
/***************************** */
/* SIDEBAR -> INVENTARIO */
function openInventory() {
 
  $( "#ctable" ).empty();
  $( "#ctable2" ).empty();

    populateP(inventoryARRAY);


    div = $(`
    <div class="flex-form-container"> 
    <button type="button" class="btn-cat" onclick="showYacht(inventoryARRAY)" style="margin-left: 2%;" data-bs-toggle="button">Yacht</button>
    <button type="button" class="btn-cat" onclick="showGomm(inventoryARRAY)" data-bs-toggle="button">Gommoni</button>
    <button type="button" class="btn-cat" onclick="showBarche(inventoryARRAY)" style="margin-right: 20%;"data-bs-toggle="button">Barche a remi</button>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ordina per </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" id="sortName" onclick= "SortNameR()">Nome</button>
        <button class="dropdown-item" type="button" id="sortPriceL" onclick= "SortPriceLow()">Prezzo: crescente</button>
        <button class="dropdown-item" type="button" id="sortPriceH" onclick= "SortPriceHigh()">Prezzo: decrescente</button>
        </div>
      </div>
      <input type="text" id="prodId" placeholder=" Cerca prodotto..." name="search">          
      <button class ="form-btn" type="submit" onclick="searchProd(id)"><i class="fa fa-search"></i></button> 
    </div>
    `);
    $("#ctable").append(div);
          
    function populateP(ProdInfo){
      for (let i in ProdInfo) { 
        let div = null;
              
        div = $(`     
        <div class="flex-container">
        <div class="card" style="width: 19em; float: left; display: block; margin-left: 3%; margin-top: 1em;">        
        <img src="${ProdInfo[i].image}" style=" widht: 10em; height: 10rem;"class="card-img-top" alt="...">              
        <div class="card-body">              
        <h5 class="card-title" style="text-align: center;">${ProdInfo[i].name}</h5>              
        <p class="card-text" style="text-align: center;">ID: ${ProdInfo[i].prod_id}</p>
        <p class="card-text">Brand: ${ProdInfo[i].brand} <br>
        Prezzo: ${ProdInfo[i].low_season}€ - ${ProdInfo[i].high_season}€</p>     
        <div class="card-footer">         
        <button class="btn-mod" id="${ProdInfo[i].prod_id}" onclick= "acceptProd(inventoryARRAY,id)">Altro..</button>             
        </div>    
        </div>             
        </div> 
        </div>           
        `);
        $("#ctable2").append(div);
  
      }      
    } 
}
/***************************** */
/*SIDEBAR -> NOLEGGI*/
function openRents() {
  $( "#ctable" ).empty();
  $( "#ctable2" ).empty();
       
  populate(rentARRAY);

  div = $(`   
  <div class="flex-form-container"> 
  <button type="button" class="btn-cat" onclick="pastRents(rentARRAY)" style="margin-left: 2%;" data-bs-toggle="button">Conclusi</button>
  <button type="button" class="btn-cat" onclick="activeRents(rentARRAY)" data-bs-toggle="button">Attivi</button>
  <button type="button" class="btn-cat" onclick="futureRents(rentARRAY)" style="margin-right: 20%;"data-bs-toggle="button">Futuri</button>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Ordina per </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button class="dropdown-item" type="button" id="sortName" onclick= "SortName()">Nome</button>
    <button class="dropdown-item" type="button" id="sortDate" onclick= "SortDate()">Data</button>
      </div>
    </div>
    <input type="text" id="rentId" placeholder=" Cerca noleggio..." name="search">          
  <button class ="form-btn" type="submit" onclick="searchRent(id)"><i class="fa fa-search"></i></button>
  </div>

  `);
              
  $("#ctable").append(div);
    
      
  function populate(RentInfo){
    
    for (let i in RentInfo) {
          
      let div = null;
      
            
      div = $(`

      <div class="flex-container">
        <div class="card" style="width: 23em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
          <div class="card-body">
            <h5 class="card-title">Numero noleggio: ${RentInfo[i]._id}</h5>
            <p class="card-text">ID Cliente: ${RentInfo[i].client_id}  
             <br> ID Prodotto: ${RentInfo[i].prod_id}<br></p>
            <p class="card-text">Data Inizio: ${RentInfo[i].start_date.slice(0,10)} <br> Data Fine: ${RentInfo[i].end_date.slice(0,10)}</p>
            <div class="card-footer">
              <button id="${RentInfo[i]._id}" onclick= "modifyRent(rentARRAY,id)" class="btn-mod" style=""> Altro..</button>
            </div>
          </div>
        </div> 
      </div>  `);
    $("#ctable2").append(div);
    }
  } 
}
     
/************************************/

/* RICERCA NOLEGGIO */
function searchRent(){

  _id = document.getElementById("rentId").value;
  if(_id) {
      $.ajax({
          type: 'GET',
          url: '/allRents/' + _id ,
          success: function (info) {
            //console.log(_id);
            //console.log("trovato");

            acceptRent(rentARRAY, _id);
          },
          error: function (xhr, ajaxOptions, thrownError) {

          }
      });
  }
  else {
//console.log("errore nell'else");
  }

}
function acceptRent(data, insertedID) {

  for (let i in data) {

    if(data[i]._id == insertedID) {
        //console.log("???????");
        $( "#ctable2" ).empty();
        $( "#ctable" ).empty();
        //console.log("sono dopo il vuoto");
        div = $(`         
        <button class="btn-back"onclick= "goBackRents()"><i class="fas fa-home"></i> NOLEGGI</button>
  `);
              
  $("#ctable").append(div);
        div = $(` 
        <div class="flex-container">
          <div class="card" style="width: 23em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
            <h5 class="card-title-new">NOLEGGIO: ${data[i]._id}</h5>
            <p class="card-text-new">ID Cliente: ${data[i].client_id} <br> ID Prodotto: ${data[i].prod_id}<br></p>
            <p class="card-text-new">Data inizio: ${data[i].start_date.slice(0,10)} <br> Data fine: ${data[i].end_date.slice(0,10)}</p>
            <button id="${data[i]._id}" onclick= "openAlertRents(id)" class="btn-d2"><i class="fas fa-trash-alt"></i> Cancella</button>
            <button class="btn-mod2"><i class="fas fa-wrench"></i> Modifica</button>
                
          </div>
        </div>
        
        `);
        $("#ctable2").append(div);
        //console.log("prooooovaaa");

        

        var found = true;
    }
  }

  if (!found) 
      console.log("non esiste noleggio");


}
/* RICERCA CLIENTE */
function searchClientID(){

  _id = document.getElementById("clientId").value;
  if(_id) {
      $.ajax({
          type: 'GET',
          url: '/allClients/' + _id ,
          success: function (info) {

            modifyClient(clientARRAY, _id);
          },
          error: function (xhr, ajaxOptions, thrownError) {

          }
      });
  }
  else {
console.log("errore nell'else");
  }

}

/* RICERCA PRODOTTO */
function searchProd(){

  _id = document.getElementById("prodId").value;
  if(_id) {
      $.ajax({
          type: 'GET',
          url: '/prods/' + _id ,
          success: function (info) {
            //console.log("sono in success");
            acceptProd(inventoryARRAY, _id);

          },
          error: function (xhr, ajaxOptions, thrownError) {

          }
      });
  }
  else {
  console.log("errore nell'else dell'inventario");
  }

}
function acceptProd(data, insertedID) {
  for (let i in data) {

    if(data[i].prod_id == insertedID) {
        $( "#ctable2" ).empty();
        $( "#ctable" ).empty();

      div = $(` 
      <div class="flex-container" style=" margin-left: 3%;">
        <img src="${data[i].image}" alt="" width="380" height="280">
        <div class="row g-3" style="width: 60%; position: relative; float: right; right: 3%;margin-bottom: 30%;">
          <div class="col-md-6">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="create2" id="name" name="name" value="${data[i].name}">
          </div>
          <div class="col-md-6">
            <label for="prod_id" class="form-label">ID Prodotto</label>
            <input type="text" class="create2" id="prod_id" name="prod_id" value="${data[i].prod_id}" style="cursor: not-allowed;" readonly="readonly">
          </div>
          <div class="col-md-6">
            <label for="brand" class="form-label">Brand</label>
            <input type="text" class="create2" id="brand" name="brand" value="${data[i].brand}">
          </div>
          <div class="col-md-6">
          <label for="category" class="form-label">Categoria</label>
          <input type="text" class="create2" id="category" name="category" value="${data[i].category}" >
          </div>
          <div class="col-md-6">
            <label for="low_season" class="form-label">Prezzo Bassa Stagione</label>
            <input type="text" class="create2" id="low_season" name="low_season" value="${data[i].low_season}">
          </div>
          <div class="col-md-6">
            <label for="high_season" class="form-label">Prezzo Alta Stagione</label>
            <input type="text" class="create2" id="high_season" name="high_season" value="${data[i].high_season}">
          </div>
          <div class="col-md-4">
            <label for="status" class="form-label">Stato </label> <button type="button" class="btn-postit" button title="La prima opzione corrisponde allo stato attuale del prodotto" ><i class="fas fa-info-circle"></i></button>
            <select class="create2" id="status" name="status" aria-label="Select status">
            <option selected value="${data[i].status}">${data[i].status}</option>
              <option value="ottimo">ottimo</option>
              <option value="buono">buono</option>
              <option value="rovinato">rovinato</option>
              <option value="rotto">rotto</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="length" class="form-label">Lunghezza</label>
            <input type="text" class="create2" id="length" name="length" value="${data[i].length}">
            </div>
          <div class="col-md-2">
            <label for="guest" class="form-label">Ospiti</label>
            <input type="text" class="create2" id="guest" name="guest" value="${data[i].guests}">
          </div>
          <div class="col-md-2">
            <label for="year" class="form-label">Anno</label>
            <input type="text" class="create2" id="year" name="year" value="${data[i].year}">
          </div>
          <div class="col-md-2">
            <label for="speed" class="form-label">Velocità</label>
            <input type="text" class="create2" id="speed" name="speed" value="${data[i].speed}">
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label for="summary" class="form-label">Descrizione prodotto</label>
              <input type="text" class="create2" id="summary" name="summary" value="${data[i].summary}"></input>
            </div>
          </div>
          <div class="col-12">
          <div class="col-md-2" style="visibility:hidden;">
            <input type="text" class="create2" id="product" value="${data[i].prod_id}">
          </div>
        </div>

        <div class="d-flex" style="flex-direction: row;">
        <button class="btn-sub" onclick="approveProd()">Aggiorna</button>  <i id="smile" class="fas fa-check fa-2x" style="color: green; visibility: hidden; margin-left: 2%; "></i>
        <button id="${data[i].prod_id}" onclick= "deleteProd(id)" class="btn-sub"><i class="fas fa-trash-alt"></i>  Elimina</button>
    
        ${data[i].status != "rotto" ? `<button id="btn-un" onclick="unavailable()" class="btn-sub" style=" width: 12em;"><i class="fas fa-ban"></i>  Rendi Indisponibile</button>
        `: ""}
        ${data[i].status == "rotto" ? `<button id="btn-av" onclick="available()" class="btn-sub" style=" width: 12em; visibility: visible;"><i class="far fa-thumbs-up"></i>  Rendi Disponibile</button>
        `:""}
        </div>

      </div>
       
      `);
      $("#ctable2").append(div);

        var found = true;
    }
  }

  if (!found) 
    console.log("non esiste prodotto");
}

/***************************** */
/*FUNZIONI PER ELIMINAZIONE */

/*ELIMINAZIONE NOLEGGIO */
function deleteRents(idR) {

  if(idR) {
    $.ajax({
    type: 'DELETE',
    url: '/allRents/' + idR ,
    success: function (data) {
      openRents();

    },
    error: function (xhr, ajaxOptions, thrownError) {

    }
    });
  }
  
}
/*ELIMINAZIONE CLIENTE */
function deleteClient(idDel) {

  if(idDel) {
    $.ajax({
    type: 'DELETE',
    url: '/allClients/' + idDel ,
    success: function (data) {
      openClient();
    },
    error: function (xhr, ajaxOptions, thrownError) {

    }
    });
  }
  
}

/*ELIMINAZIONE PRODOTTO */
function deleteProd(idP) {

  if(idP) {
    $.ajax({
    type: 'DELETE',
    url: '/prods/' + idP ,
    success: function (data) {
      openInventory();

    },
    error: function (xhr, ajaxOptions, thrownError) {

    }
    });
  }
  
}

/***************************** */
/*FUNZIONI ORDINAMENTO */

/*ORDINE ALFABETICO PER ID CLIENTE DEI NOLEGGI*/
function SortName(){   
rentARRAY.sort((a,b) => (a.client_id > b.client_id) ? 1 : ((b.client_id > a.client_id) ? -1 : 0))

$( "#ctable" ).empty();
$( "#ctable2" ).empty();

div = $(`         
<div class="flex-form-container"> 
<button type="button" class="btn-cat" onclick="pastRents(rentARRAY)" style="margin-left: 2%;" data-bs-toggle="button">Conclusi</button>
<button type="button" class="btn-cat" onclick="activeRents(rentARRAY)" data-bs-toggle="button">Attivi</button>
<button type="button" class="btn-cat" onclick="futureRents(rentARRAY)" style="margin-right: 20%;"data-bs-toggle="button">Futuri</button>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ordina per </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button" id="sortName" onclick= "SortName()">Nome</button>
  <button class="dropdown-item" type="button" id="sortDate" onclick= "SortDate()">Data</button>
    </div>
  </div>
  <input type="text" id="rentId" placeholder="Cerca prodotto..." name="search">          
<button class ="form-btn" type="submit" onclick="searchRent(id)"><i class="fa fa-search"></i></button>
</div>

`);
            
$("#ctable").append(div);
for (let i in rentARRAY) {
          
  let div = null;
  
        
  div = $(`
  <div class="flex-container">
  <div class="card" style="width: 23em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
    <div class="card-body">
      <h5 class="card-title">Numero noleggio: ${rentARRAY[i]._id}</h5>
      <p class="card-text">ID Cliente: ${rentARRAY[i].client_id} <br> ID Prodotto: ${rentARRAY[i].prod_id}<br></p>
      <p class="card-text">Data Inizio: ${rentARRAY[i].start_date.slice(0,10)} <br> Data Fine: ${rentARRAY[i].end_date.slice(0,10)}</p>
      <button id="${rentARRAY[i]._id}" onclick= "modifyRent(rentARRAY,id)"class="btn-mod"> Altro..</button>
    </div>
  </div> 
</div>  
          `);
           $("#ctable2").append(div);
         
     } 
}
/*ORDINE DATA CRESCENTE NOLEGGI */
function SortDate(){   //ordina in base alla data

  rentARRAY.sort(function compare(a, b) {
    var dateA = new Date(a.start_date);
    var dateB = new Date(b.start_date);
    return dateA - dateB;
  });

$( "#ctable" ).empty();
$( "#ctable2" ).empty();


div = $(`         
<div class="flex-form-container"> 
<button type="button" class="btn-cat" onclick="pastRents(rentARRAY)" style="margin-left: 2%;" data-bs-toggle="button">Conclusi</button>
<button type="button" class="btn-cat" onclick="activeRents(rentARRAY)" data-bs-toggle="button">Attivi</button>
<button type="button" class="btn-cat" onclick="futureRents(rentARRAY)" style="margin-right: 20%;"data-bs-toggle="button">Futuri</button>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ordina per </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button" id="sortName" onclick= "SortName()">Nome</button>
  <button class="dropdown-item" type="button" id="sortDate" onclick= "SortDate()">Data</button>
    </div>
  </div>
  <input type="text" id="rentId" placeholder=" Cerca prodotto..." name="search">          
<button class ="form-btn" type="submit" onclick="searchRent(id)"><i class="fa fa-search"></i></button>
</div>

`);
            
$("#ctable").append(div);
for (let i in rentARRAY) {
          
  let div = null;
  
        
  div = $(`
  <div class="flex-container">
  <div class="card" style="width: 23em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
    <div class="card-body">
      <h5 class="card-title">Numero noleggio: ${rentARRAY[i]._id}</h5>
      <p class="card-text">ID Cliente: ${rentARRAY[i].client_id} <br> ID Prodotto: ${rentARRAY[i].prod_id}<br></p>
      <p class="card-text">Data Inizio: ${rentARRAY[i].start_date.slice(0,10)} <br> Data Fine: ${rentARRAY[i].end_date.slice(0,10)}</p>
      <button id="${rentARRAY[i]._id}" onclick= "modifyRent(rentARRAY,id)"class="btn-mod"> Altro..</button>
    </div>
  </div> 
</div>    `);
 $("#ctable2").append(div);
         
     } 
}

/*ORDINE ALFABETICO DEI PRODOTTI NELL'INVENTARIO */
function SortNameR(){   //ordine alfabetico dei prodotti
inventoryARRAY.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
$( "#ctable" ).empty();
$( "#ctable2" ).empty();


div = $(`  
<div class="flex-form-container"> 
    <button type="button" class="btn-cat" onclick="showYacht(inventoryARRAY)" style="margin-left: 2%;" data-bs-toggle="button">Yacht</button>
    <button type="button" class="btn-cat" onclick="showGomm(inventoryARRAY)" data-bs-toggle="button">Gommoni</button>
    <button type="button" class="btn-cat" onclick="showBarche(inventoryARRAY)" style="margin-right: 20%;"data-bs-toggle="button">Barche a remi</button>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ordina per </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" id="sortName" onclick= "SortNameR()">Nome</button>
        <button class="dropdown-item" type="button" id="sortPriceL" onclick= "SortPriceLow()">Prezzo: crescente</button>
        <button class="dropdown-item" type="button" id="sortPriceH" onclick= "SortPriceHigh()">Prezzo: decrescente</button>
        </div>
      </div>
      <input type="text" id="prodId" placeholder=" Cerca prodotto..." name="search">          
      <button class ="form-btn" type="submit" onclick="searchProd(id)"><i class="fa fa-search"></i></button> 
    </div>      
`);
            
$("#ctable").append(div);
for (let i in inventoryARRAY) {
          
  let div = null;
  
        
  div = $(`
  <div class="card" style="width: 19em; float: left; display: block; margin-left: 3%;">        
  <img src="${inventoryARRAY[i].image}" style=" widht: 10em; height: 10rem;"class="card-img-top" alt="...">             
  <div class="card-body">              
  <h5 class="card-title" style="text-align: center;">${inventoryARRAY[i].name}</h5>              
  <p class="card-text" style="text-align: center;">ID: ${inventoryARRAY[i].prod_id}</p>
  <p class="card-text">Brand: ${inventoryARRAY[i].brand} <br>
  Prezzo: ${inventoryARRAY[i].low_season}€ - ${inventoryARRAY[i].high_season}€</p>              
  <button class="btn-mod" id="${inventoryARRAY[i].prod_id}" onclick= "acceptProd(inventoryARRAY,id)">Altro..</button>             
  </div>             
  </div>  
        `);
   $("#ctable2").append(div);
         
 } 
}

/*ORDINE PREZZO CRESCENTE PRODOTTI */
function SortPriceHigh(){   //ordina in base al prezzo crescente
  inventoryARRAY.sort((a, b) => {
   return parseFloat(b.low_season) - parseFloat(a.low_season);
 });

$( "#ctable" ).empty();
$( "#ctable2" ).empty();


div = $(`         
<div class="flex-form-container"> 
    <button type="button" class="btn-cat" onclick="showYacht(inventoryARRAY)" style="margin-left: 2%;" data-bs-toggle="button">Yacht</button>
    <button type="button" class="btn-cat" onclick="showGomm(inventoryARRAY)" data-bs-toggle="button">Gommoni</button>
    <button type="button" class="btn-cat" onclick="showBarche(inventoryARRAY)" style="margin-right: 20%;"data-bs-toggle="button">Barche a remi</button>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ordina per </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" id="sortName" onclick= "SortNameR()">Nome</button>
        <button class="dropdown-item" type="button" id="sortPriceL" onclick= "SortPriceLow()">Prezzo: crescente</button>
        <button class="dropdown-item" type="button" id="sortPriceH" onclick= "SortPriceHigh()">Prezzo: decrescente</button>
        </div>
      </div>
      <input type="text" id="prodId" placeholder=" Cerca prodotto..." name="search">          
      <button class ="form-btn" type="submit" onclick="searchProd(id)"><i class="fa fa-search"></i></button> 
    </div>
`);
            
$("#ctable").append(div);
for (let i in inventoryARRAY) {
          
  let div = null;
  
        
  div = $(`
  <div class="card" style="width: 19em; float: left; display: block; margin-left: 3%;">        
  <img src="${inventoryARRAY[i].image}" style=" widht: 10em; height: 10rem;"class="card-img-top" alt="...">              
  <div class="card-body">              
  <h5 class="card-title" style="text-align: center;">${inventoryARRAY[i].name}</h5>              
  <p class="card-text" style="text-align: center;">ID: ${inventoryARRAY[i].prod_id}</p>
  <p class="card-text">Brand: ${inventoryARRAY[i].brand} <br>
  Prezzo: ${inventoryARRAY[i].low_season}€ - ${inventoryARRAY[i].high_season}€</p>              
  <button class="btn-mod" id="${inventoryARRAY[i].prod_id}" onclick= "acceptProd(inventoryARRAY,id)">Altro..</button>              
  </div>             
  </div>    
       `);
   $("#ctable2").append(div);
         
     } 
}
/*ORDINE PREZZO DECRESCENTE PRODOTTI */
function SortPriceLow(){   //ordina in base al prezzo decrescente
  inventoryARRAY.sort((a, b) => {
   return parseFloat(a.low_season) - parseFloat(b.low_season);
 });

$( "#ctable" ).empty();
$( "#ctable2" ).empty();


div = $(`         
<div class="flex-form-container"> 
    <button type="button" class="btn-cat" onclick="showYacht(inventoryARRAY)" style="margin-left: 2%;" data-bs-toggle="button">Yacht</button>
    <button type="button" class="btn-cat" onclick="showGomm(inventoryARRAY)" data-bs-toggle="button">Gommoni</button>
    <button type="button" class="btn-cat" onclick="showBarche(inventoryARRAY)" style="margin-right: 20%;"data-bs-toggle="button">Barche a remi</button>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ordina per </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button" id="sortName" onclick= "SortNameR()">Nome</button>
        <button class="dropdown-item" type="button" id="sortPriceL" onclick= "SortPriceLow()">Prezzo: crescente</button>
        <button class="dropdown-item" type="button" id="sortPriceH" onclick= "SortPriceHigh()">Prezzo: decrescente</button>
        </div>
      </div>
      <input type="text" id="prodId" placeholder=" Cerca prodotto..." name="search">          
      <button class ="form-btn" type="submit" onclick="searchProd(id)"><i class="fa fa-search"></i></button> 
    </div> 
`);
            
$("#ctable").append(div);
for (let i in inventoryARRAY) {
          
  let div = null;
  
        
  div = $(`
  <div class="card" style="width: 19em; float: left; display: block; margin-left: 3%;">        
  <img src="${inventoryARRAY[i].image}" style=" widht: 10em; height: 10rem;"class="card-img-top" alt="...">              
  <div class="card-body">              
  <h5 class="card-title" style="text-align: center;">${inventoryARRAY[i].name}</h5>              
  <p class="card-text" style="text-align: center;">ID: ${inventoryARRAY[i].prod_id}</p>
  <p class="card-text">Brand: ${inventoryARRAY[i].brand} <br>
  Prezzo: ${inventoryARRAY[i].low_season}€ - ${inventoryARRAY[i].high_season}€</p>              
  <button class="btn-mod" id="${inventoryARRAY[i].prod_id}" onclick= "acceptProd(inventoryARRAY,id)">Altro..</button>              
  </div>             
  </div>    
       `);
   $("#ctable2").append(div);
         
     } 
}

///////////////////////////////////////////////////////////////////////
///FILTRI CATEGORIA

//FILTRO YACHT
function showYacht(data){

  $( "#ctable2" ).empty();
  $( "#ctable" ).empty();

  div = $(`         
    <button class="btn-back"onclick= "goBackInventory()"><i class="fas fa-home"></i> PRODOTTI</button>
        `);
  $("#ctable").append(div);

  for (let i in data) {
    console.log(data[i].category);
    if(data[i].category=="yacht"){
      console.log(data[i].name);
      let div = null;
        div = $(` 
          <div class="card" style="width: 19em; float: left; display: block; margin-left: 3%;">        
            <img src="${data[i].image}" style=" widht: 10em; height: 10rem;"class="card-img-top" alt="...">              
            <div class="card-body">              
              <h5 class="card-title" style="text-align: center;">${data[i].name}</h5>              
              <p class="card-text" style="text-align: center;">ID: ${data[i].prod_id}</p>
              <p class="card-text">Brand: ${data[i].brand} <br>
              Prezzo: ${data[i].low_season}€ - ${data[i].high_season}€</p>     
              <div class="card-footer">         
              <button class="btn-mod" id="${data[i].prod_id}" onclick= "acceptProd(inventoryARRAY,id)">Altro..</button>             
              </div>    
            </div>             
          </div>  `);
         $("#ctable2").append(div);

         var found = true;
    }

  }
  if (!found) 
    console.log("non esiste prodotto");
  

}
//FILTRO GOMMONI
function showGomm(data){

  $( "#ctable2" ).empty();
  $( "#ctable" ).empty();

  div = $(`         
    <button class="btn-back"onclick= "goBackInventory()"><i class="fas fa-home"></i> PRODOTTI</button>
        `);
  $("#ctable").append(div);

  for (let i in data) {
    console.log(data[i].category);
    if(data[i].category=="gommoni"){
      console.log(data[i].name);
      let div = null;
        div = $(` 
          <div class="card" style="width: 19em; float: left; display: block; margin-left: 3%;">        
            <img src="${data[i].image}" style=" widht: 10em; height: 10rem;"class="card-img-top" alt="...">              
            <div class="card-body">              
              <h5 class="card-title" style="text-align: center;">${data[i].name}</h5>              
              <p class="card-text" style="text-align: center;">ID: ${data[i].prod_id}</p>
              <p class="card-text">Brand: ${data[i].brand} <br>
              Prezzo: ${data[i].low_season}€ - ${data[i].high_season}€</p>     
              <div class="card-footer">         
                <button class="btn-mod" id="${data[i].prod_id}" onclick= "acceptProd(inventoryARRAY,id)">Altro..</button>             
              </div>    
            </div>             
          </div>  `);
         $("#ctable2").append(div);

         var found = true;
    }

  }
  if (!found) 
    console.log("non esiste prodotto");
  

}
//FILTRO BARCHE
function showBarche(data){

  $( "#ctable2" ).empty();
  $( "#ctable" ).empty();

  div = $(`         
    <button class="btn-back"onclick= "goBackInventory()"><i class="fas fa-home"></i> PRODOTTI</button>
        `);
  $("#ctable").append(div);

  for (let i in data) {
    console.log(data[i].category);
    if(data[i].category=="barca"){
      console.log(data[i].name);
      let div = null;
        div = $(` 
          <div class="card" style="width: 19em; float: left; display: block; margin-left: 3%;">        
            <img src="${data[i].image}" style=" widht: 10em; height: 10rem;"class="card-img-top" alt="...">              
            <div class="card-body">              
              <h5 class="card-title" style="text-align: center;">${data[i].name}</h5>              
              <p class="card-text" style="text-align: center;">ID: ${data[i].prod_id}</p>
              <p class="card-text">Brand: ${data[i].brand} <br>
              Prezzo: ${data[i].low_season}€ - ${data[i].high_season}€</p>     
              <div class="card-footer">         
                <button class="btn-mod" id="${data[i].prod_id}" onclick= "acceptProd(inventoryARRAY,id)">Altro..</button>             
              </div>    
            </div>             
          </div>  `);
         $("#ctable2").append(div);

         var found = true;
    }

  }
  if (!found) 
    console.log("non esiste prodotto");
  

}

///AGGIUNTA DI UN NUOVO PRODOTTO
function addProduct() {           
  $( "#ctable" ).empty();
  $( "#ctable2" ).empty();

  div = $(`         
  <button class="btn-back"onclick= "goBackInventory()"><i class="fas fa-home"></i> PRODOTTI</button>
  `);
$("#ctable").append(div);

div = $(` 
      <div class="flex-container" style=" margin-left: 6%;">
      <h1>Aggiungi Prodotto</h1>
        <form class="row g-3" action="/new-prod" method="POST" role="form" style="width: 85%;">
          <div class="col-md-6">
            <label for="inputName" class="form-label">Nome</label>
            <input type="text" class="create2" id="inputName" name="name" placeholder="Inserisci nome">
          </div>
          <div class="col-md-6">
            <label for="id_prod" class="form-label">ID Prodotto</label>
            <input type="text" class="create2" id="id_prod" name="product" placeholder="Inserisci ID">
          </div>
          <div class="col-md-6">
            <label for="inputBrand" class="form-label">Brand</label>
            <input type="text" class="create2" id="inputBrand" name="brand" placeholder="Inserisci brand">
          </div>
          <div class="col-md-6">
          <label for="inputCat" class="form-label">Categoria</label>
          <input type="text" class="create2" id="inputCat" name="category" placeholder="Inserisci categoria">
          </div>
          <div class="col-md-6">
            <label for="inputLow" class="form-label">Prezzo Bassa Stagione</label>
            <input type="text" class="create2" id="inputLow" name="lowseason" placeholder="Inserisci prezzo bassa stagione">
          </div>
          <div class="col-md-6">
            <label for="inputHigh" class="form-label">Prezzo Alta Stagione</label>
            <input type="text" class="create2" id="inputHigh" name="highseason" placeholder="Inserisci prezzo alta stagione">
          </div>
          <div class="col-md-4">
          <label for="inputStatus" class="form-label">Stato</label>
          <select class="create2" id="inputStatus" name="stato" aria-label="Select status" >
            <option value="ottimo">ottimo</option>
            <option value="buono">buono</option>
            <option value="rovinato">rovinato</option>
            <option value="rotto">rotto</option>
          </select>
        </div>
          <div class="col-md-2">
            <label for="inputLen" class="form-label">Lunghezza</label>
            <input type="text" class="create2" id="inputLen" name="length" placeholder="lunghezza">
          </div>
          <div class="col-md-2">
            <label for="inputGuest" class="form-label">Ospiti</label>
            <input type="text" class="create2" id="inputGuest" name="guests" placeholder="ospiti">
          </div>
          <div class="col-md-2">
            <label for="inputYear" class="form-label">Anno</label>
            <input type="text" class="create2" id="inputYear" name="year" placeholder="anno">
          </div>
          <div class="col-md-2">
            <label for="inputSpeed" class="form-label">Velocità</label>
            <input type="text" class="create2" id="inputSpeed" name="speed" placeholder="velocità">
          </div>
          <div class="col-12">
            <label for="img" class="form-label">Carica foto: </label>
            <input type="text" class="create2" id="img" name="img" placeholder="Immetti url">
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label for="summary" class="form-label">Descrizione prodotto</label>
              <input class="create2" id="summary" rows="3" name="summary" placeholder="Inserisci una breve descrizione"></input>
            </div>
          </div>
          <div class="col-12">
            <button class="btn-sub" onclick="approveProd()" style="position: relative; float:right;">Aggiungi</button>  <i id="smile" class="fas fa-check fa-2x" style="color: green; visibility: hidden; position: relative; float: right; margin-right: 1em; "></i>
            <div id ="alert_img" class="alert alert-danger" role="alert" style="width: 30em; position: relative; float: left;">
            RICORDA: per aggiungere un nuovo prodotto, prima inserire immagine nel database  
            </div>
          </div>
        </div>
      </div>
       
      `);
      $("#ctable2").append(div);
}
////AGGIUNTA NUOVO NOLEGGIO
function openCreate(){
  var x;
  $( "#ctable" ).empty();
  $( "#ctable2" ).empty();

  div = $(`    
  <div class="testbox">
    <h1>Crea Noleggio</h1>
    <div>
      <p>ID Cliente</p>
      <div >
        <input class="create2" type="text" name="client" id="client" placeholder="Inserisci ID cliente">
      </div>
    </div>
    <div>
      <p>ID Prodotto</p>
      <input class="create2" type="text" name="product" id="prod" placeholder="Inserisci ID prodotto">
    </div>
    <div>
      <div >
        <p>ID Dipendente</p>
        <input class="create2" type="text" name="worker" id="worker" placeholder="Inserisci ID dipendente">
      </div>
      <div >
        <p>Prezzo  <button class="btn-postit" onclick="calc()"><i class="fas fa-calculator fa-lg"></i></button></p>
        <input id="rentprice" class="create2" name="price" readonly="readonly">
      </div>
      <div >
        <label for="rentdiscount"> Sconto applicato </label>
        <input id="rentdiscount" class="create2" name="discount" readonly="readonly"> 
      </div>
    </div>
    
    <div style="display: flex; justify-content: space-between; margin-top: 1em;">
      <p>Data Inizio</p>
      <p style="position: relative; left: -38%;">Data Fine</p></div>
      <div class="item-2"> 

      <input id="data_inizio" type="date" name="start" class="create2" style="float: left; width: 45%;"/><i class="far fa-calendar-alt fa-lg"></i>
      <input id="data_fine" type="date" name="end" class="create2" style="float: right; position: relative; right: 1%; width: 45%;"/><i class="far fa-calendar-alt fa-lg" style="left: 47%;"></i>
    </div>
    <div class="col-md-6" style="margin-left: -1em; visibility: hidden;">
      <input class="create2" type="text" name="approved" id="approved" placeholder="Inserisci ID dipendente" value="true">
    </div>
    <div class="btn-block">
      <button class="btn-sub" onclick="approveRent()" id="btn-saveRent" disabled>Crea</button>  <i id="smile" class="fas fa-check fa-2x" style="color: green; visibility: hidden; margin-left: 2%; "></i>
    </div>
</div>
  
`);
$("#ctable2").append(div);
}


//FUNZIONE CHE CALCOLA IL PREZZO
function calc(){
  var inizioN = new Date(document.getElementById("data_inizio").value);
  var fineN = new Date(document.getElementById("data_fine").value);
  var ID_prod = document.getElementById("prod").value;

  var myprod = [];

  var ggMS= fineN - inizioN;
  var gg = (ggMS/(1000 * 60 * 60 * 24)) + 1;
  var price_day;
  var discount = 0;

  inventoryARRAY.forEach(i => {
    if(i.prod_id == ID_prod) {
      price_day = gg*i.low_season; 
      myprod = i;
    }
});
  total=price_day;
  var highDays = defineSeason(gg);
  var temp = (myprod.high_season * (highDays)) + (myprod.low_season * (gg - highDays));

  if(myprod.status != "rotto" && controlDate()) {

    if(myprod.status == "buono") {
      temp = temp - (temp*5/100);

      discount = discount + 5;
    }
    else if(myprod.status == "rovinato") {
      temp = temp - (temp*10/100);

      discount = discount + 10;
    }

    document.getElementById("rentprice").value = temp;
    document.getElementById("rentdiscount").value = discount;

    $("#btn-saveRent").removeAttr('disabled');

  }
  else if(myprod.status == "rotto"){
      document.getElementById("rentprice").value = "prodotto non disponibile";
    }
  else{
    document.getElementById("rentprice").value = "data non disponibile";}
  //console.log("PRODOTTO NOLEGGIATO IN QUESTE DATE: CHE FARE?");

  //document.getElementById("rentprice").value = total;
  //return({price_day, discount});
  document.getElementById("get_price").style.visibility = "visible";
  
}
function controlDate() {

  console.log("sono dentro controldate");

  var noleggi = [];
  var k = 0;

  var ID_prod = document.getElementById("prod").value;

  rentARRAY.forEach(item => {

    if(item.prod_id == ID_prod) {
      noleggi[k] = item;
      k++;
    }

  });

  var myrent_sdate = new Date(document.getElementById("data_inizio").value);
  var myrent_edate = new Date(document.getElementById("data_fine").value);

  var disponibile = true;

  noleggi.forEach(item => {

    if(!item.deleted) { //se il noleggio che si sta guardando è stato eliminato allora le sue date NON vanno considerate come occupate

      var checked_start = new Date(item.start_date);
      var checked_end = new Date(item.end_date);

      if((myrent_sdate >= checked_start && myrent_sdate <= checked_end) ||
        (myrent_edate >= checked_start&& myrent_edate <= checked_end) || 
        (myrent_sdate <= checked_start && myrent_edate >= checked_start) ) {

          disponibile = false;
      }

    }

  })

  console.log("dentro è:" + disponibile);

  return(disponibile);

}
function defineSeason(i){
  var Hdays = 0;
    var date = new Date(document.getElementById("data_inizio").value);

    while (i>0) {

      if (date.getMonth() >= 5 && date.getMonth() <= 9) { 
        /*NOTA BENE: I MESI PARTONO DA 0 QUINDI MAGGIO=4 E SETTEMBRE=8*/
        Hdays = Hdays + 1;
      }

      date.setDate(date.getDate() + 1);

      i--;

    }

    return(Hdays);

}

///NOLEGGI PER CLIENTE
function searchRentByClient(_id){

  if(_id) {
      $.ajax({
          type: 'GET',
          url: '/user-rentals/' + _id ,
          success: function (info) {
            console.log(_id);
            console.log("trovato");

            found(rentARRAY, _id);
          },
          error: function (xhr, ajaxOptions, thrownError) {

          }
      });
  }
  else {
    console.log("errore nell'else");
  }

}
function found(data, insertedID) {
  console.log(insertedID);

  for (let i in data) {
    if(data[i].client_id==insertedID) {
        $( "#ctable2" ).empty();
        $( "#ctable" ).empty();
        div = $(`         
        <button class="btn-back"onclick= "goBackRents()"><i class="fas fa-home"></i> NOLEGGI</button>
        `);            
        $("#ctable").append(div);

        div = $(` 
        <div class="flex-container">
          <div class="card" style="width: 20em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
            <div class="card-body">
              <h5 class="card-title">Numero noleggio: ${data[i]._id}</h5>
              <p class="card-text">ID Cliente: ${data[i].client_id}  
              <br> ID Prodotto: ${data[i].prod_id}<br></p>
              <p class="card-text">Data Inizio: ${data[i].start_date.slice(0,10)} <br> Data Fine: ${data[i].end_date.slice(0,10)}</p>
              <button id="${data[i]._id}" onclick= "modifyRent(rentARRAY,id)"class="btn-mod"> Altro..</button>
            </div>
          </div> 
        </div>`);
        $("#ctable2").append(div);
        var found = true;
      }
  }

  if (!found) 
    console.log("non esiste noleggio");
}

//MODIFICA CLIENTE
function modifyClient(data, insertedID){
  console.log(data + "   " + insertedID);
  for (let i in data) {

    if(data[i].client_id == insertedID) {
      console.log(insertedID);
        $( "#ctable2" ).empty();
        $( "#ctable" ).empty();

  div = $(`         
  <button class="btn-back"onclick= "goBackClients()"><i class="fas fa-home"></i> CLIENTI</button>
  `);
$("#ctable").append(div);

div = $(` 
      <div class="flex-container" style=" margin-left: 4%;">
        <img src="${data[i].image}" alt="" width="280" height="300" style="margin-left: 3em;">
        <form class="row g-3" action="/update-client" method="POST" role="form" class="row g-3" style="width: 60%; position: relative; float: right; right: 6%; margin-bottom: 30%;">
          <div class="col-md-6">
            <label for="inputName" class="form-label">Nome</label>
            <input type="text" class="create2" id="inputName" name="name" value="${data[i].name}">
          </div>
          <div class="col-md-6">
            <label for="inputSurname" class="form-label">Cognome</label>
            <input type="text" class="create2" id="inputSurname" name="surname" value="${data[i].surname}">
          </div>
          <div class="col-12">
            <label for="inputId" class="form-label">ID Cliente</label>
            <input type="text" class="create2" id="inputId" name="clientID" value="${data[i].client_id}" style="cursor: not-allowed;" readonly="readonly">
          </div>
          <div class="col-md-6">
          <label for="inputPlace" class="form-label">Città</label>
          <input type="text" class="create2" id="inputPlace" name="place" value="${data[i].place}">
          </div>
          <div class="col-md-6">
            <label for="inputAdd" class="form-label">Indirizzo</label>
            <input type="text" class="create2" id="inputAdd" name="address" value="${data[i].address}">
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="create2" id="inputEmail" name="email" value="${data[i].email}">
          </div>
          <div class="col-md-6">
            <label for="inputCell" class="form-label">Telefono</label>
            <input type="text" class="create2" id="inputCell" name="telefono" value="${data[i].phone}">
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label for="note" class="form-label">Note</label>
              <input type="text" class="create2" id="note" rows="3" name="note" value="${data[i].note}"></textarea>
            </div>
          </div>
          <div class="col-12">
            <button class="btn-sub" id="${data[i].client_id}" onclick="searchRentByClient(id)">Storico noleggi</button>
            <button class="btn-sub" onclick="approveClient()" >Aggiorna</button>  <i id="smile" class="fas fa-check fa-2x" style="color: green; visibility: hidden; margin-left: 2%; "></i>
            <button class="btn-sub" id="${data[i].client_id}" onclick="deleteClient(id)">Elimina</button>
            </div>
        </form>
      </div>
       
      `);
      $("#ctable2").append(div);
      var found = true;
    }

}
if (!found) 
console.log("non esiste cliente");
}

//MODIFICA NOLEGGIO
function modifyRent(data, insertedID){
  var x;
  for (let i in data) {

    if(data[i]._id == insertedID) {
      if(data[i].delivered == false)
      x="no";
      else
      x="si";

        $( "#ctable2" ).empty();
        $( "#ctable" ).empty();
      div = $(` 
       <div class="flex-container" style=" margin-left: 5%;">
       <h1>Noleggio numero: ${data[i]._id} </h1>
         <div class="row g-3" style="width: 80%;">
          <div class="col-md-6">
            <label for="inputName" class="form-label">ID Cliente</label>  <button type="button" id="${data[i].client_id}" class="btn-postit" button title="Clicca qui per vedere le informazioni del cliente" onclick="modifyClient(clientARRAY,id)"><i class="fas fa-info-circle"></i></button>
            <input type="text" class="create2" id="inputName" name="name" value="${data[i].client_id}" style="cursor: not-allowed;" readonly="readonly">
          </div>
          <div class="col-md-6">
            <label for="inputID" class="form-label">ID Prodotto</label>
            <input type="text" class="create2" id="inputID" name="product" value="${data[i].prod_id}" style="cursor: not-allowed;" readonly="readonly">
          </div>
          <div class="col-md-6">
            <label for="inputstart" class="form-label">Data Inizio</label>
            <input type="text" class="create2" id="inputstart" name="start" value="${data[i].start_date.slice(0,10)}">
          </div>
          <div class="col-md-6">
          <label for="inputend" class="form-label">Data Fine</label>
          <input type="text" class="create2" id="inputend" name="end" value="${data[i].end_date.slice(0,10)}">
        </div>
          <div class="col-md-2">
            <label for="inputPrezzo" class="form-label">Prezzo </label>
            <input type="text" class="create2" id="inputprice" name="end" value="${data[i].price}">
          </div>
          <div class="col-md-4">
            <label for="inputpay" class="form-label">Pagamento </label>
            <input type="text" class="create2" id="inputpay" name="end" value="${data[i].paymethod}">
          </div>
          <div class="col-md-4">
            <label for="inputworker" class="form-label">Dipendente </label> <button type="button" class="btn-postit" button title="Per approvare noleggio inserire il proprio ID"></i></button>
            <input type="text" class="create2" id="inputworker" name="worker" value="${data[i].worker_id}">
          </div>
          <div class="col-md-2">
            <label for="delivered" class="form-label">Restituito </label>
            <input type="text" class="create2" id="delivered" name="delivered" value="${x}">
          </div>
          <div class="col-md-2" style="visibility: hidden">
            <input type="text" class="create2" id="idprod" name="delivered" value="${data[i]._id}">
          </div>
          <div>
            <button id="${data[i]._id}" onclick= "deleteRents(id)" class="btn-sub" style="float: left;margin-top: 2em; margin-left: 1em;"><i class="fas fa-trash-alt"></i>  Elimina</button>
            ${!data[i].approved ? `<button  id="btn-approve" onclick="approva()" class="btn-sub" style="float: left;margin-top: 2em; margin-left: 0.5em; visibility: visible;">Approva</button>
            `: ""}</div>
        </div>
      </div>
  
      `);
      $("#ctable2").append(div);

        var found = true;
    }
  }

  if (!found) 
    console.log("non esiste prodotto");
}


//FILTRO PER NOLEGGI CONCLUSI
function pastRents(data){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

  console.log(date);
  $( "#ctable2" ).empty();
  $( "#ctable" ).empty();

  div = $(`         
    <button class="btn-back"onclick= "goBackRents()"><i class="fas fa-home"></i> NOLEGGI</button>
        `);
  $("#ctable").append(div);

  for (let i in data) {
    var dateA = new Date(data[i].end_date);
    var dateB = new Date(date);
    console.log(dateA);
    if(dateA.getTime() < dateB.getTime()){
      let div = null;
        div = $(` 
        <div class="flex-container">
        <div class="card" style="width: 23em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
          <div class="card-body">
            <h5 class="card-title">Numero noleggio: ${rentARRAY[i]._id}</h5>
            <p class="card-text">ID Cliente: ${rentARRAY[i].client_id} <br> ID Prodotto: ${rentARRAY[i].prod_id}<br></p>
            <p class="card-text">Data Inizio: ${rentARRAY[i].start_date.slice(0,10)} <br> Data Fine: ${rentARRAY[i].end_date.slice(0,10)}</p>
            <button id="${rentARRAY[i]._id}" onclick= "modifyRent(rentARRAY,id)"class="btn-mod"> Altro..</button>
          </div>
        </div> 
      </div>  `);
         $("#ctable2").append(div);

         var found = true;
    }

  }
  if (!found) 
    console.log("errore");
  

}
//FILTRO NOLEGGI ATTIVI
function futureRents(data){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

  console.log(date);
  $( "#ctable2" ).empty();
  $( "#ctable" ).empty();

  div = $(`         
    <button class="btn-back"onclick= "goBackRents()"><i class="fas fa-home"></i> NOLEGGI</button>
        `);
  $("#ctable").append(div);

  for (let i in data) {
    var dateA = new Date(data[i].end_date);
    var dateB = new Date(date);
    console.log(dateA);
    if(dateA.getTime() > dateB.getTime()){
      let div = null;
        div = $(` 
        <div class="flex-container">
        <div class="card" style="width: 23em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
          <div class="card-body">
            <h5 class="card-title"> Numero noleggio: ${rentARRAY[i]._id}</h5>
            <p class="card-text">ID Cliente: ${rentARRAY[i].client_id} <br> ID Prodotto: ${rentARRAY[i].prod_id}<br></p>
            <p class="card-text">Data Inizio: ${rentARRAY[i].start_date.slice(0,10)} <br> Data Fine: ${rentARRAY[i].end_date.slice(0,10)}</p>
            <button id="${rentARRAY[i]._id}" onclick= "modifyRent(rentARRAY,id)"class="btn-mod"> Altro..</button>
          </div>
        </div> 
      </div>  `);
         $("#ctable2").append(div);

         var found = true;
    }

  }
  if (!found) 
    console.log("errore");

}
//FILTRO NOLEGGI FUTURI
function activeRents(data){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

  console.log(date);
  $( "#ctable2" ).empty();
  $( "#ctable" ).empty();

  div = $(`         
    <button class="btn-back"onclick= "goBackRents()"><i class="fas fa-home"></i> NOLEGGI</button>
        `);
  $("#ctable").append(div);

  for (let i in data) {
    var dateA = new Date(data[i].start_date);
    var dateB = new Date(date);
    console.log(dateA);
    if(dateA.getTime() == dateB.getTime()){
      let div = null;
        div = $(` 
        <div class="flex-container">
        <div class="card" style="width: 23em; height:18em; float: left; display: block; margin-left: 3%; margin-top: 1em;">
          <div class="card-body">
            <h5 class="card-title">Numero noleggio: ${rentARRAY[i]._id}</h5>
            <p class="card-text">ID Cliente: ${rentARRAY[i].client_id} <br> ID Prodotto: ${rentARRAY[i].prod_id}<br></p>
            <p class="card-text">Data Inizio: ${rentARRAY[i].start_date.slice(0,10)} <br> Data Fine: ${rentARRAY[i].end_date.slice(0,10)}</p>
            <button id="${rentARRAY[i]._id}" onclick= "modifyRent(rentARRAY,id)"class="btn-mod"> Altro..</button>
          </div>
        </div> 
      </div>  `);
         $("#ctable2").append(div);

         var found = true;
    }

  }
  if (!found) 
    console.log("errore");
  

}

//FUNZIONI PER TORNARE INDIETRO
function goBackClients(){
  openClient();
}

function goBackInventory(){
  openInventory();
}

function goBackRents(){
  openRents();
}

//FUNZIONI AUX
function approveProd() {
  var name= document.getElementById("name").value;
  var img= document.getElementById("img").value;
  var prod_id= document.getElementById("product").value;
  var brand= document.getElementById("brand").value;
  var category= document.getElementById("category").value;
  var low_season= document.getElementById("low_season").value;
  var high_season= document.getElementById("high_season").value;
  var year= document.getElementById("year").value;
  var guest= document.getElementById("guest").value;
  var length= document.getElementById("length").value;
  var speed= document.getElementById("speed").value;
  var summary= document.getElementById("summary").value;
  var status= document.getElementById("status").value;

  var changed = {};


  changed = { prod_id: prod_id, category: category, img: img,  name: name, brand: brand, speed: speed, length: length, guest: guest, year: year, summary: summary, low_season: low_season, high_season: high_season, status: status};
  
  console.log(changed);

      $.post( '/update-prod', changed, function( data ) {
      });

}
function approveRent(){

  var myrent_sdate = new Date(document.getElementById("data_inizio").value);
  var myrent_edate = new Date(document.getElementById("data_fine").value);
  var price = document.getElementById("rentprice").value;
  var ID_prod = document.getElementById("prod").value;
  var ID_work = document.getElementById("worker").value;
  var client = document.getElementById("client").value;
  var app = document.getElementById("approved").value;
  var discount = document.getElementById("rentdiscount").value;

  var newRent = {};

  newRent = { product: ID_prod, client:client, worker: ID_work, start: myrent_sdate, end: myrent_edate, price: price, pay: "bonifico", approved: app, discount: discount};

      $.post( '/new-rent', newRent, function( data ) {
        document.getElementById("smile").style.visibility = "visible";
      });



  document.getElementById("smile").style.visibility = "visible";
}
function approveClient(){

  document.getElementById("smile").style.visibility = "visible";
}
function approva(){


  var myrent_sdate = new Date(document.getElementById("inputstart").value);
  var myrent_edate = new Date(document.getElementById("inputend").value);
  var price = document.getElementById("inputprice").value;
  var ID_rent = document.getElementById("idprod").value;
  var ID_work = document.getElementById("inputworker").value;
  var pagamento = document.getElementById("inputpay").value;

  console.log(myrent_sdate + " " + myrent_edate + " " + price + " " + ID_rent +" "+ pagamento + " " + ID_work);
  
  var changed = {};

  changed = { _id: ID_rent, start: myrent_sdate, end: myrent_edate, price: price, paymethod: pagamento, worker: ID_work, approved: "true"};

  console.log(changed);

      $.post( '/update-rent', changed, function( data ) {
        document.getElementById("btn-approve").style.visibility = "hidden";
      });

  document.getElementById("btn-approve").style.visibility = "hidden";
}

function unavailable(){
  var name= document.getElementById("name").value;
  var prod_id= document.getElementById("product").value;
  var brand= document.getElementById("brand").value;
  var category= document.getElementById("category").value;
  var low_season= document.getElementById("low_season").value;
  var high_season= document.getElementById("high_season").value;
  var year= document.getElementById("year").value;
  var guest= document.getElementById("guest").value;
  var length= document.getElementById("length").value;
  var speed= document.getElementById("speed").value;
  var summary= document.getElementById("summary").value;

  var changed = {};


  changed = { prod_id: prod_id, category: category, name: name, brand: brand, speed: speed, length: length, guest: guest, year: year, summary: summary, low_season: low_season, high_season: high_season, status: "rotto"};

  console.log(changed);

      $.post( '/update-prod', changed, function( data ) {
      });

}
function available(){
  var name= document.getElementById("name").value;
  var prod_id= document.getElementById("product").value;
  var brand= document.getElementById("brand").value;
  var category= document.getElementById("category").value;
  var low_season= document.getElementById("low_season").value;
  var high_season= document.getElementById("high_season").value;
  var year= document.getElementById("year").value;
  var guest= document.getElementById("guest").value;
  var length= document.getElementById("length").value;
  var speed= document.getElementById("speed").value;
  var summary= document.getElementById("summary").value;

  var changed = {};


  changed = { prod_id: prod_id, category: category, name: name, brand: brand, speed: speed, length: length, guest: guest, year: year, summary: summary, low_season: low_season, high_season: high_season, status: "ottimo"};

  console.log(changed);

      $.post( '/update-prod', changed, function( data ) {
      });

}

function lateRents(rents){

  let yesterday = new Date() - 1;
  
  let filtered = [];
  filtered =  rents.filter(x => x.delivered == false && x.end_date == yesterday);


  for(let i in filtered) {

    $.post( '/late-rent', {id: filtered._id}, function( data ) {
    });

    $.post( '/late-prod', {id: filtered.prod_id}, function( data ) {
    });

  }


}