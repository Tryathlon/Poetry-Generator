function mousePressed() {
    left = (width / 2) - (buttonlen / 2);
    right = (width / 2) + (buttonlen / 2);
    up = (height / 2) - (buttonwid / 2);
    bottom = (height / 2) + (buttonwid / 2);

    left2 = (width * .75) - (buttonlen / 2);
    right2 = (width * .75) + (buttonlen / 2);
    up2 = (height * .9) - (buttonwid / 2);
    bottom2 = (height * .9) + (buttonwid / 2);


    if (state === 0) {
        if (mouseX >= left && mouseX <= right && mouseY >= up && mouseY <= bottom) {


            const rnn = ml5.charRNN("Poetry/", modelLoaded);

            numb = floor(random(0, adject.length));
            seedtxt = adject[numb];

            options = {
                seed: seedtxt,
                length: random(300, 600),
                temperature: random(0.3, 0.7),
            }
           // console.log(seedtxt);

            rnn.generate(options, results);
            state = 1;
        }
    }


    if (state === 1) {
        if (mouseX >= left2 && mouseX <= right2 && mouseY >= up2 && mouseY <= bottom2) {
            state = 0;
            phrase = '';
            poemdisp = ' ';
            poemout = [];
        }
    }
}