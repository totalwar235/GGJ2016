function summonMenu() {
    var pent = "   <p><button img=\"#\" onclick=\"summonRand(1)\">Pentagram</button></p>";
    var poke = "   <p><button img=\"#\" onclick=\"summonRand(2)\">Pokeball</button></p>";
    var tome = "   <p><button img=\"#\" onclick=\"summonRand(3)\">Tome of Death</button></p>";
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"summonPopUp\" style=\"display:none\">");
    document.write("     <a href=\"#\" onclick=\"popup('summonPopUp')\" >Click to Close</a>");
    document.write(pent);
    document.write(poke);
    document.write(tome);
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('summonPopUp')\" img=\"#\">Summon</button>");
}

function summonRand(type) {
    switch(type){
        case 1:
            console.log("chose Pentagram");
            break;
        case 2:
            console.log("chose Pokeball");
            break;
        case 3:
            console.log("chose Tome of Death");
            break;
    }
}