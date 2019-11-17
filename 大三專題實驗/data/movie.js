function Show(index){
    var p = document.getElementById("movie");
    switch(index){
        case 1:
            p.innerHTML ='<iframe width = 100% height = 100% src = "https://www.youtube.com/embed/6KSiKQxTXQQ">';
            break;
        case 2:
            p.innerHTML = '<iframe width = 100% height = 100% src = "https://www.youtube.com/embed/FP6H-UqJIoM">';
            break;
    }
}
