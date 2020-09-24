$(document).ready(function() 
{
    $('#ResultContainer').hide();
    $('#button').click(function(event) {
        
        $('#ResultContainer').show();
            console.log('bite');
            $.ajax({
                type: 'GET',
                url: 'http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query='+$('#Search').val(),
                dataType: 'json'
    
            })
                    .done(function (data) {
                        $('#result').empty();
                        $('#nombreResult').empty();
                        var donnees = data;
                        console.log(data);
                        $('#nombreResult').append('<p>'+donnees.results.length + ' résultats</p>');
                        for(let i =0; i< donnees.results.length;i++){
                           
                            $('#result').append('<div class= "col s4 mt-5 "><img src ="http://image.tmdb.org/t/p/w300/'+ donnees.results[i].poster_path +'"></div>');
                          //  $('#result').append( '<div class="col s4 "><div class="card medium"><div class="card-image"><img class="responsive-img" src ="http://image.tmdb.org/t/p/w300/'+ donnees.results[i].poster_path +'"><span class="card-title"></span></div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">'+ donnees.results[i].title +'<i class="material-icons right">more_vert</i></span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+ donnees.results[i].title +'<i class="material-icons right">close</i></span> <p>'+ donnees.results[i].overview+'</p></div></div>');
                        }
 
    });

    
	

});
});