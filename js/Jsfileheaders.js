function header(){
    document.write("<script src=\"js/css-popup.js\"></script>");
    document.write("<script src=\"js/item.js\"></script>");
    document.write("<script src=\"js/player.js\"></script>");
    document.write("<script src=\"js/monster.js\"></script>");
    document.write("<script src=\"js/itemObj.js\"></script>");
    document.write("<script src=\"js/enemyObj.js\"></script>");
    document.write("<script src=\"js/highscores.js\"></script>");
    document.write("<script src=\"js/menu.js\"></script>");
    document.write("<script src=\"js/summon.js\"></script>");
	 document.write("<script src=\"js/questMenu.js\"></script>");
    
    commonEnemy = starter.clone();
    document.getElementById("monstImage").src = (commonEnemy.enemyImg);
    document.getElementById("monstHealth").style.width = "100%";
}