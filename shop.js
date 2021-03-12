var delt=document.getElementsByClassName("btn-btn")
console.log(delt)
for(var i=0; i < delt.length; i++){

    delt[i].addEventListener('click',function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    calcul()

    })
}


// var btnplus=document.getElementsByClassName("button-plus")
// var btnminus=document.getElementsByClassName("button-minus")
// var price=document.getElementsByClassName("price")
// var total=document.getElementsByClassName("total")

// var section=document.getElementsByClassName("item")
// var heart=document.getElementsByClassName("far fa-heart")


// var qte=document.getElementsByClassName('quantityy')

// for(let i=0; i<btnplus.length;i++){
//     btnplus[i].addEventListener('click',function(){
//         qte[i].innerHTML= Number(qte[i].innerHTML)+1
//     })
// }

// for(let i=0; i<btnminus.length;i++){
//     btnminus[i].addEventListener('click',function(){
//         if (Number(qte[i].innerHTML)>0)
//         qte[i].innerHTML= Number (qte[i].innerHTML)-1
//     })
// }
// function calcul(){
//     let somme=0;
//     for(let i=0;i<price.length;i++){
//         somme=somme+Number(price[i].innerHTML)*Number(qte[i].innerHTML)

//     }
//     total.innerHTML=somme
//     return somme
// }     

// for(let i=0;i<heart.length;i++){
//     heart[i].addEventListener('click',fuction(){
//           heart[i].classList.toggle(`fas`)
//     })
// }
