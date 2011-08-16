$(function () {

  // add trigger to the button
  $('span.forum_ignore a').click(function () {
    $(this).parent().hide();
    $('span.forum_unignore').show();
    // use ajax to run a menu_path callback
    $.get(Drupal.settings.basePath + 'readpath/ignore_forum/'+Drupal.settings.tid);

    // it will abort button submit
    return false;
  });

  // add trigger to the button
  $('span.forum_unignore a').click(function () {
    $(this).parent().hide();
    $('span.forum_ignore').show();
    // use ajax to run a menu_path callback
    $.get(Drupal.settings.basePath + 'readpath/unignore_forum/'+Drupal.settings.tid);

    // it will abort button submit
    return false;
  });
});
