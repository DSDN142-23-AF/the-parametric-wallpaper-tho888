//global controls
let s = 3; // scaling
let sW = .5; // strokeWeight
let xpd = 50; // x-axis left-padding
let ypd = 60; //  y-axis top-padding

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); // DEVELOP_GLYPH  GRID_WALLPAPER  GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN); // FIT_TO_SCREEN NINE_LANDSCAPE NINE_PORTRAIT A4  A3
  pWallpaper.show_guide(false); // true false
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(150);
}

function my_symbol() {

  //origami-crane glyph

  fill(255);
  stroke(0);
  strokeWeight(sW);

  beginShape();
  vertex(8 * s + xpd, 2 * s + ypd);
  vertex(15.5 * s + xpd, 14 * s + ypd);
  vertex(17 * s + xpd, 13.5 * s + ypd);
  vertex(19 * s + xpd, 9.5 * s + ypd);
  vertex(32.5 * s + xpd, 3.5 * s + ypd);
  vertex(28 * s + xpd, 14.5 * s + ypd);
  vertex(29 * s + xpd, 15 * s + ypd);
  vertex(31.5 * s + xpd, 19 * s + ypd);
  vertex(28 * s + xpd, 16 * s + ypd);
  vertex(21 * s + xpd, 23 * s + ypd);
  vertex(19 * s + xpd, 21 * s + ypd);
  vertex(12 * s + xpd, 13.5 * s + ypd);
  vertex(13 * s + xpd, 13.75 * s + ypd);
  endShape(CLOSE);

  beginShape();
  vertex(12 * s + xpd, 13.5 * s + ypd);
  vertex(15.3 * s + xpd, 14.2 * s + ypd);
  vertex(22 * s + xpd, 20 * s + ypd);
  vertex(20.5 * s + xpd, 21 * s + ypd);
  vertex(4.5 * s + xpd, 17 * s + ypd);
  vertex(11.9 * s + xpd, 13.49 * s + ypd);
  line(22 * s + xpd, 20 * s + ypd, 21 * s + xpd, 23 * s + ypd);
  endShape();

  noFill();

  beginShape();
  vertex(4.5 * s + xpd, 17 * s + ypd);
  vertex(18.5 * s + xpd, 17 * s + ypd);
  vertex(15.3 * s + xpd, 14.2 * s + ypd);
  vertex(20 * s + xpd, 13 * s + ypd);
  vertex(22 * s + xpd, 20 * s + ypd);
  vertex(18.5 * s + xpd, 17 * s + ypd);
  vertex(20 * s + xpd, 13 * s + ypd);
  vertex(23 * s + xpd, 17 * s + ypd);
  line(32.5 * s + xpd, 3.5 * s + ypd, 21.5 * s + xpd, 15 * s + ypd)
  line(20 * s + xpd, 13 * s + ypd, 17 * s + xpd, 13.5 * s + ypd)
  endShape();

  beginShape();
  vertex(21.4 * s + xpd, 18 * s + ypd);
  vertex(27 * s + xpd, 14.5 * s + ypd);
  vertex(29 * s + xpd, 15 * s + ypd);
  vertex(27.2 * s + xpd, 14.5 * s + ypd);
  vertex(28.3 * s + xpd, 15.5 * s + ypd);
  vertex(31.5 * s + xpd, 19 * s + ypd);
  endShape();
}