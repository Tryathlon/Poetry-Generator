function menu() {
    
    fill(0,50,255,140)
    rectMode(CENTER);
    rect (width/2,height/2,buttonlen,buttonwid,20) 
    rectMode(CORNER);

    textSize(65);
    fill(255);
    textAlign(CENTER);
    text('Poem!',width/2,(height/2)+20);
    textAlign(LEFT);
  }