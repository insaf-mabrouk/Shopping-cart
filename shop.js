var section=Array.from(document.getElementsByClassName("item"))
var qte=Array.from(document.getElementsByClassName("quantityy"))
var price=Array.from(document.getElementsByClassName("price"))
var total=document.getElementById("total")
var delt=Array.from(document.getElementsByClassName("btn-btn"))
var btnplus=Array.from(document.getElementsByClassName("button-plus"))
var btnminus=Array.from(document.getElementsByClassName("button-minus"))
var heart=Array.from(document.getElementsByClassName("far fa-heart"))
console.log(delt)


for(let i=0; i < delt.length; i++){
    // let somme=calcul()
    // delt[i].addEventListener('click' , function(event){
    //     let buttonclick = event.target 
    //     buttonclick.parentElement.parentElement.remove()
    //     // somme=somme-Number(price[i].innerHTML)
    //     price[i].innerHTML=0

    // })
    //  console.log(somme)
    let buttonremove = delt[i] ;
    buttonremove.addEventListener('click' , function(event){
        let buttonclick = event.target 
        buttonclick.parentElement.parentElement.remove() 
   
        price[i].innerHTML= 0 ;
        calcul()
})
}


function calcul(){
    var somme=0;
    for(let i=0;i<price.length;i++){
    
        somme=somme+Number(price[i].innerHTML)*Number(qte[i].innerHTML)

    }
    total.innerHTML=somme
    console.log(somme)
    return somme;

}



for(let i=0; i<btnplus.length;i++){
    btnplus[i].addEventListener('click',function(){
        qte[i].innerHTML= Number(qte[i].innerHTML)+1
        calcul();
    })
}

for(let i=0; i<btnminus.length;i++){
    btnminus[i].addEventListener('click',function(){
        if (Number(qte[i].innerHTML)>0){
        qte[i].innerHTML= Number (qte[i].innerHTML)-1
        calcul();
    }
    })

}



for(let i=0;i<heart.length;i++){
    heart[i].addEventListener('click',function(){
          heart[i].classList.toggle(`fas`)
    })
}   
 