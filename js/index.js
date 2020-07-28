var min = $('.timer .min'),
    sec = $('.timer .sec'),
    start = $('.buttons .btn-success'),
    stop = $('.buttons .btn-danger'),
    second = 0,
    minute = 0,
    restart = $('.restart')
    on = true


restart[0].onclick = function(){
    second = 0;
    minute = 0;
    min.html('0');
    sec.html('0');
}

function upcounter(){
    time = second ++
    sec[0].innerHTML = time
    if( second == 60 ){
        minute ++
        min[0].innerHTML = minute
        second = 0
    }
}

mytimer = setInterval(upcounter, 1000 )

start[0].onclick = function(){
    
    mytimer = setInterval(upcounter, 1000 )
    
}
stop[0].onclick = function(){
    
    clearInterval(mytimer);
    
}



















