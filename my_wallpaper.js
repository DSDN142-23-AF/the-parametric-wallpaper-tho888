// ------------------------ crane-glyph-controls ------------------------
let cS = 3; // scaling (ideal range: 2 - 4)
let sW = cS / 7; // strokeWeight (ideal range: 4 - 10)
let lp_a = 90; // left-padding
let tp_a = 10; //  top-padding

// ------------------------ background-shapes-controls ------------------------
let shS = 12; // scale
// var shO = 10; // shape opacity
let lp_b = 10; // left-padding X glyph
let tp_b = 0; //top-padding X glyph
let lp_c = 135; // left-padding square glyph
let tp_c = 130; //top-padding square glyph
let lp_d = 35; // left-padding zigzag glyph
let tp_d = 110; //top-padding zigzag glyph

// ------------------------ global-controls ------------------------
let bG = 24 // sets the background colour (0-255)
let hue = 15; // sets the hue (0-100)
let hueRange = 15; // sets range of colours, per cent +/- of the hue (0-100)
let sat = 20; // sets saturation (0-100)
let bri = 70; // sets brightness (0-100)

// ------------------------ wallpaper-setup ------------------------
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); // DEVELOP_GLYPH  GRID_WALLPAPER  GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN); // FIT_TO_SCREEN NINE_LANDSCAPE NINE_PORTRAIT A4  A3
  pWallpaper.show_guide(false); // true false
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(bG);
}

if (bG < 41 || bG > 179) {
  var shO = 16;
} else if (bG < 81 || bG > 159) {
  var shO = 30;
} else {
  var shO = 35;
}

function my_symbol() {

  // ------------------------ background-shapes ------------------------
  colorMode(HSB, 100);
  fill(hue, sat, random(bri - bri / 1.2, bri), shO);
  noStroke();

  beginShape();
  vertex(shS * 2 + lp_b, shS * 3 + tp_b);
  vertex(shS * 3 + lp_b, shS * 2 + tp_b);
  vertex(shS * 3.5 + lp_b, shS * 2.5 + tp_b);
  vertex(shS * 4 + lp_b, shS * 2 + tp_b);
  vertex(shS * 5 + lp_b, shS * 3 + tp_b);
  vertex(shS * 4.5 + lp_b, shS * 3.5 + tp_b);
  vertex(shS * 5 + lp_b, shS * 4 + tp_b);
  vertex(shS * 4 + lp_b, shS * 5 + tp_b);
  vertex(shS * 3.5 + lp_b, shS * 4.5 + tp_b);
  vertex(shS * 3 + lp_b, shS * 5 + tp_b);
  vertex(shS * 2 + lp_b, shS * 4 + tp_b);
  vertex(shS * 2.5 + lp_b, shS * 3.5 + tp_b);
  endShape(CLOSE);

  rect(lp_c, tp_c, shS * 2, shS * 2, shS / 2);

  stroke(hue, sat / 5, random(bri - 30, bri), shO);
  strokeWeight(sW * 8);
  strokeCap(ROUND);
  noFill();

  beginShape();
  vertex(shS + lp_d, shS + tp_d);
  vertex(shS + lp_d + 10, 10 + shS + tp_d);
  vertex(shS + lp_d, 20 + shS + tp_d);
  vertex(shS + lp_d + 10, 30 + shS + tp_d);
  vertex(shS + lp_d, 40 + shS + tp_d);
  endShape();

  // ------------------------ crane-glyph ------------------------
  fill(random(hue - hueRange, hue + hueRange), sat, bri);
  stroke(0);
  strokeWeight(sW);

  beginShape();
  vertex(8 * cS + lp_a, 2 * cS + tp_a);
  vertex(15.5 * cS + lp_a, 14 * cS + tp_a);
  vertex(17 * cS + lp_a, 13.5 * cS + tp_a);
  vertex(19 * cS + lp_a, 9.5 * cS + tp_a);
  vertex(32.5 * cS + lp_a, 3.5 * cS + tp_a);
  vertex(28 * cS + lp_a, 14.5 * cS + tp_a);
  vertex(29 * cS + lp_a, 15 * cS + tp_a);
  vertex(31.5 * cS + lp_a, 19 * cS + tp_a);
  vertex(28 * cS + lp_a, 16 * cS + tp_a);
  vertex(21 * cS + lp_a, 23 * cS + tp_a);
  vertex(19 * cS + lp_a, 21 * cS + tp_a);
  vertex(12 * cS + lp_a, 13.5 * cS + tp_a);
  vertex(13 * cS + lp_a, 13.75 * cS + tp_a);
  endShape(CLOSE);

  beginShape();
  vertex(12 * cS + lp_a, 13.5 * cS + tp_a);
  vertex(15.3 * cS + lp_a, 14.2 * cS + tp_a);
  vertex(22 * cS + lp_a, 20 * cS + tp_a);
  vertex(20.5 * cS + lp_a, 21 * cS + tp_a);
  vertex(4.5 * cS + lp_a, 17 * cS + tp_a);
  vertex(11.9 * cS + lp_a, 13.49 * cS + tp_a);
  line(22 * cS + lp_a, 20 * cS + tp_a, 21 * cS + lp_a, 23 * cS + tp_a);
  endShape();

  noFill();

  beginShape();
  vertex(4.5 * cS + lp_a, 17 * cS + tp_a);
  vertex(18.5 * cS + lp_a, 17 * cS + tp_a);
  vertex(15.3 * cS + lp_a, 14.2 * cS + tp_a);
  vertex(20 * cS + lp_a, 13 * cS + tp_a);
  vertex(22 * cS + lp_a, 20 * cS + tp_a);
  vertex(18.5 * cS + lp_a, 17 * cS + tp_a);
  vertex(20 * cS + lp_a, 13 * cS + tp_a);
  vertex(23 * cS + lp_a, 17 * cS + tp_a);
  line(32.5 * cS + lp_a, 3.5 * cS + tp_a, 21.5 * cS + lp_a, 15 * cS + tp_a)
  line(20 * cS + lp_a, 13 * cS + tp_a, 17 * cS + lp_a, 13.5 * cS + tp_a)
  endShape();

  beginShape();
  vertex(21.4 * cS + lp_a, 18 * cS + tp_a);
  vertex(27 * cS + lp_a, 14.5 * cS + tp_a);
  vertex(29 * cS + lp_a, 15 * cS + tp_a);
  vertex(27.2 * cS + lp_a, 14.5 * cS + tp_a);
  vertex(28.3 * cS + lp_a, 15.5 * cS + tp_a);
  vertex(31.5 * cS + lp_a, 19 * cS + tp_a);
  endShape();
}