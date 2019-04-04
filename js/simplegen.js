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
var clr = "#000000"
var ico_clr = clr;
var ico_sz = 48;
var fnt = "Arial";
var fnt2 = "Arial";
var clr2 = "#cccccc";
var off_1 = 0;
var sty = true;
var shapes = true;
var off_clr = "#f2f2f2";
var a_bold = "bold ";
var m_bold = "bold ";
var l_sp = 0;

document.getElementById('ico').oninput = function() {
  ico_b = document.getElementById('ico').value;
  ico = String.fromCharCode(parseInt(ico_b,16));
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('txt').oninput = function() {
  txt = document.getElementById('txt').value;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('txt2').oninput = function() {
  txt2 = document.getElementById('txt2').value;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('fx1').onclick = function() {
  if (off_1 !== 3) {
  off_1 = 3;
  if (sty) {renderImage();} else {renderImage2();}
  } else {
  off_1 = 0;
  if (sty) {renderImage();} else {renderImage2();}
  }
}

document.getElementById('fx2').onclick = function() {
  clr = document.getElementById('clr').value;
  clr2 = hexToComplimentary(clr);
  document.getElementById('clr2').value = clr2;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('fx4').onclick = function() {
  if (sty) { sty = false; document.getElementById('l_sp').hidden = false; renderImage2();} else {sty = true; document.getElementById('l_sp').hidden = true; renderImage();}
}

document.getElementById('m_bold').onclick = function() {
  if (m_bold == "") { m_bold = "bold ";} else {m_bold = "";}
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('a_bold').onclick = function() {
  if (a_bold == "") { a_bold = "bold ";} else {a_bold = "";}
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('fx5').onclick = function() {
  if (shapes) { shapes = false;} else {shapes = true;}
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('clr').oninput = function() {
  clr = document.getElementById('clr').value;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('clr2').oninput = function() {
  clr2 = document.getElementById('clr2').value;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('off_clr').oninput = function() {
  off_clr = document.getElementById('off_clr').value;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('ico_clr').oninput = function() {
  ico_clr = document.getElementById('ico_clr').value;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('ico_sz').oninput = function() {
  ico_sz = document.getElementById('ico_sz').value;
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('l_sp').oninput = function() {
  l_sp = document.getElementById('l_sp').value;
  if (sty) {renderImage();} else {renderImage2();}
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
  if (sty) {renderImage();} else {renderImage2();}
}

document.getElementById('select2').oninput = function() {
  fnt2 = document.getElementById('select2').value;
  fontChange2();
  if (sty) {renderImage();} else {renderImage2();}
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
  
  ctx.font = '900 '+ico_sz+'px "Font Awesome 5 Free"';
  var ico_w = ctx.measureText(ico).width;
  var ico_h = parseInt(ctx.font.match(/\d+/), 10);
  
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  var ico_w2 = ctx2.measureText(ico).width;
  
  ctx.font = m_bold + '48px '+ fnt;
  var txt_w = ctx.measureText(txt).width;
  var txt_h = parseInt(ctx.font.match(/\d+/), 10);
  
  ctx.font = a_bold + '48px '+ fnt2;
  var txt2_w = ctx.measureText(txt2).width;
  var txt2_h = parseInt(ctx.font.match(/\d+/), 10);
  
  var max_h = Math.max(ico_h, txt_h, txt2_h);
  var start_ico = max_h + 12.5;
  var start_txt = max_h + 12.5 + 2;
  
  canvas.width  = ico_w + txt_w + txt2_w + 15;
  canvas.height = max_h+25;
  canvas2.width = ico_w2 +5;
  canvas2.height = 58;
  
  if (off_1 == 3){
  ctx.font = '900 '+ico_sz+'px "Font Awesome 5 Free"';
  ctx.fillStyle = off_clr;
  ctx.fillText(ico, off_1, start_ico + off_1);
  ctx.font = m_bold + '48px '+ fnt;
  ctx.fillStyle = off_clr;
  ctx.fillText(txt, ico_w + off_1 ,start_txt + off_1);
  }
  
  if (off_1 == 3 && !shapes){
  ctx.font = a_bold + '48px '+ fnt2;
  ctx.fillStyle = off_clr;
  ctx.fillText(txt2, ico_w + 0 + txt_w + 5 + off_1,start_txt + off_1); 
  }
  
  ctx.font = '900 '+ico_sz+'px "Font Awesome 5 Free"';
  ctx.fillStyle = ico_clr;
  ctx.fillText(ico, 0 , start_ico );
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  ctx2.fillStyle = ico_clr;
  ctx2.fillText(ico, 0, 48);
  ctx.font = m_bold + '48px '+ fnt;
  ctx.fillStyle = clr;
  ctx.fillText(txt, ico_w, start_txt);
  
  if (txt2 != "" && shapes) {
  ctx.strokeStyle = clr;
  ctx.moveTo(ico_w + 0 + txt_w + 2, start_txt);
  ctx.lineTo(ico_w + 0 + txt_w + 2, start_txt - txt2_h);
  ctx.arcTo(ico_w + 0 + txt_w + 2, start_txt - txt2_h -3, ico_w + 0 + txt_w + 5, start_txt - txt2_h -3, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 2 + txt2_w + 3, start_txt - txt2_h -3);
  ctx.arcTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, start_txt - txt2_h -3, ico_w + 0 + txt_w + 2 + txt2_w + 6, start_txt - txt2_h, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, start_txt);
  ctx.arcTo(ico_w + 0 + txt_w + 2 + txt2_w + 6, start_txt + 3, ico_w + 0 + txt_w + 2 + txt2_w + 3, start_txt + 3, 3);
  ctx.lineTo(ico_w + 0 + txt_w + 5, start_txt + 3);
  ctx.arcTo(ico_w + 0 + txt_w + 2, start_txt + 3, ico_w + 0 + txt_w + 2, start_txt, 3);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = clr;
  ctx.fillRect(ico_w + 0 + txt_w + 2, start_txt - txt2_h -3,txt2_w + 6, txt2_h + 6);
  }
  
  ctx.font = a_bold + '48px '+ fnt2;
  ctx.fillStyle = clr2;
  ctx.fillText(txt2, ico_w + 0 + txt_w + 5,start_txt); 
})
}

function renderImage2() {

document.fonts.ready.then(_ => {
  canvas.style.letterSpacing = 0 + 'px';
  ctx.font = '900 '+ico_sz+'px "Font Awesome 5 Free"';
  var ico_w = ctx.measureText(ico).width;
  var ico_h = parseInt(ctx.font.match(/\d+/), 10);
  
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  var ico_w2 = ctx2.measureText(ico).width;
  
  ctx.font = m_bold + '48px '+ fnt;
  var txt_w = ctx.measureText(txt).width;
  var txt_h = parseInt(ctx.font.match(/\d+/), 10);
  
  ctx.font = a_bold + '12px '+ fnt2;
  var txt2_w = ctx.measureText(txt2).width;
  var txt2_h = parseInt(ctx.font.match(/\d+/), 10);
  
  var max_w = Math.max(ico_w, txt_w, txt2_w);
  var center = (max_w + 15) / 2;
  
  canvas.width  = max_w + 15;
  canvas.height = ico_h + txt_h + txt2_h + 35;
  canvas2.width = ico_w2 +5;
  canvas2.height = 58;
  
  ctx.textAlign = "center";
  
  if (off_1 == 3){
  ctx.font = '900 '+ico_sz+'px "Font Awesome 5 Free"';
  ctx.fillStyle = off_clr;
  ctx.fillText(ico, center + off_1, ico_h + 12.5 + off_1);
  ctx.font = m_bold + '48px '+ fnt;
  ctx.fillStyle = off_clr;
  ctx.fillText(txt, center + off_1 ,ico_h + 5 + txt_h + 12.5 + off_1);
  }
  ctx.font = '900 '+ico_sz+'px "Font Awesome 5 Free"';
  ctx.fillStyle = ico_clr;
  ctx.fillText(ico, center , ico_h + 12.5 );
  ctx2.font = '900 48px "Font Awesome 5 Free"';
  ctx2.fillStyle = ico_clr;
  ctx2.fillText(ico, 0, 48);
  canvas.style.letterSpacing = 0 + 'px';
  ctx.font = m_bold + '48px '+ fnt;
  ctx.fillStyle = clr;
  ctx.fillText(txt, center, ico_h + 5 + txt_h + 12.5);
  
  if (txt2 != "" && shapes) {
  ctx.strokeStyle = clr;
  ctx.moveTo(center - (txt_w/2), ico_h + 10 + txt_h + 12.5);
  ctx.lineTo(center + (txt_w/2), ico_h + 10 + txt_h + 12.5);
  ctx.lineWidth = 2;
  ctx.stroke();
  }
  if (off_1 == 3){
  canvas.style.letterSpacing = document.getElementById('l_sp').value + 'px';
  ctx.font = a_bold + '12px '+ fnt2;
  ctx.fillStyle = off_clr;
  ctx.fillText(txt2, center + off_1 ,ico_h + 5 + txt_h + 5 + txt2_h + 12.5 + off_1); 
  }
  canvas.style.letterSpacing = document.getElementById('l_sp').value + 'px';
  ctx.font = a_bold + '12px '+ fnt2;
  ctx.fillStyle = clr2;
  ctx.fillText(txt2, center,ico_h + 5 + txt_h + 5 + txt2_h + 12.5); 
  l_sp = 0;
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


/* hexToComplimentary : Converts hex value to HSL, shifts
 * hue by 180 degrees and then converts hex, giving complimentary color
 * as a hex value
 * @param  [String] hex : hex value  
 * @return [String] : complimentary color as hex value
 */
function hexToComplimentary(hex){

    // Convert hex to rgb
    // Credit to Denis http://stackoverflow.com/a/36253499/4939630
    var rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16); }).join(',') + ')';

    // Get array of RGB values
    rgb = rgb.replace(/[^\d,]/g, '').split(',');

    var r = rgb[0], g = rgb[1], b = rgb[2];

    // Convert RGB to HSL
    // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
    r /= 255.0;
    g /= 255.0;
    b /= 255.0;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2.0;

    if(max == min) {
        h = s = 0;  //achromatic
    } else {
        var d = max - min;
        s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

        if(max == r && g >= b) {
            h = 1.0472 * (g - b) / d ;
        } else if(max == r && g < b) {
            h = 1.0472 * (g - b) / d + 6.2832;
        } else if(max == g) {
            h = 1.0472 * (b - r) / d + 2.0944;
        } else if(max == b) {
            h = 1.0472 * (r - g) / d + 4.1888;
        }
    }

    h = h / 6.2832 * 360.0 + 0;

    // Shift hue to opposite side of wheel and convert to [0-1] value
    h+= 180;
    if (h > 360) { h -= 360; }
    h /= 360;

    // Convert h s and l values into r g and b values
    // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
    if(s === 0){
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255); 
    b = Math.round(b * 255);

    // Convert r b and g values to hex
    rgb = b | (g << 8) | (r << 16); 
    return "#" + (0x1000000 | rgb).toString(16).substring(1);
}  
