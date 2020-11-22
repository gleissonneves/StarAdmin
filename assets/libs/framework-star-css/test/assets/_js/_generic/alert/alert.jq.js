/*  
*   author:
*   @Gleisson Neves
*
*   element = seletor do elemento (class)
*   

*   closeAlert(element, close)
*/
function closeAlert(element){
    let alertMsg = $(element);
    if(alertMsg){
        element = replace(".", "");
        alertMsg.click(function(e){
            if(e.target.className != element){
                $(this).hide();
            }
        });
    }
}