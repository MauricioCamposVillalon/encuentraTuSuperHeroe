const btBuscar = document.querySelector('#btbuscar');
const buscaHeroe = document.querySelector('#buscaheroe');

btBuscar.addEventListener('click', () => {
    $.ajax({
        type: "get",
        url: `https://www.superheroapi.com/api.php/3525635500807579/${buscaHeroe.value}`,
        dataType: "json",
        success: function (heroe) {


            ficha(heroe);


        }


    });
});


const ficha = (sHeroe) => {

    let nombCompleto = sHeroe.biography['full-name'];
    let altEgos = sHeroe.biography['alter-egos'];
    let aliados = sHeroe.biography['aliases'];
    let nacimiento = sHeroe.biography['place-of-birth'];
    let aparicion = sHeroe.biography['first-appearance'];
    let editor = sHeroe.biography['publisher'];
    let aliado = sHeroe.biography['alignment'];
    let genero = sHeroe.appearance['gender'];
    let raza = sHeroe.appearance['race'];
    let altura = sHeroe.appearance['height'];
    let peso = sHeroe.appearance['weight'];
    let ojos = sHeroe.appearance['eye-color'];
    let pelo = sHeroe.appearance['hair-color'];
    let ocupacion = sHeroe.work['occupation'];
    let base = sHeroe.work['base'];

    if (nacimiento==="-"){
        nacimiento = "sin lugar de nacimiento";
    }
    if (nombCompleto === ""){
        nombCompleto = sHeroe.name;
    }

    $('#seccionheroe').html(`<div class="container col-12 col-sm-11 text-center my-5">
    <div class="row  pt-2"> <div class="card  col-12 col-sm-7 mb-3"><div class="row no-gutters">
                <div  class="col-md-5 align-self-center"><img src="${sHeroe.image.url}" class="imgsecu mt-2" >
                </div> <div class="col-md-7 "> <div id="ficha" class="card-body"> </div></div>
                </div></div><div class="col-12 col-sm-5 mb-3 "> <p class="card-text">Aqui va el grafio </p> </div></div>`);



    $('#ficha').html(`<h5 class=" text-comic-1 text-center">${sHeroe.name}<hr></h5>
    <p class="text-comic-3 ml-1 text-left"> <b>Nombre Completo:</b> ${nombCompleto}<br> <b>Alter-ego: </b>${altEgos}<br><b>Alias:</b> ${aliados}<br>
     <b>Lugar de nacimiento:</b> ${nacimiento}<br><b>Primera aparicion: </b>${aparicion} <br><b> Editora: </b>${editor} <br>
     <b>Afiliacion: </b>${aliado}<br><hr></p>
     <p class="text-comic-2 text-left" ><b>&nbsp;Caracteristicas fisicas<b></p>
     <p class="text-comic-3 text-left"><b>Genero: </b>${genero}<br><b>Raza :</b>${raza  } </p>
     `);



    //"appearance":{
    //   "gender":"Male",
    //   "race":"Mutant",
    //   "height":["6'2","188 cm"],
    //   "weight":["210 lb","95 kg"],
    //   "eye-color":"Brown",
    //   "hair-color":"No Hair"},
    //"w/ork":{"
    //   occupation":"Mercenary; former enforcer, government operative, sumo wrestler, soldier, assassin, anti-hero, others",
    //    "base":"Cavern-X, Sedona, Arizona, Mobile"},
    //"connections":{"
    //    group-affiliation":"Thunderbolts (Strike Team), shares body with Agent Preston; formerly X-Force, Deadpool Corps, Agency X, S.H.I.E.L.D.; Code Red, Six Pack, One World Church, DP Inc., Weapon X, Weapon Plus, Heroes for Hire, Secret Defenders, Frightful Four, Team Deadpool, L",
    //   "relatives":"Thomas \"Mickey\" Wilson (father, deceased); Hailey Wilson (mother, deceased); Gretchen Wilson, Orksa (ex-wives); Evil Deadpool (clone); Widdle Wade (clone)"},


}