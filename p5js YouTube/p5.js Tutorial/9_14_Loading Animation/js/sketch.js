// let imgs = [];
// let song1;
// let song2;

let songs = [];
let angle = 0;

let loading = true;

let counter = 0;

function preload () {
  // for (let i = 0; i < 41; i++) {
  //     let num = i < 10 ? '0' + i : i; // Если i < 10, то к числу i добавляется символ '0' и присваивается
  //                                     // переменной num, иначе просто присваивается значение i.
  //     img[i-1] = loadImage('stick/stick' + num + ........... ) // часть кода отсутствует
  //     //папка stick не используется
  // }
  // song1 = loadSound ('rainbow.mp3');
  // song2 = loadSound('rainbow.mp3');
}
/** не используется
*
function progress(percent) {
    console.log(floor(percent*100));
}
function error(err){
    console.log(err);
}
 * 
*/


function soundLoaded (song) {
  song1 = song;
  song1.play ();
  loading = false;
}

// function rainbowSong (song, filename){   // закрытая функция для доступа к конкретному аудиофайлу
function rainbowSong (index, filename){   
    loadSound (filename, soundLoaded);
    function soundLoaded(sound){
        // console.log(filename);
        console.log(index + ' ' + filename);
        // song = sound;
        songs[index] = sound;
        // song.play();
        songs[index].play();
        counter++;
        if(counter == 2) {
            loading = false;
        }
    }
}

function setup () {
  createCanvas (300, 300);
  console.log (floor (millis ()) + ' milliseconds');
//   song1 = loadSound ('rainbow.mp3', soundLoaded);
//   song1 = loadSound ('rainbow.mp3', soundLoaded,error, progress); не используется

    // rainbowSong(song1, 'rainbow1.mp3');
    // rainbowSong(song2, 'rainbow2.mp3');
    rainbowSong(0, 'rainbow1.mp3');
    rainbowSong(1, 'rainbow2.mp3');

//   song1 = loadSound ('rainbow.mp3', soundLoaded); теперь определяем какой файл звучит в закрытой функции
//   song2 = loadSound ('rainbow.mp3', soundLoaded);
}

function draw () {
  background (51);

  if (loading) {
    translate (width / 2, height / 2);
    rotate (angle);
    strokeWeight (4);
    stroke (255);
    line (0, 0, 100, 0);
    angle += 0.1;
  }else{
    background(0,255,0);
  }
}
