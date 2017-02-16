$(function() {
    $('#lcms').hide();
    $('#rmn').hide();
    $('#oak').hide();
    $('#cpc').hide();
    $('#lc').hide();
    $('#a2016').hide();
    $('#a2015-2').hide();
    $('#a2015-1').hide();
    
    
    
    $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 110) {$('#header').addClass('header');
    }
    if(height  < 110) {$('#header').removeClass('header');
    }
        
});
  
    
      
    $('#affiche-a2016').click(function() {
        if($('#a2016').is(':hidden')){$('#a2016').show('slow');}
        else{$('#a2016').hide(1000);}
        });
    $('#affiche-a2015-2').click(function() {
        if($('#a2015-2').is(':hidden')){$('#a2015-2').show('slow');}
        else{$('#a2015-2').hide(1000);}
        });
    $('#affiche-a2015-1').click(function() {
        if($('#a2015-1').is(':hidden')){$('#a2015-1').show('slow');}
        else{$('#a2015-1').hide(1000);}
        });
    $('#affiche-lcms').click(function() {
        if($('#lcms').is(':hidden')){$('#lcms').show('slow');}
        else{$('#lcms').hide(1000);}
        });
    $('#affiche-rmn').click(function() {
        if($('#rmn').is(':hidden')){$('#rmn').show('slow');}
        else{$('#rmn').hide(1000);}
        });
    $('#affiche-oak').click(function() {
        if($('#oak').is(':hidden')){$('#oak').show('slow');}
        else{$('#oak').hide(1000);}
        });
    $('#affiche-cpc').click(function() {
        if($('#cpc').is(':hidden')){$('#cpc').show('slow');}
        else{$('#cpc').hide(1000);}
        });
    $('#affiche-lc').click(function() {
        if($('#lc').is(':hidden')){$('#lc').show('slow');}
        else{$('#lc').hide(1000);}
        });
    
});
