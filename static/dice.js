function hi(){
    document.body.innerHTML+="hi";
}
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
const vals = [1,2,3,4,5,6];
var sum1=0;
var sum2=0;
var sum3=0;
var sum4=0;
var random = Math.floor(Math.random() * vals.length);

function roll(){
    var s1=sri.players;
    var play=s1[s1.selectedIndex].value;
    var s2=sri.turns;
    var turn=s2[s2.selectedIndex].value;
    count+=1;
    if(play==2){
    if(count<=turn){
        var random2 = vals[Math.floor(Math.random() * vals.length)];
        sum2+=random2;
        document.getElementById("b"+count).innerText=random2;
        var random3 = vals[Math.floor(Math.random() * vals.length)];
        sum3+=random3;
        document.getElementById("c"+count).innerText=random3;
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
        sum2+=random2;
        document.getElementById("b"+count).innerText=random2;
        var random3 = vals[Math.floor(Math.random() * vals.length)];
        sum3+=random3;
        document.getElementById("c"+count).innerText=random3;
        var random4 = vals[Math.floor(Math.random() * vals.length)];
        sum4+=random4;
        document.getElementById("d"+count).innerText=random4;
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
        sum1+=random1;
        document.getElementById("a"+count).innerText=random1;
        var random2 = vals[Math.floor(Math.random() * vals.length)];
        sum2+=random2;
        document.getElementById("b"+count).innerText=random2;
        var random3 = vals[Math.floor(Math.random() * vals.length)];
        sum3+=random3;
        document.getElementById("c"+count).innerText=random3;
        var random4 = vals[Math.floor(Math.random() * vals.length)];
        sum4+=random4;
        document.getElementById("d"+count).innerText=random4;
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
        }else if(sum3==sum2 && sum3==sum4 && sum1==sum2){
            document.getElementById("result").innerHTML="Result: Game is a tie!!!"
        }else if(sum4>sum2 && sum4>sum1 && sum4==sum3){
            document.getElementById("result").innerHTML="Result: Player 4 is the Winner!!!"
        }else if(sum1>sum2 && sum1>sum3 && sum1>sum4){
            document.getElementById("result").innerHTML="Result: Player 1 is the Winner!!!"
        }
        else{
            document.getElementById("result").innerHTML="Result: It is a tie play again!!!"
        } 
       
    }
}

}

function reload(){
    location.reload();
}