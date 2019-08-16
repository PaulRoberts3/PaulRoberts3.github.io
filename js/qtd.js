jQuery(document).ready(function($) {
  //Get the quote of the day
  var quote = function () {
    var quotes = [
      '"Where words fail, music speaks." ~ Hans Christian Andersen',
      '"Whoever has skill in music is of good temperament and fitted for all things. We must teach music in schools." ~ Martin Luther',
      '"The future belongs to young people with an education and the imagination to create." ~ Barack Obama',
      '"One of the most beautiful things we can give our children is music education." ~ Gloria Estefan',
      '"The strength of every democracy is measured by its commitment to the arts." ~ Charles Segars',
      '"Music gives a soul to the universe." ~ Plato',
      '"Music produces a kind of pleasure which human nature cannot do without." ~ Confucius',
      '"Logic will get you from A to B. Imagination will take you everywhere." ~ Albert Einstein',
      '"Art and music education help children develop abstract thinking that helps them in the business world." ~ Alan Greenspan',
      '"Music enhances the education of our children by helping them to make connections and broadening the depth with which they think and feel. If we are to hope for a society of culturally literate people, music must be a vital part of our children\'s education." ~ Yo-Yo Ma',
      '"With music, One\'s whole future life is brightened. This is such a treasure in life that it helps us over many troubles and difficulties. Music is nourishment, a comforting elixer. Music multiplies all that is beautiful and of value in life." ~ Zoltan Kodaly',
      '"I didn\'t discover it. I was listening to music and the whole thing dropped in." ~ Albert Einstein on his discovery of the Theory of Relativity',
      '"Ah music! A magic far beyond what we do here." ~ Albus Dumbledore',
      '"Music ... can name the unnameable and communicate the unknowable." ~ Leonard Bernstein',
      '"Life seems to go on without effort when I am filled with music." ~ George Eliot'
    ]

    //Generate psudo random number between 0-15 seeded by current day
    var day = new Date();
    var seed = day.getDate();
    seed = seed * day.getMonth();
    seed = seed * day.getFullYear();
    var rand = Math.sin(seed++) * 10000;
    rand = (rand - Math.floor(rand)) * 10000;
    rand = (Math.floor(rand)) % quotes.length;

    //Select and display the quote
    $('p#qtd').text(quotes[rand]);
  }

  //Add space between cards when small
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 977) {
      $('.addone').addClass('pt-3');
    } else if (ww >= 977) {
      $('.addone').removeClass('pt-3');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire them when the page first loads
  alterClass();
  quote();
});
