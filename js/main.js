const priceC = 0.21;
// const button = document.getElementById('btn');
let eta;
let priceF;
let distanza;
let priceKm;
let discount;
let nome;
let promozione;
// codice principale
// richesta dati utente

eta = document.getElementById('eta').value;
distanza = document.getElementById('km').value;
nome = document.getElementById('name').value;


// funzione calcola biglietto

// button.addEventListener('click',calcuteTicket(), outputTicket());



// funzione che calcola il prezzo del biglietto
function calcuteTicket() {
    priceKm = priceC * distanza;
    // controlli per verificare lo sconto da applicare
    if (eta == "minorenne") {
        discount = (priceKm / 100) * 20;
        promozione = "20%"
    } else if (eta == "over-65") {
        discount = (priceKm / 100) * 40;
        promozione = "40%"
    } else {
        discount = 0.00;
        promozione = "nessuno sconto"
    }
    priceF = priceKm - discount;
    priceF = priceF.toFixed(2);
    //output finale
    console.log(priceF);
    console.log(nome);
    

  
}

//   variabili per riempire la tabella

function outputTicket() {
     document.getElementById('active').style.display = 'flex';

    document.getElementById("nomeTd").innerHTML = nome;
    document.getElementById("prezzoTd").innerHTML = priceF + " euro";
    document.getElementById("cuTd").innerHTML = Math.floor(Math.random() * 10000);
    document.getElementById("scontoTd").innerHTML = promozione;

    


  
}












