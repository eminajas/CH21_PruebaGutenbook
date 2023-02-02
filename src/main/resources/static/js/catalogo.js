
let libros;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='/api/libros/';
function addItems(list_items) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
            libros=json;
            Array.from(json).forEach((p, index) => {
                list_items.innerHTML += `
                      
    <div class = "col-xs-12 col-sm-12 col-md-9 col-lg-6 col-xl-4 pt-5" style="height:40rem;">
       <div class="card h-100 m-5">
          <img src="${p.url}" class="img-fluid card-img-top p-2" alt="image" style="height: 65%;">
           <div class="row card-body"  style="align-items: center;">
               <h5 class="card-title text-center">${p.titulo}</h5>
               <p class="card-text text-center">${p.description}</p>
               <div class="row align-items-center justify-content-evenly">
                   <div class="col-4 text-center">
                       <a href="#" title="Agregar a mi bolsa de compras" class="btn btn-primary"><i class="bi bi-basket"></i></a>
                   </div>
                   <div class="col-4 text-center">
                   <p class="card-text fs-6">$ ${p.precio}</p>
                   </div>
               </div>
           </div>
       </div>
    </div></br>  `;
            }); // foreach
        });//then
    }).catch(function(err) {
        console.log(err);
    });
    console.log(document.getElementById("list_items"));
   
}// addItems

window.addEventListener("load", function (){
    let div = document.getElementById("list_items");
    addItems(div);
   
});

function view(index) {
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=libros[index].titulo;
    document.getElementById("productBodyModal").innerHTML=`${libros[index].autor}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${libros[index].url}" />
    <strong>$ ${libros[index].precio} MXN<strong>`;
    $("#productModal").modal("show");
}// view








