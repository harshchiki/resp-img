var getCardViewHTML = function(Maharaj) {
  switch (Maharaj) {
    case "Soamiji Maharaj":
      return getHTML(SoamijiMaharajPhotos, "files/images/SoamijiMaharaj/");
      break;
    case "Radhaji Maharaj":
      return getHTML(RadhajiMaharajPhotos, "files/images/RadhajiMaharaj/");
      break;
    case "Huzur Maharaj":
      return getHTML(HuzurMaharajPhotos, "files/images/HuzurMaharaj/");
      break;
    case "Maharaj Saheb":
      return getHTML(MaharajSahebPhotos, "files/images/MaharajSaheb/");
      break;
    case "Buaji Saheba":
      return getHTML(BuajiSahebaPhotos, "files/images/BuajiSaheba/");
      break;
    case "Babuji Maharaj":
      return getHTML(BabujiMaharajPhotos, "files/images/BabujiMaharaj/");
      break;
    case "Guru Gurumukh":
      return getHTML(GuruGurumukhPhotos, "files/images/GuruGurumukh/");
  }
};

var getHTML = function(json, parentFolder) {
  if (!json) {
    return;
  }

  var imageHTML = "";
  json.forEach(item => {
    imageHTML += "<div class='brick'>";
    imageHTML += "<img style='cursor:pointer;' ";
    imageHTML +=
      "src='" + parentFolder + item.original + ".rendition.640.480.png" + "' ";
    imageHTML += "alt='" + item.detail_english + "' ";
    imageHTML += "title='" + item.title_english + "' ";
    imageHTML += "original='" + parentFolder + item.original + "' ";
    imageHTML += "/>";
    imageHTML += "<div class='card-body'>";
    if (item.title_english) {
      imageHTML +=
        "<h5 class='card-title'>" +
        item.title_english +
        " " +
        item.original +
        "</h5>";
    }

    if (item.detail_english) {
      imageHTML += "<p class='card-text'>" + item.detail_english + "</p>";
    }
    // imageHTML +=
    //   "<a download href='" +
    //   parentFolder +
    //   item.original +
    //   "' target='_blank' class='btn btn-primary'>View in new tab</a>";
    imageHTML += "</div>";
    imageHTML += "</div>";
  });
  return imageHTML;
};
