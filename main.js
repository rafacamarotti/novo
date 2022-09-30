//comece aqui
nomedoestudantearay=[];
function submit(){
    displaystudantearay=[];
    for(var i=1;i<=4;i++){
        var nomes=document.getElementById("nameOfTheStudent"+i).value;
        nomedoestudantearay.push(nomes);
    }
    var comprimento=nomedoestudantearay.length;
    for(var j=0;j<comprimento;j++){
        displaystudantearay.push("<h4>nome- "+nomedoestudantearay[j]+"</h4>");

    }
    document.getElementById("displayNameWithCommas").innerHTML=displaystudantearay;
    var semvirgula=displaystudantearay.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML=semvirgula;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";
}
function sorting(){
    nomedoestudantearay.sort();
    nomesorganizadosaray=[];
    var comprimento=nomedoestudantearay.length;
    for(var j=0;j<comprimento;j++){
        nomesorganizadosaray.push("<h4>nome- "+nomedoestudantearay[j]+"</h4>");   
    }
    var semvirgula=displaystudantearay.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML=semvirgula;

}

