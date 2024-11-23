// add on website 

function sendXMLHttpRequest() {
    var http = new XMLHttpRequest();
    var url = 'https://script.google.com/macros/s/AKfycbw5F_LTmD9irLbJyWLUHYXQ--oucQNOOPiSK_4YC9HXWypYZx3gmpHAF5LnMx15vevE6g/exec';  //in appscript deply you get the Web app api 
    var cid = document.cookie.split("_ga=")[1].toString().split(";")[0];
    var creditplus = '{{ creditplus_fpc }}' //let say any cookie values from wesite
    var params = 'clientIdFs=' + cid + '&creditplusValue=' + creditplus;
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    };
    http.send(params);
}
try {
    sendXMLHttpRequest();
} catch (err) {
    console.log(err);
}

// it collect 3 data such - ClientId, creditplusValue, Date in sheet!!!! 

// Happy data scraping
