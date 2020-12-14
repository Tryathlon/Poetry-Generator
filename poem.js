function poem() {

    fill(0);
    textSize(24);
    text(poemdisp, 15, 50);

    fill(0, 50, 255, 140)
    rectMode(CENTER);
    rect(width *.75, height*.9, buttonlen, buttonwid, 20)
    rectMode(CORNER);

    textSize(65);
    fill(255);
    textAlign(CENTER);
    text('Back', width *.75, (height *.9) + 20);
    textAlign(LEFT);


}