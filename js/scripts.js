$("button#bark").click(function() {
  $("ul#dog").append("<li>Meow</li>");
  $("ul#cat").append("<li>Bark</li>");
});

$("button#meow").click(function() {
  $("ul#dog").append("<li>Bark</li>");
  $("ul#cat").append("<li>Meow</li>");
});

$("button#cat-vs-dog").click(function() {
  $("ul#cat-pic").append("<li><img src=https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg></li>");
  $("ul#dog-pic").append("<li><img src=http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg></li>");
  $("ul#cat-pic").click(function() {
    $(this).remove();
  });
});

$("button#dog-vs-cat").click(function() {
  $("ul#cat-pic").append("<li><img src=http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg></li>");
  $("ul#dog-pic").append("<li><img src=https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg></li>");

  $("ul#dog-pic").click(function() {
    $(this).remove();
  });
});

$("ul#cat-pic").click(function() {
  $(this).remove();
});

$("ul#dog-pic").click(function() {
  $(this).remove();
});
