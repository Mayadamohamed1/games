let turn='x';
let square=[];
function winner(){
    for(let i=1; i<10;i++){
    square[i]=document.getElementById('item'+i).innerHTML;
}
if(square[1]==square[2]&& square[2]==square[3]&&square[2]!=''){

    title.innerHTML=`${square[1]} Winner`;
    alert('player' +square[1] +' wins the game');


}else if(square[4]==square[5]&& square[5]==square[6]&&square[5]!=''){
    title.innerHTML=`${square[4]} Winner`;
    alert('player' +square[4] +' wins the game');

    
}else if(square[7]==square[8]&& square[8]==square[9]&&square[7]!=''){
    title.innerHTML=`${square[7]} Winner`;
    alert('player' +square[7] +' wins the game');
    
}else if(square[1]==square[4]&& square[4]==square[7]&&square[1]!=''){
    title.innerHTML=`${square[1]} Winner`;
    alert('player' +square[1] +' wins the game');
    
}else if(square[2]==square[5]&& square[5]==square[8]&&square[5]!=''){
    title.innerHTML=`${square[2]} Winner`;
    alert('player' +square[2] +' wins the game');
}else if(square[3]==square[6]&& square[6]==square[9]&&square[9]!=''){
    title.innerHTML=`${square[3]} Winner`;
    alert('player' +square[3] +' wins the game');
}else if(square[1]==square[5]&& square[5]==square[9]&&square[1]!=''){
    title.innerHTML=`${square[1]} Winner`;
    alert('player' +square[1] +' wins the game');
}else if(square[3]==square[5]&& square[5]==square[7]&&square[3]!=''){
    title.innerHTML=`${square[3]} Winner`;
    alert('player' +square[3] +' wins the game');
}

}

let title=document.querySelector('#title');
function game(id){
    let element=document.getElementById(id);
    if(turn==='x' && element.innerHTML=='')
    {
element.innerHTML='X';
turn='o';
title.innerHTML='O';
    }
    else if(turn==='o' && element.innerHTML==''){
        element.innerHTML='O';
        turn='x';
        title.innerHTML='X';
    }
    winner();
}
