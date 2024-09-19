function weather(){
    let quality = document.getElementById("input").value ;

    let great = "Weather quality is: Great";

    let good = "Weather quality is: Good";

    let bad = "Weather quality is: Bad";

    let terrible = "Weather quality is: Terrible";

    if(quality >= 8){
        document.getElementById('output').innerText = great;
    } else if(quality == 6 || quality == 7) {
        document.getElementById('output').innerText = good;
    } else if(quality <= 5 && quality >= 3) {
        document.getElementById('output').innerText = bad;
    } else if (quality >= 0) {
        document.getElementById('output').innerText = terrible;
    }
    
}

/*     } else if(quality == 6 || quality == 7) {
        document.getElementById('output').innerText = good; */
/*     } else if(quality >= 6 && quality <= 7) {
        document.getElementById('output').innerText = good; */

/*       else if(quality > 3) */ 

/*     } else if (quality <= 2 && quality >= 0) {
        document.getElementById('output').innerText = terrible; */