/***
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/*function addItem(item){
    const itemHTML = '<div class = "col-xs-12 col-sm-12 col-md-9 col-lg-6 col-xl-4 pt-5" style="height:40rem;">\n' +
    '   <div class="card h-100 m-5">\n' +
    '       <img src="'+item.img +'" class="img-fluid card-img-top p-2" alt="image" style="height: 65%;">\n' +
    '       <div class="row card-body"  style="align-items: center;">\n' +
    '           <h5 class="card-title text-center">'+item.name+'</h5>\n' +
    '           <p class="card-text text-center">'+item.description+'</p>\n' +
    '           <div class="row align-items-center justify-content-evenly">\n' +
    '               <div class="col-4 text-center">\n' +
    '                   <a href="#" title="Agregar a mi bolsa de compras" class="btn btn-primary"><i class="bi bi-basket"></i></a>\n' +
    '               </div>\n' +
    '               <div class="col-4 text-center">\n' +
    '               <p class="card-text fs-5.5">$ '+ item.price + '</p>\n' +
    '               </div>\n' +
    '           </div>\n' +
    '       </div>\n' +
    '   </div>\n' +
    '</div>\n' + '</br>' ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

let arreglolibros = [ {'name':'Paquete misterioso "Amarillo"', 'img':'https://dsm01pap003files.storage.live.com/y4msfXLZYfi9UW6qXdJ-SRf7ChFv9mCOeygQPAPPhUTIOBTv3HzjWf3GpPjzy0vbl6OWJw6gmSmT5TjNIfk5HIiyImyfEyof6524gX1tvWZgPLTTzIQLZDpJ55skArI5tYwQZg4rj4c3x4BSZBG9SZgucLR_q7-3ds9Sli8pG1vr35l_uOhOn4UFC9_Ng40tWTHFalDftXemFGdXjz8vxGT9K0cty13k8-SDFCgTVOoaME?encodeFailures=1&width=500&height=500', 'description':'En el paquete amarillo podras obtener un libro de cualquier genero','price':'20'}, 
{'name':'Paquete misterioso "Morado"', 'img':'https://dsm01pap003files.storage.live.com/y4mHpRLZwyLBzeH3Tvd5VvoF3NwwZtj9FIARx6SIoN049d22O4Y5DxKcCRBDF4-0QmMxSt42rOZN6t4rNg6Pr15a6TkDIEov3xzDJbMtoRDYzf_nKTnWIjVicZlImd0MKd04i9b5WYLK9tBBg36MsbZonkU2HD24Ofjp1vHTJNAFL5mIIxutE6L9v1vmJJHcQbzRwmr0eS0lkT_hwm0nQHwUB4eG2KT1gsbPJL38s3aP4c?encodeFailures=1&width=500&height=500', 'description':'En el paquete morado podras obtener tres libros de cualquier genero','price':'100'},
{'name':'Paquete misterioso "Verde"', 'img':'https://dsm01pap003files.storage.live.com/y4m6xgX_pmrjNaNM9BwNpe26PR0qJkU5LLko0C_mqyq0yKdHn_Vd73cYL5mXCsH1dUVWmFcI6tNDlBYdBB9HDdfVFCB7AacghxwCpHXngMkki1djk5WtxQYoLo4YMDFoquPqJQGcNFKtA_koBeEJuY4GOiUjhBmtUFK7I6y6_xLddjlcgneSwGH0yOOxvVrwKKhbV-oxcAETHo7R5-LPpmWth0e3ruB-YoO61hGeycFYoM?encodeFailures=1&width=500&height=500', 'description':'En el paquete verde podras obtener diez libros de cualquier genero','price':'200'},
{'name':'Harry Potter y la priedra filosofal', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27544555_166594473971998_7887411199305725215_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=4nMK5eHUNusAX-1sSJG&_nc_ht=scontent.fmex43-1.fna&oh=00_AfCWfyFypNy4CdxnTxS8i_hz8WRSsYMqerIh6nZ1B8Xq1Q&oe=63FFE392', 'description':'Harry Potter descubre su verdadera identidad como mago y se une a sus amigos para encontrar la Piedra Filosofal.','price':'300'},
{'name':'Harry Potter y el prisionero de Azkaban', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27544669_166594477305331_1987991918711607699_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=GU322TZrd1IAX_pN3Dp&tn=xmJa2ibVl4KwMWrS&_nc_ht=scontent.fmex43-1.fna&oh=00_AfBICGesFYE2dm9fBz1aD4qWmJM5XLbDD-syvodlIMLsnA&oe=63FFF904', 'description':'Harry regresa a Hogwarts y descubre un peligroso prisionero escapado, Sirius Black.','price':'300'}, 
{'name':'Harry Potter y las reliquias de la muerte', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27657199_166594510638661_5720257074420298706_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=1PnY9gunIK8AX9S0Oz4&tn=xmJa2ibVl4KwMWrS&_nc_ht=scontent.fmex43-1.fna&oh=00_AfCMX3DGcTAPku9mSAAB0hOanD9njCNlaN9c8yWy8TidDg&oe=63FFD5C7', 'description':'Harry y sus amigos buscan y destruyen los horrocruxes para vencer a Lord Voldemort.','price':'250'},
{'name':'Harry Potter y el cáliz de fuego', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27750189_166594523971993_4332205718980733114_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=8h5U8u7Wq2UAX8Y4IYr&_nc_ht=scontent.fmex43-1.fna&oh=00_AfDrMuJdhgN7Gq5gfe2qpszf7FZdOxAScdLTIeUGBONmJA&oe=63FFED64', 'description':'Harry compite en un torneo mágico mientras lucha contra una amenaza oculta.','price':'500'},
{'name':'Harry Potter y orden del fénix', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27751868_166594557305323_4452963983098592597_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=r1d82opd1PsAX8GpmOc&_nc_oc=AQmTbitTnSSnML2mHEb_TRXpZHzil1FwLN0Y6ipVmnY6MFRldfx4O-Jgx2-dnoa9RrA&tn=xmJa2ibVl4KwMWrS&_nc_ht=scontent.fmex43-1.fna&oh=00_AfC5ZNIBgNP9AOAVJSoQuQAwubEqZsGMNsMecjLUl0KcIA&oe=63FFCAC3', 'description':'Harry lucha contra una conspiración mientras se prepara para enfrentar a Lord Voldemort.','price':'300'},
{'name':'Harry Potter y el misterio del príncipe', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27749936_166594577305321_8459882119434055448_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=74a7MVjkeRoAX_acB8j&_nc_ht=scontent.fmex43-1.fna&oh=00_AfBgp6-7YYC0l5yQ-7ioBDtS9RM5j2UGa4Dkgd-3ax2n9Q&oe=63FFDBB4', 'description':'Harry busca vencer a Voldemort mientras descubre secretos del pasado y prepara a su escuela.','price':'350'},
{'name':'Juego de tronos canción de hielo y fuego I', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27751659_167002237264555_686502766623985663_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=sRYJstk-9TsAX8ofHPE&_nc_ht=scontent.fmex43-1.fna&oh=00_AfB6CW9ZzakKnmg6LQJvbsqNdfb4b4SCrx5d9NRmTmVFPw&oe=63FFE1FC', 'description':'Las familias nobles luchan por el control del Trono de Hierro en un mundo fantastico y político.','price':'150'}, 
{'name':'El castillo de cristal', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27657479_167002273931218_5685501294462097567_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=uZwGm2TLAv8AX_7ns1P&_nc_ht=scontent.fmex43-1.fna&oh=00_AfAKnuDPOsXC7xvybfzCnFgzdQzaRvEiR5sfQyVlU0PQYQ&oe=63FFFABD', 'description':'En 1953 un aviador naval concibe el plan de eliminar a Pern a travs de un bombardeo sobre la Casa Rosada.','price':'150'},
{'name':'El Hobbit', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27657863_166594877305291_5026950183453022899_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KzCRcOW3uXAAX8aLji9&_nc_ht=scontent.fmex43-1.fna&oh=00_AfCgiBiF9T_CgW116vsYPn-HZfvugmtda3DpYLjbWpjcCA&oe=63FFC9AB', 'description':'Smaug parecía profundamente dormido cuando Bilbo espió una vez más desde la entrada. ¡Pero fingía! ¡Estaba vigilando la entrada del túnel!','price':'150'},
{'name':'Las horas distantes', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27459411_166096894021756_8834505415367741340_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=TgkoyIQ7ip4AX9bbh5L&_nc_ht=scontent.fmex43-1.fna&oh=00_AfAYDCQQboEbJu_x8kich5wSRx4cIBh6LMmQ0NkOOSYM8A&oe=63FFF537', 'description':'Una mujer reflexiona sobre su vida y su relación con su marido mientras cuida a su amigo moribundo.','price':'250'},
{'name':'Amanecer', 'img':'https://scontent.fmex43-1.fna.fbcdn.net/v/t1.18169-9/27545409_166307057334073_6646164230327839619_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=GGY2dJKegjUAX9hviJ1&tn=xmJa2ibVl4KwMWrS&_nc_ht=scontent.fmex43-1.fna&oh=00_AfADU0wEt5YV-PtivHCGckB8KLNCX8YD0h2-_63Fj9HzQw&oe=63FFDED9', 'description':'Katniss lucha contra el Capitolio en una rebelión mientras su relación con Peeta se complica..','price':'25'}];


try {
    var captura = JSON.parse(localStorage.getItem('datos'));


    for (let index = 0; index < captura.length; index++) {
    arreglolibros.push(captura[index]);

    }
} catch (error) {
    console.error(error);
}

    
    





    for (let index = 0; index < arreglolibros.length; index++) {
        addItem(arreglolibros[index])
    }
    */