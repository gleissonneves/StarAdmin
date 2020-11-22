/*  
*   author:
*   @Gleisson Neves
*
*   selector          = seletor do elemento (class ou id) padrão é class
*   idAlert           = identificação do Alert
*   buttonActiveAlert = elemento que irar ativar o alert
*   classAlertAble    = class que irar ativar o alert
*
*   instâncias da função
*   -Btn_alert_active(buttonActiveAlert, idAlert, classAlertAble)      OR
*   -Btn_alert_active(buttonActiveAlert, idAlert, classAlertAble, selector)
*   OR
*   Alert_active(idAlert, classAlertAble)
*/

function Btn_alert_active(buttonActiveAlert, idAlert, classAlertAble, selector = null){
    if(selector == "" || selector == null){
        var btnActiveAlert = document.querySelectorAll("."+buttonActiveAlert+"");
    }else if(selector == "class"){
        var btnActiveAlert = document.querySelectorAll("."+buttonActiveAlert+"");
    }else if (selector == "id"){
        var btnActiveAlert = document.querySelectorAll("#"+buttonActiveAlert+"");
    }else{
        alert('erro em seletor')
    }

    btnActiveAlert.forEach(item => {
        item.addEventListener('click', (e) =>{
            Alert_active(idAlert, classAlertAble);
        });
    });
}


function Alert_active(idAlert, classAlertAble){
    let Alert      = document.getElementById(idAlert);

    if(Alert){
        Alert.classList.add(classAlertAble);
        Alert.addEventListener('click', (e) => {
            if(e.target.className == "alert-close" ){
                Alert_close(Alert, classAlertAble)
            }
        });
    }
}


function Alert_close(idAlert,classAlertDisable){
    if(idAlert){
        idAlert.classList.remove(classAlertDisable);
    }
}