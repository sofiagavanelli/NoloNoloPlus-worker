

////
var prodARRAY = 0;
var CLIENTINFO = 0;

$(document).ready(function () {
    // richiesta storia
    // $.ajax è una funzione che si usa per creare connessioni http
            $.ajax({
                type: 'GET',
                url: '/prods' ,
                success: function (data) {

                    prodARRAY = JSON.parse(data);

                    populate(prodARRAY);

                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("errori con db");
                }
            });

});


function change(){
    //document.getElementsByClassName("price_data").style.visibility = "visible";
    //document.getElementsByClassName("price_data").style.display = "inline";
    //$('.price_data').css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'block');​​​​​​

    var elems = document.getElementsByClassName('price_data');
    
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
    }

}

function login(){

    _id = document.getElementById("username").value;
    _pass = document.getElementById("pass").value;

    console.log(_id, _pass);
    
    if(_id) {
        $.ajax({
            type: 'GET',
            url: '/client/' + _id,
            success: function (info) {

                CLIENTINFO = JSON.parse(info);

                controlInfo(CLIENTINFO, _pass);

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("errori con login");
            }
        });
    }
    else {
        console.log("not a valid id");
    }

}

function controlInfo(data, insertedP) {

    for (let i in data) {

        if(data[i].password == insertedP) {
            change();

            var found = true;
        }
    }

    if (!found) {
        console.log("non esiste cliente con questa accoppiata pass-nome");

        let div = null;

        div = $(` <div> Username e/o password errati. </div> `);

        $("#loginfo").append(div);

    }

}

function openCalc(){

    console.log("sono dentro open calc"); 

    document.getElementById("calcCard").style.display = "block";

    /*let div = null;

    div = $(` <div class="modal fade" role="dialog" id="calcModal">
                    <div class="modal-content">    
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Calcola il prezzo del tuo noleggio</h4>
                            <button type="button" class="close" data-dismiss="calcModal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mx-3">
                            <a> *ricordiamo che lo yacht scelto potrebbe non essere disponibile nelle date richieste </a>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-default">Login</button>
                        </div>
                    </div>
            </div>  );
        
    $("#calcolatrice").append(div);*/

}

function populate(ProductInfo){

    for (let i in ProductInfo) {
        let div = null;

            div = $(`<div class="boat-images" data-toggle="modal" data-target="#boatModal">
                    <div class="boat">
                        <img class="post_image" src="${ProductInfo[i].image}"></img>
                        <div class="boat_info">
                            <h3 class="title">${ProductInfo[i].name}</h5>
                            <h4 class="title">${ProductInfo[i].brand}</h5>
                            <div class="details">
                                <ul class="d-flex flex-wrap pl-0">
                                    <li class="title">Potenza:<h5 class="data"> ${ProductInfo[i].power} </h5> </li>
                                    <li class="title">Lunghezza:<h5 class="data"> ${ProductInfo[i].length} </h5> </li>
                                    <li class="title">Ospiti:<h5 class="data"> ${ProductInfo[i].guests} </h5> </li>
                                    <li class="title">Anno:<h5 class="data"> ${ProductInfo[i].year} </h5> </li>
                                    <div class="price_data"> <li class="title"> Prezzo: 
                                            <h5 class="data"> ${ProductInfo[i].price} </h5> </li> </div>
                                </ul>
                            </div>
                        </div>

                        <div class="flex-container">
                            <button class="noleggioBtn" id="${i}">
                                NOLEGGIA
                            </button>
                        </div>

                    </div>
            </div>`);

        $("#main_page").append(div);
            
    }

    //$("#main_page").addClass('boat-images');
}

$(document).on('click', '.noleggioBtn', function () {
    console.log("voglio noleggiare");
    
});
