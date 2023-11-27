let btn;
window.onload = ()=>{
    
    btn = document.getElementById("btn_formulario");
    btn.addEventListener("click",enviar);

}

function enviar(event){
    //name-form02-e, email-form02-e, phone-form02-e textarea-form02-e
    
    frm = document.getElementById("formulario");

    if(frm.checkValidity()){

        let campo1 = document.getElementById("name-form02-e");
        campo1.value = "";

        let campo2 = document.getElementById("email-form02-e");
        campo2.value = "";

        let campo3 = document.getElementById("phone-form02-e");
        campo3.value = "";

        let campo4 = document.getElementById("textarea-form02-e");
        campo4.value = "";
        
        alert("¡Gracias por tu mensaje!");
        event.preventDefault();
        
    }
   
}