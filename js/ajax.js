function onImgClick(e){
    document.getElementById("show").innerHTML= "<img class=\"productImage\" src=\""+ e.target.src +"\">";
}
function bigFont(x) {
    x.style.fontSize = "30px";
}
function smallFont(x) {
    x.style.fontSize = "20px";
}
function logoImg(x) {
    x.className = "logo";
    setTimeout(function(){x.className="logo animated flash"},150);
}
function mousein(){
    document.getElementById("audio").pause();
    document.getElementById("audio").currentTime=0;
    document.getElementById("mouse").currentTime=0;
    document.getElementById("mouse").play();
}
function home(){
    document.getElementById("mouse").pause();
    document.getElementById("mouse").currentTime=0;
    document.getElementById("audio").currentTime=0;
    document.getElementById("audio").play();
    document.getElementById("contentAll").className="animated fadeOut";
    document.getElementById("home").style.display="block";
    document.getElementById("home").className="animated fadeIn";
    document.body.style.backgroundImage = "url('res/space.jpg')";
    document.getElementById("contentAll").style.display="none";
}
function loadData(number){
    document.getElementById("mouse").pause();
    document.getElementById("mouse").currentTime=0;
    document.getElementById("audio").currentTime=0;
    document.getElementById("audio").play();
    document.getElementById("home").style.display="none";
    var xmlhttp,xmlDoc,x;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","../res/Gunpla.xml",false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    x = xmlDoc.getElementsByTagName("MODEL");
    // background = x[number].getElementsByTagName("BG")[0].childNodes[0].nodeValue;
    name = x[number].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
    serie = x[number].getElementsByTagName("SERIE")[0].childNodes[0].nodeValue;
    scale = x[number].getElementsByTagName("SCALE")[0].childNodes[0].nodeValue;
    part = x[number].getElementsByTagName("PART")[0].childNodes[0].nodeValue;
    cost = x[number].getElementsByTagName("COST")[0].childNodes[0].nodeValue;
    background = x[number].getElementsByTagName("BACKGROUND")[0].childNodes[0].nodeValue;
    vdo = x[number].getElementsByTagName("VDO")[0].childNodes[0].nodeValue;
    pics = x[number].getElementsByTagName("IMAGE");
    document.getElementById("vdogundam").src=vdo;
    document.body.style.backgroundImage = "url('res/"+background+"')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "background 1000ms ease-in 0.01s";

    var list = "";
    for (var i = 0 ; i < pics.length; i++) {
        console.log(pics[i].childNodes[0].nodeValue)
        list += "<img class=\"productImage\" src=\""+ "../res/"+ pics[i].childNodes[0].nodeValue+"\">";
    }

    document.getElementById("nav").innerHTML= list;
    var pList = document.getElementsByClassName("productImage")
    for (var i = 0 ; i < pList.length; i++) {
        pList[i].onclick = onImgClick;
    }
    document.getElementById("contentAll").className="row detailContent";
    document.getElementById("contentAll").style.display="none";
    
    setTimeout(function(){

        document.getElementById("contentAll").style.display="block";
        document.getElementById("contentAll").className="animated zoomIn row detailContent"
    },300);
    
    //$(".productImage").click(onImgClick);

    document.getElementById("show").innerHTML= ""
    if(pics.length>0){
        document.getElementById("show").innerHTML="<img class=\"productImage\" src=\""+ "../res/"+ pics[0].childNodes[0].nodeValue+"\">";
    }
    document.getElementById("detail").innerHTML = 
        "<p> product : "+name+"</p><br>"+
        "<p> serie : "+serie+"</p><br>"+
        "<p> scale : "+scale+"</p><br>"+
        "<p> part : "+part+"</p><br>"+
        "<p> cost : "+cost+"</p><br>"
    ;

    // xhttp.open("POST","")
    document.getElementById("bgdetail").style.display="block"
    document.getElementById("productPic").style.display="block"
}

