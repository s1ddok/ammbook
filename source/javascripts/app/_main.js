$(document).ready(function() {
  function hideCode() {
    var hash = window.location.hash;
    $('pre').hide();
    $('blockquote').hide();
    $('.dark-box').css('width', '20px');
    $('#hideCodeButton').hide();
    $('#showCodeButton').show();
    $('#expand-collapse-code').toggleClass('hide-code-column');
    var contentTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'table', 'ul', 'ol', 'aside', 'dl'];
    for (var i in contentTags) {
      $('.content > ' + contentTags[i]).css('margin-right', '20px');
    }
    if ($(hash).offset()) {
      $(document).scrollTop($(hash).offset().top);
    }
    window.location.hash = hash;
    $(window).trigger('resize');
  };

  function showCode() {
    var hash = window.location.hash;
    $('pre').show();
    $('blockquote').show();
    $('.dark-box').css('width', '50%');
    $('#hideCodeButton').show();
    $('#showCodeButton').hide();
    $('#expand-collapse-code').toggleClass('hide-code-column');
    var contentTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'table', 'ul', 'ol', 'aside', 'dl'];
    for (var i in contentTags) {
      $('.content > ' + contentTags[i]).css('margin-right', '50%');
    }
    if ($(hash).offset()) {
      $(document).scrollTop($(hash).offset().top);
    }
    window.location.hash = hash;
    $(window).trigger('resize');
  };

  $('#hideCodeButton').click(hideCode);
  $('#showCodeButton').click(showCode);

});
