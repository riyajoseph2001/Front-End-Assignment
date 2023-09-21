function colorCreator(color, data) {
    //function receives 2 arguments color and data
    const red = "\x1b[31m";
    const black = "\x1b[30m";
    const green = "\x1b[32m";
    const yellow = "\x1b[33m";
    const blue = "\x1b[34m";
    const magenta = "\x1b[35m";
    const cyan = "\x1b[36m";
    const white = "\x1b[37m";
    const arr = [];
    //Storing the color codes in Array
    arr[0] = black;
    arr[1] = red;
    arr[2] = green;
    arr[3] = blue;
    arr[4] = yellow;
    arr[5] = magenta;
    arr[6] = cyan;
    arr[7] = white;
    console.log(arr[color] + data);
}
//colorCreator function called with color and data
colorCreator(1, "Red Color");
colorCreator(2, "Green Color");
colorCreator(3, "Blue Color");
