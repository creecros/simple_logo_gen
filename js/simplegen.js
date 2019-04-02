var canvas = document.getElementById('logo_image');
var canvas2 = document.getElementById('fav_image');

  canvas.width  = 5;
  canvas.height = 5;
  canvas2.width = 5;
  canvas2.height = 5;
  

var ctx = logo_image.getContext("2d");
var ctx2 = fav_image.getContext("2d");
var txt = "";
var txt2 = "";
var ico_b = document.getElementById('ico').value;
var ico = String.fromCharCode(parseInt(ico_b,16))
var clr = "black"
var fnt = "Arial"
var fnt2 = "Arial"
var clr2 = "white"

document.getElementById('ico').oninput = function() {
  ico_b = document.getElementById('ico').value;
  ico = String.fromCharCode(parseInt(ico_b,16))
  renderImage();
}

document.getElementById('txt').oninput = function() {
  txt = document.getElementById('txt').value;
  renderImage();
}

document.getElementById('txt2').oninput = function() {
  txt2 = document.getElementById('txt2').value;
  renderImage();
}

document.getElementById('clr').oninput = function() {
  clr = document.getElementById('clr').value;
  renderImage();
}

document.getElementById('clr2').oninput = function() {
  clr2 = document.getElementById('clr2').value;
  renderImage();
}

var fonts = ["Arial","Montez","Lobster","Josefin Sans","Shadows Into Light","Pacifico","Amatic SC", "Orbitron", "Rokkitt","Righteous","Dancing Script","Bangers","Chewy","Sigmar One","Architects Daughter","Abril Fatface","Covered By Your Grace","Kaushan Script","Gloria Hallelujah","Satisfy","Lobster Two","Comfortaa","Cinzel","Courgette","Annie Use Your Telescope","Baloo","Bowlby One SC","Bungee Inline","Cabin Sketch","Caveat","Contrail One","Damion","Economica","Fascinate Inline","Faster One","Fredericka the Great","Gabriela","Just Another Hand","Kodchasan","Love Ya Like A Sister","Megrim","Monoton","Mouse Memoirs","Podkova","Pompiere","Quicksand","Reenie Beanie","Rokkitt","Six Caps","Source Sans Pro","Special Elite","Spicy Rice","VT323","Wire One"];
var string = "";
var select = document.getElementById("select")
var select2 = document.getElementById("select2")
for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement('option');
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select.add(opt);
}
for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement('option');
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select2.add(opt);
}

document.getElementById('select').oninput = function() {
  fnt = document.getElementById('select').value;
  fontChange();
  renderImage();
}

document.getElementById('select2').oninput = function() {
  fnt2 = document.getElementById('select2').value;
  fontChange2();
  renderImage();
}

function fontChange(){
	var x = document.getElementById("select").selectedIndex;
  var y = document.getElementById("select").options;
	document.body.insertAdjacentHTML("beforeend", "<style> #text{ font-family:'"+y[x].text+"';}"+"#select{font-family:'"+y[x].text+"';</style>");
}

function fontChange2(){
	var x = document.getElementById("select2").selectedIndex;
  var y = document.getElementById("select2").options;
	document.body.insertAdjacentHTML("beforeend", "<style> #text{ font-family:'"+y[x].text+"';}"+"#select2{font-family:'"+y[x].text+"';</style>");
}

function renderImage() {

document.fonts.ready.then(_ => {
  
  ctx.font = '900 48px "Font Awesome 5 Free"';
  var ico_w = ctx.measureText(ico).width;
  
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  var ico_w2 = ctx2.measureText(ico).width;
  
  ctx.font = 'bold 48px '+ fnt;
  var txt_w = ctx.measureText(txt).width;
  
  ctx.font = 'bold 48px '+ fnt2;
  var txt2_w = ctx.measureText(txt2).width;
  
  canvas.width  = ico_w + txt_w + txt2_w + 15;
  canvas.height = 65;
  canvas2.width = ico_w;
  canvas2.height = 65;
  
  ctx.font = '900 48px "Font Awesome 5 Free"';
  ctx.fillStyle = clr;
  ctx.fillText(ico, 0, 50);
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  ctx2.fillStyle = clr;
  ctx2.fillText(ico, 0, 50);
  ctx.font = 'bold 48px '+ fnt;
  ctx.fillStyle = clr;
  ctx.fillText(txt, ico_w + 0,50);
  
  if (txt2 != "") {
  ctx.strokeStyle = clr;
  ctx.moveTo(ico_w + 0 + txt_w + 2, 50);
  ctx.lineTo(ico_w + 0 + txt_w + 2, 15);
  ctx.arcTo(ico_w + 0 + txt_w + 2, 12, ico_w + 0 + txt_w + 5, 12, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 2 + txt2_w + 3, 12);
  ctx.arcTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, 12, ico_w + 0 + txt_w + 2 + txt2_w + 6, 15, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, 50);
  ctx.arcTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, 53, ico_w + 0 + txt_w + 2 + txt2_w + 3, 53, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 5, 53);
  ctx.arcTo(ico_w + 0 + txt_w + 2, 53, ico_w + 0 + txt_w + 2, 50, 3);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = clr;
  ctx.fillRect(ico_w + 0 + txt_w + 2, 12,txt2_w + 6, 40);
  }
  
  ctx.font = 'bold 48px '+ fnt2;
  ctx.fillStyle = clr2;
  ctx.fillText(txt2, ico_w + 0 + txt_w + 5,50); 



})
}

var button = document.getElementById('fav-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas2.toDataURL('image/png');
    button.href = dataURL;
});
var button2 = document.getElementById('logo-download');
button2.addEventListener('click', function (e) {
    var dataURL2 = canvas.toDataURL('image/png');
    button2.href = dataURL2;
});
