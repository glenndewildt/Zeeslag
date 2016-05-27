/**
 * Created by Glenn on 19-5-2016.
 */



$(function(){

    $('td').click(function(){

        $(this).css("background-color","blue");


            alert('My position in table is: '+this.cellIndex+'x'+this.parentNode.rowIndex);
    });

});


//game object
function Game(){
    var id;
    var status;
    var enemyId;
    var enemyName;
    var winner;


}

//Player object
function Player(){
    var id;
    var name;
    var board;

}

//Board



//ship object
function Ship(){
    var id;
    var lenght;
    var name;
    var isVertical;
    var startCell;
    var hits =[];

    this.isDown = function(){
        self = this;
        if(hits.length == lenght ){
return true;
        }else{
return false;
        }
    };


}

