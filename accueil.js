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
        $('#a2016').show('slow');
    } ); 
    $('#cache-a2016').click(function() {
        $('#a2016').hide(1000);
    });
    $('#affiche-a2015-2').click(function() {
        $('#a2015-2').show('slow');
    } ); 
    $('#cache-a2015-2').click(function() {
        $('#a2015-2').hide(1000);
    });
    $('#affiche-a2015-1').click(function() {
        $('#a2015-1').show('slow');
    } ); 
    $('#cache-a2015-1').click(function() {
        $('#a2015-1').hide(1000);
    });
    $('#affiche-lcms').click(function() {
        $('#lcms').show('slow');
    } ); 
    $('#cache-lcms').click(function() {
        $('#lcms').hide(1000);
    });
    
    $('#affiche-rmn').click(function() {
        $('#rmn').show('slow');
    } ); 
    $('#cache-rmn').click(function() {
        $('#rmn').hide(1000);
    });
    
    $('#affiche-oak').click(function() {
        $('#oak').show('slow');
    } ); 
    $('#cache-oak').click(function() {
        $('#oak').hide(1000);
    });
    $('#affiche-cpc').click(function() {
        $('#cpc').show('slow');
    } ); 
    $('#cache-cpc').click(function() {
        $('#cpc').hide(1000);
    });
    $('#affiche-lc').click(function() {
        $('#lc').show('slow');
    } ); 
    $('#cache-lc').click(function() {
        $('#lc').hide(1000);
    });
});
