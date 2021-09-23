
function fixdata(){
    var s1=sri.players;
    var play=s1[s1.selectedIndex].value;
    var s2=sri.turns;
    var turn=s2[s2.selectedIndex].value;
   
    if(play==2){
        document.getElementById("p2").innerText="Player1";
        document.getElementById("p3").innerText="Player2";
    }else if(play==3){
        
        document.getElementById("p1").innerText="Players";
        document.getElementById("p2").innerText="Player1";
        document.getElementById("p3").innerText="Player2";
        document.getElementById("p4").innerText="Player3";
    }
    else if(play==4){
        
        document.getElementById("p1").innerText="Player1";
        document.getElementById("p2").innerText="Player2";
        document.getElementById("p3").innerText="Player3";
        document.getElementById("p4").innerText="Player4";
    }
}
var count=0;
var vals = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
var sum1=0;
var sum2=0;
var sum3=0;
var sum4=0;
var index;
// var random = Math.floor(Math.random() * vals.length);
//S-Spades,C-Clubs,D-Diamonds,H-Hearts
const cardPairs={
    1:"AS",
    2:"2S",
    3:"3S",
    4:"4S",
    5:"5S",
    6:"6S",
    7:"7S",
    8:"8S",
    9:"9S",
    10:"10S",
    11:"JS",
    12:"QS",
    13:"KS",
    14:"AC",
    15:"2C",
    16:"3C",
    17:"4C",
    18:"5C",
    19:"6C",
    20:"7C",
    21:"8C",
    22:"9C",
    23:"10C",
    24:"JC",
    25:"QC",
    26:"KC",
    27:"AD",
    28:"2D",
    29:"3D",
    30:"4D",
    31:"5D",
    32:"6D",
    33:"7D",
    34:"8D",
    35:"9D",
    36:"10D",
    37:"JD",
    38:"QD",
    39:"KD",
    40:"AH",
    41:"2H",
    42:"3H",
    43:"4H",
    44:"5H",
    45:"6H",
    46:"7H",
    47:"8H",
    48:"9H",
    49:"10H",
    50:"JH",
    51:"QH",
    52:"KH"
}
const cardValue={
    "AS":1,
    "2S":2,
    "3S":3,
    "4S":4,
    "5S":5,
    "6S":6,
    "7S":7,
    "8S":8,
    "9S":9,
    "10S":10,
    "JS":11,
    "QS":12,
    "KS":13,
    "AC":1,
    "2C":2,
    "3C":3,
    "4C":4,
    "5C":5,
    "6C":6,
    "7C":7,
    "8C":8,
    "9C":9,
    "10C":10,
    "JC":11,
    "QC":12,
    "KC":13,
    "AD":1,
    "2D":2,
    "3D":3,
    "4D":4,
    "5D":5,
    "6D":6,
    "7D":7,
    "8D":8,
    "9D":9,
    "10D":10,
    "JD":11,
    "QD":12,
    "KD":13,
    "AH":1,
    "2H":2,
    "3H":3,
    "4H":4,
    "5H":5,
    "6H":6,
    "7H":7,
    "8H":8,
    "9H":9,
    "10H":10,
    "JH":11,
    "QH":12,
    "KH":13
}
// testing function
// function hi(){
//     document.body.innerHTML+=cardPairs[1];
// }
function roll(){
    var s1=sri.players;
    var play=s1[s1.selectedIndex].value;
    var s2=sri.turns;
    var turn=s2[s2.selectedIndex].value;
    var url1,url2,url3,url4;
    count+=1;
    if(play==2){
    if(count<=turn){
        var random2 = vals[Math.floor(Math.random() * vals.length)];
        sum2+=cardValue[cardPairs[random2]];
        var ind=vals.indexOf(random2);
        vals.splice(ind,1);
        url1="/static/images/cards/"+cardPairs[random2]+".png";
        document.getElementById("b"+count).innerHTML="<img src=\""+url1+"\" id=\"b"+count+"\" width=\"80px\" height=\"130px\">";
        var random3 = vals[Math.floor(Math.random() * vals.length)];
        sum3+=cardValue[cardPairs[random3]];
        var ind2=vals.indexOf(random3);
        vals.splice(ind2,1);
        url2="/static/images/cards/"+cardPairs[random3]+".png";
        document.getElementById("c"+count).innerHTML="<img src=\""+url2+"\" id=\"c"+count+"\" width=\"80px\" height=\"130px\">";
    
    }
    if(count>turn){
        
        document.getElementById("sum").style.visibility="visible";
        document.getElementById("sum2").innerHTML=sum2;
        document.getElementById("sum3").innerHTML=sum3;
        if(sum2>sum3){
            document.getElementById("result").innerHTML="Result: Player 1 is the Winner!!!"
        }else if(sum3>sum2){
            document.getElementById("result").innerHTML="Result: Player 2 is the Winner!!!"
        }else{
            document.getElementById("result").innerHTML="Game is a Tie!!!"
        }
        
    }
}
else if(play==3){
    
    
    if(count<=turn){
        var random2 = vals[Math.floor(Math.random() * vals.length)];
        sum2+=cardValue[cardPairs[random2]];
        var ind=vals.indexOf(random2);
        vals.splice(ind,1);
        url1="/static/images/cards/"+cardPairs[random2]+".png";
        document.getElementById("b"+count).innerHTML="<img src=\""+url1+"\" id=\"b"+count+"\" width=\"80px\" height=\"130px\">";
        var random3 = vals[Math.floor(Math.random() * vals.length)];
        sum3+=cardValue[cardPairs[random3]];
        var ind2=vals.indexOf(random3);
        vals.splice(ind2,1);
        url2="/static/images/cards/"+cardPairs[random3]+".png";
        document.getElementById("c"+count).innerHTML="<img src=\""+url2+"\" id=\"c"+count+"\" width=\"80px\" height=\"130px\">";
        var random4 = vals[Math.floor(Math.random() * vals.length)];
        sum4+=cardValue[cardPairs[random4]];
        var ind3=vals.indexOf(random4);
        vals.splice(ind3,1);
        url3="/static/images/cards/"+cardPairs[random4]+".png";
        document.getElementById("d"+count).innerHTML="<img src=\""+url3+"\" id=\"d"+count+"\" width=\"80px\" height=\"130px\">";
    }
    if(count>turn){
        
        document.getElementById("sum").style.visibility="visible";
        document.getElementById("sum2").innerHTML=sum2;
        document.getElementById("sum3").innerHTML=sum3;
        document.getElementById("sum4").innerHTML=sum4;
        if(sum2>sum3 && sum2>sum4){
            document.getElementById("result").innerHTML="Result: Player 1 is the Winner!!!"
        }else if(sum3>sum2 && sum3>sum4){
            document.getElementById("result").innerHTML="Result: Player 2 is the Winner!!!"
        }else if(sum3==sum2 && sum3==sum4){
            document.getElementById("result").innerHTML="Result: Game is a tie!!!"
        }else if(sum3==sum2 && sum3>sum4){
            document.getElementById("result").innerHTML="Result: Player 1 and Player 2 are Winners!!!"
        }else if(sum4==sum3 && sum3>sum2){
            document.getElementById("result").innerHTML="Result: Player 2 and Player 3 are Winners!!!"
        }else if(sum4==sum2 && sum4>sum3){
            document.getElementById("result").innerHTML="Result: Player 1 and Player 3 are Winners!!!"
        }
        else{
            document.getElementById("result").innerHTML="Result: Player 3 is the Winner!!!"
        }
    }
    
}
else if(play==4){
    
    
    if(count<=turn){
        var random1 = vals[Math.floor(Math.random() * vals.length)];
        sum1+=cardValue[cardPairs[random1]];
        var ind=vals.indexOf(random1);
        vals.splice(ind,1);
        url1="/static/images/cards/"+cardPairs[random1]+".png";
        document.getElementById("a"+count).innerHTML="<img src=\""+url1+"\" id=\"a"+count+"\" width=\"80px\" height=\"130px\">";;
        var random2 = vals[Math.floor(Math.random() * vals.length)];
        sum2+=cardValue[cardPairs[random2]];
        var ind2=vals.indexOf(random2);
        vals.splice(ind2,1);
        url2="/static/images/cards/"+cardPairs[random2]+".png";
        document.getElementById("b"+count).innerHTML="<img src=\""+url2+"\" id=\"b"+count+"\" width=\"80px\" height=\"130px\">";;
        var random3 = vals[Math.floor(Math.random() * vals.length)];
        sum3+=cardValue[cardPairs[random3]];
        var ind3=vals.indexOf(random3);
        vals.splice(ind3,1);
        url3="/static/images/cards/"+cardPairs[random3]+".png";
        document.getElementById("c"+count).innerHTML="<img src=\""+url3+"\" id=\"c"+count+"\" width=\"80px\" height=\"130px\">";;
        var random4 = vals[Math.floor(Math.random() * vals.length)];
        sum4+=cardValue[cardPairs[random4]];
        var ind4=vals.indexOf(random4);
        vals.splice(ind4,1);
        url4="/static/images/cards/"+cardPairs[random4]+".png";
        document.getElementById("d"+count).innerHTML="<img src=\""+url4+"\" id=\"d"+count+"\" width=\"80px\" height=\"130px\">";;
    }
    if(count>turn){
        
        document.getElementById("sum").style.visibility="visible";
        document.getElementById("sum1").innerHTML=sum1;
        document.getElementById("sum2").innerHTML=sum2;
        document.getElementById("sum3").innerHTML=sum3;
        document.getElementById("sum4").innerHTML=sum4;
        if(sum2>sum3 && sum2>sum4 && sum2>sum1){
            document.getElementById("result").innerHTML="Result: Player 2 is the Winner!!!"
        }else if(sum3>sum2 && sum3>sum4 && sum3>sum1){
            document.getElementById("result").innerHTML="Result: Player 3 is the Winner!!!"
        }else if(sum1>sum2 && sum1>sum4 && sum1>sum3){
            document.getElementById("result").innerHTML="Result: Player 1 is the Winner!!!"
        }else if(sum4>sum2 && sum4>sum1 && sum4>sum3){
            document.getElementById("result").innerHTML="Result: Player 4 is the Winner!!!"
        }
        else{
            document.getElementById("result").innerHTML="Result:It is a tie! Play Again!"
        } 
    }
}

}

function reload(){
    location.reload();
}