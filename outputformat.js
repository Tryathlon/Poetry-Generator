function outputformat() {
    let linecount = 0;
    let j = 0;
    let len = 0;
    let tempstr = [];
    let k = 0;
    let tempstr2 = '';
    let i = 0;
    let titlestr = '';

    poemout[0] = 'title';
    poemout[1] = ' ';

    //console.log(phrase);
    for (i = 0; i < phrase.length; i++) {

        if (phrase[i] === '\n') {
            len = i - j;


            for (k = 0; k < len; k++) {
                j++;
                tempstr[k] = phrase[j];
            }
            tempstr[k - 1] = '';

            for (let q = 0; q < tempstr.length; q++) {
                tempstr2 = tempstr2 + tempstr[q];
            }

            //console.log(linecount);
            poemout[linecount + 2] = tempstr2;
            tempstr = [];
            tempstr2 = '';
            linecount++;
        }
    }



    poemout[0] = titlestr;
    poemout[2] = ' ';



    for (let q = 0; q < poemout.length; q++) {
        poemdisp = poemdisp + poemout[q] + '\n';
    }


    j = 0;
    k = 0,
        len = 0;
    i = 0;
    let tempwrd = [];
    let wrd = [];

    for (i = 0; i < poemdisp.length; i++) {


        if (poemdisp[i] === ' ' || poemdisp[i] === '.' || poemdisp[i] === ',' || poemdisp[i] === '\n' || poemdisp[i] === ':' || poemdisp[i] === ';') {
            len = i - j;

            for (k = 0; k < len; k++) {
                j++;
                tempwrd[k] = poemdisp[j];
            }

            if (tempwrd.length > wrd.length) {
                wrd = tempwrd;
            }
            //console.log(wrd);
            tempwrd = [];
        }
    }

    let second = '';
    wrd[0] = wrd[0].toUpperCase();

    for (i = 0; i < wrd.length; i++) {
        second += wrd[i];
    }



    

    titlestr = seedtxt + ' ' + second;

    poemdisp = titlestr + '\n' + poemdisp;

    poemout[0] = titlestr;
    //saveStrings(poemout, titlestr + '.txt');
    


}