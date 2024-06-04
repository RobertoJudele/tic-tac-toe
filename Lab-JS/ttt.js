// var name=prompt("Hai sa jucam X si 0. Cum te cheama?")
// var side=prompt("Buna, "+name+".Cu ce vrei să joci? X sau 0? X începe primul." )
var board = ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
function printBoard(){
    var string="";
    string+="| "
    for(i=0;i<board.length;i++){
        if(board[i]=="X" || board[i]=="O"){
            string+=(board[i]+" | ")
        }
        else{
            string+=(i+" | ")
        }
        if((i+1)%3==0 && i<board.length-1){
            string+=("\n")
            string+=("| ")
        }
    }
    return string
}
function valid(pos){
    if(pos in ["1","2","3","4","5","6","7","8","9","0"]){
        return true
    }else{
        return false
    }
}
function win(){
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
        return board[0];
    } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
        return board[3];
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
        return board[6];
    } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
        return board[0];
    } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
        return board[1];
    } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
        return board[2];
    } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
        return board[0];
    } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
        return board[2];
    }else return false
}
function run(){
    var gameover=false
    var name=prompt("Hai sa jucam X si 0. Primul jucator: ")
    var secondname=prompt("Al doilea jucator: ")
    var secondsign
    var side=prompt("Buna, "+name+".Cu ce vrei să joci? X sau 0? X începe primul.")
    if(side=="X")
        secondsign="O"
    else secondsign="X"

    var x=false
    var semnCastigator
    while(gameover!=true){
        var pos=prompt("Unde vrei sa pui urmatorul semn?\n"+printBoard()) 
        if(valid(pos)){
            if(x){
                board[pos]="X"
                x=false
            }
            else{ 
                board[pos]="O"
                x=true
            }
        }else{
            alert("Pozitie invlida!")
        }
        prompt(printBoard())
        semnCastigator=win()
        if(semnCastigator=="X"){
            if(side==semnCastigator)
                alert(name+" a castigat!")
            else if(secondsign==semnCastigator)
                alert(secondname+" a castigat!")
            else alert("X a castigat")
            gameover=true
        }
        else if(semnCastigator=="O"){
            if(side==semnCastigator)
                alert(name+" a castigat!")
            else if(secondsign==semnCastigator)
                alert(secondname+" a castigat!")
            else alert("O a castigat")
            gameover=true
        }
    }
}
prompt(printBoard())
run()