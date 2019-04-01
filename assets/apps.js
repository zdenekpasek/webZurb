$(document).ready(function(){ // inicializuj pri nahrane strance
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('.scrollup').fadeIn();
        }else{
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
        $('html, body').animate({scrollTop:0},700);
        return false;
    });
});

function focus_in(oid){
    $('#'+oid).addClass('nutne');
}

function focus_out(oid){
    $('#'+oid).removeClass('nutne');
}

function validateForm(frm,arPole){
    var pocet_poli=arPole.length;
    var ret=true;
    errFlag=new Array();
    var error=0;
    //$('.out').append(pocet_poli); // prida obsah do elementuo tride out
    //console.log(pocet_poli);

    for(var i=0;i<pocet_poli;i++){
        var inp=$('*[name="'+arPole[i]+'"]');
        if(inp.prop('type')=='text' || inp.prop('type')=='textarea'){
            if(inp.val()==''){
                //$('.out').append("Pole "+arPole[i]+" musi by vyplneno.");    
                ret=false;
                errFlag[arPole[i]]="required";
            }
        }else if(inp.prop('type')=='checkbox'){
            if(inp.prop('checked')==false){
                ret=false;
                errFlag[arPole[i]]="required";
            }
        }else if(inp.prop('type')=='select-one'){
            if(inp.val()==''){
               ret=false;
                errFlag[arPole[i]]="required";
            }
        }else if(inp.prop('type')=='select-one'){
            if(!$('input[name="'+arPole[i]+'"]:checked').val()){
               ret=false;
               errFlag[arPole[i]]="required";
            }
        }    

    }

    for(var j=0; j<pocet_poli;j++){
        if(ret==false){
            if(errFlag[arPole[j]]){
                focus_in('id-'+arPole[j]);
            }else{
                focus_out('id-'+arPole[j]);
            }
            error++;
        }
    }

    if(error>0){
        $('.error').show();
        return false;
    }else{
        return true;
    }
}