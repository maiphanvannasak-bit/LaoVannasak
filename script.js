<script>
const font = new FontFace("LaoVannasak5a-Bali", 
  "url(https://cdn.jsdelivr.net/gh/maiphanvannasak-bit/LaoVannasak@latest/fonts/LaoVannasak5a-Bali.woff2) format('woff2')");

font.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
  document.body.style.fontFamily = '"LaoVannasak5a-Bali", sans-serif';
});
</script>
