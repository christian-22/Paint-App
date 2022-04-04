//Christian Cox - 2/1/2022

function setup() {
    createCanvas(800,500);
    background(240);

    strokeWeight(4);
    colors = color(25);

  }
  
  function draw() {
    
    // color palette box
    stroke(color(215));
    
    // values taken from HTML color code reference: w3schools.com/colors/colors_name.asp
    red = color(255,0,0);
    orange = color(255,165,0);
    yellow = color(255,255,0);
    green = color(0,255,0);
    cyan = color(0,255,255);
    blue = color(0,0,255);
    magenta = color(255,0,255);
    brown = color(165,42,42);
    white = color(255,255,255);
    black = color(0,0,0);

    // red box
    fill(red);
    rect(0,0,25,25);
    // orange box
    fill(orange);
    rect(0,25,25,25);
    // yellow box
    fill(yellow);
    rect(0,50,25,25);
    // green box
    fill(green);
    rect(0,75,25,25);
    // cyan box
    fill(cyan);
    rect(0,100,25,25);
    // blue box
    fill(blue);
    rect(0,125,25,25);
    // magenta box
    fill(magenta);
    rect(0,150,25,25);
    // brown box
    fill(brown);
    rect(0,175,25,25);
    // white box
    fill(white);
    rect(0,200,25,25);
    // black box
    fill(black);
    rect(0,225,25,25);
    
    
    // selecting boxes based on position of mouse
    if (mouseIsPressed)
    {
        if (mouseX <= 25) 
        {
            if (mouseY <= 25) 
            {
                colors = color(red);
            }
            else if (mouseY <= 50)
            {
                colors = color(orange);
            }
            else if (mouseY <= 75)
            {
                colors = color(yellow);
            }
            else if (mouseY <= 100)
            {
                colors = color(green);
            }
            else if (mouseY <= 125)
            {
                colors = color(cyan);
            }
            else if (mouseY <= 150)
            {
                colors = color(blue);
            }
            else if (mouseY <= 175)
            {
                colors = color(magenta);
            }
            else if (mouseY <= 200)
            {
                colors = color(brown);
            }
            else if (mouseY <= 225)
            {
                colors = color(white);
            }
            else if (mouseY <= 250)
            {
                colors = color(black);
            }
        }
        
        // making mouse clicks control the color tool
        stroke(colors);
        line(mouseX, mouseY, pmouseX, pmouseY);

    }
  }