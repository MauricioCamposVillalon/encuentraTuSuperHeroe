const btBuscar = document.querySelector('#btbuscar');
const buscaHeroe = document.querySelector('#buscaheroe');

btBuscar.addEventListener('click', () => {
    $.ajax({
        type: "get",
        url: `https://www.superheroapi.com/api.php/3525635500807579/${buscaHeroe.value}`,
        dataType: "json",
        success: function (heroe) {


            ficha(heroe);
            crearGrafico(heroe);

        }


    });
});


const ficha = (sHeroe) => {
    let estado;
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
    let afili = sHeroe.connections['group-affiliation'];
    let familia = sHeroe.connections['relatives'];
    if (aliado === "bad"){
        estado = "Villano";
    }else{
        estado = "Heroe";
    }
    if (nacimiento === "-") {
        nacimiento = "sin lugar de nacimiento";
    }
    if (nombCompleto === "") {
        nombCompleto = sHeroe.name;
    }
    if (ocupacion  === "-") {
        ocupacion  = "Sin Ocupacion";
    }
    if (base  === "-") {
        base  = "Sin base de operaciones";
    }
    if (familia ==="-"){
        familia = "Sin Familia Conocida"
    }

    $('#seccionheroe').html(`<div class="container col-12 col-sm-10 text-center my-4 ">
    <div class="row  pt-2"> <div class="card  col-12 col-sm-7 mb-2"><div class="row no-gutters">
                <div  class="col-md-5 align-self-center bg-transparent"><img src="${sHeroe.image.url}" class="imgsecu mt-2" ><p class="text-center text-comic-2">${estado} N°${sHeroe.id}</p>
                </div> <div class="col-md-7 "> <div id="ficha" class="card-body"> </div></div>
                </div></div><div class="col-12 col-sm-5 mb-2 " style="height: 100%; width: 100%;"> <div id="graficoheroe" style="height: 100%; width: 100%;"></div>..  </div></div>`);
    $('#ficha').html(`<h5 class=" text-comic-1 text-center">${sHeroe.name}<hr></h5>
    <dl class="row text-comic-3">
    <dt class="col-sm-6 text-left">Nombre Completo </dt><dd class="col-sm-6 text-left">${nombCompleto}</dd>
    <dt class="col-sm-6 text-left">Alter-ego</dt><dd class="col-sm-6 text-left">${altEgos}</dd>
    <dt class="col-sm-6 text-left">Alias</dt><dd class="col-sm-6 text-left">${aliados}</dd>
    <dt class="col-sm-6 text-left">Lugar de nacimiento</dt><dd class="col-sm-6 text-left">${nacimiento}</dd>
    <dt class="col-sm-6 text-left">Primera aparicion</dt><dd class="col-sm-6 text-left">${aparicion}</dd>
    <dt class="col-sm-6 text-left">Editora</dt><dd class="col-sm-6 text-left">${editor}</dd>
    <dt class="col-sm-6 text-left">Afiliacion</dt><dd class="col-sm-6 text-left">${aliado}</dd>
    <dt class="col-sm-12"><hr></dt><dd class="col-sm-0"></dd> 
    <dt class="col-sm-0"><br></dt><dd class="col-sm-12">
        <dl class="row">
            <dt class="col-sm-2 text-left">Sexo</dt>
            <dd class="col-sm-4 text-left">${genero}</dd>
            <dt class="col-sm-2 text-left">Raza</dt>
            <dd class="col-sm-4 text-left">${raza}</dd>
            <dt class="col-sm-2 text-left">Ojos</dt>
            <dd class="col-sm-4 text-left">${ojos}</dd>
            <dt class="col-sm-2 text-left">Pelo</dt>
            <dd class="col-sm-4 text-left">${pelo}</dd>      
        </dl>
    </dd>
    <dt class="col-sm-3 text-left">Altura</dt><dd class="col-sm-9 text-left">${altura}</dd>
    <dt class="col-sm-3 text-left">Peso</dt><dd class="col-sm-9 text-left">${peso}</dd>
    <dt class="col-sm-12"><hr></dt><dd class="col-sm-0"></dd> 
    <dt class="col-sm-3 text-left ">Ocupacion</dt><dd class="col-sm-9 text-justify">${ocupacion}</dd>
    <dt class="col-sm-3 text-left">Base</dt><dd class="col-sm-9 text-justify">${base}</dd>
    <dt class="col-sm-12"><hr></dt><dd class="col-sm-0"></dd> 
    <dt class="col-sm-3 text-left ">Afiliacion</dt><dd class="col-sm-9 text-justify">${afili}</dd>
    <dt class="col-sm-3 text-left">Familia</dt><dd class="col-sm-9 text-justify">${familia}</dd> 
    </dl> `);
    
    
}

const crearGrafico = (graHeroe) => {
    let nombre ="Estadisticas";
    let intel = graHeroe.powerstats['intelligence'];
    let estra = graHeroe.powerstats['strength'];
    let velocidad =  graHeroe.powerstats['speed'];
    let durabilidad = graHeroe.powerstats['durability'];
    let poder = graHeroe.powerstats['power'];
    let combate = graHeroe.powerstats['combat'];
    

    if (intel  ==="null"){
        intel = 0;
    }
    if (estra  ==="null"){
        estra = 0;
    }
    if (velocidad  ==="null"){
        velocidad = 0;
    }
    if (durabilidad  ==="null"){
        durabilidad = 0;
    }
    if (poder  ==="null"){
        poder = 0;
    }
    if (combate  ==="null"){
        combate = 0;
    }


    let grafico = new CanvasJS.Chart("graficoheroe", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: true, 		
        title: {
            text: nombre
        },
        data: [
            {
                type: "pie",
                dataPoints: [
                    { label: "Inteligencia", y: intel },
                    { label: "Estrategia", y: estra },
                    { label: "Velocidad", y: velocidad },
                    { label: "Dureza", y: durabilidad },
                    { label: "Poder", y: poder},
                    { label: "Poder", y: combate }
                    
                ]
            }
        ]
    });
    grafico.render();
}