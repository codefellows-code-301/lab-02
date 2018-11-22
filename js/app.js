'use strict'

function HornyImage(obj) {
  this.image_url = obj.image_url;
  this.title = obj.title;
  this.description = obj.description;
  this.keyword = obj.keyword;
  this.horns = obj.horns;

  allHornyImages.push(this);
}

const allHornyImages = [];
function readJson() {
  $.get('data/page-1.json', 'json').then(data => {
    data.forEach(hornyImageObj => {
      new HornyImage(hornyImageObj)
    })
  }).then(() => {
    allHornyImages.forEach(horn => {
      console.log(horn);
    })
  })
}

// $(document).ready(function() {
//   $.get("data/page-1.json")
// });
