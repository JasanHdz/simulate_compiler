import SplitTokens from "./plugins/SplitTokens.js";
import Interpret from "./plugins/Interpret.js";
import readFile from "./utils/readFile.js";
import DrawFigures from "./plugins/DrawFigures.js";
import Debuger from "./plugins/Debuger.js";

const container = document.getElementById("debugger");
const canvas = document.getElementById('area_de_dibujo');
const string = document.getElementById("tokens");
const $button = document.getElementById("interprete");
const $clean = document.getElementById('limpiar');
const fileToLoad = document.getElementById("file");

const tokens = new Interpret({
  splitTokens: new SplitTokens(),
  drawings: new DrawFigures({ canvas }),
  debuger: new Debuger({ container }),
  container,
});

$clean.onclick = () => { 
  tokens.drawings.cleanCanvas();
  tokens.ids = [];
}
$button.onclick = () => tokens.processTokens(string);
fileToLoad.onchange = () => {
  readFile(fileToLoad, string);
  string.focus();
};


// function test(flag) {
//   if(!flag)
//   setTimeout(function () {
//     console.log("hola");
//     test(true);
//   }, 6000);

//   // otro código;
//   else {
//     console.log("No saludo");
//   }
// }

// test();