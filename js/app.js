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

HornyImage.prototype.render = function() {
  $('main').append()('<section class = "clone"></section>');
  let $clone = $('section [class = "clone"]');

  let hornyTemplate = $('#photo-template').html();

  $clone.html(hornyTemplate);

  $clone.find('h2').text(this.title);
  $clone.find('p').text(this.description);
  $clone.find('img').attr('src', this.image_url);

  $clone.removeClass('clone');
  $clone.attr('class', this.title);
}

function readJson() {
  $.get('data/page-1.json', 'json').then(data => {
    data.forEach(hornyImageObj => {
      new HornyImage(hornyImageObj)
      console.log('horny images!')
    })
  }).then(() => {
    allHornyImages.forEach(horn => {
      horn.render();
    })
  })
}

$(() => readJson());

// readJson();

// $(document).ready(function() {
//   $.get("data/page-1.json")
// });
