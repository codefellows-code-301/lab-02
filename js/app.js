'use strict'

const allHornyImages = [];

function HornyImage(obj) {
  this.image_url = obj.image_url;
  this.title = obj.title;
  this.description = obj.description;
  this.keyword = obj.keyword;
  this.horns = obj.horns;

  allHornyImages.push(this);
}


HornyImage.prototype.render = function() {
  //Rendering Objects
  $('main').append('<section class = "clone"></section>');

  let $clone = $('section[class = "clone"]');

  let hornyTemplate = $('#photo-template').html();

  $clone.html(hornyTemplate);

  $clone.find('h2').text(this.title);
  $clone.find('p').text(this.description);
  $clone.find('img').attr('src', this.image_url);

  $clone.removeClass('clone');
  $clone.attr('class', this.title);

  console.log('see horny images!')
  
  //Adding Keyword Filter
  $('select').append('<option class="keyword"></option>');
  let $option = $('option[class="keyword"]');

  $option.find('option').text('value', this.keyword);
  
  $option.removeClass('keyword');
  $option.attr('value', this.keyword);
  $option.text(this.keyword);
  
  console.log($option);


  console.log('see horny images!');

  console.log(this);

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
      console.log('work!');
    })
  })
}



$(() => readJson());


// readJson();

// $(document).ready(function() {
//   $.get("data/page-1.json")
// });
