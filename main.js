$(document).ready(function () {
  function loadingWait() {
    return Math.random() * 3000;
  }

  var ui = {
    $prompt: $(".js-prompt"),
    $findOutButton: $(".js-find-out-button"),
    $loadingIndicator: $(".js-loading-indicator"),
    $result: $(".js-result"),
    $tryAgain: $(".js-try-again"),
  };

  ui.$findOutButton.click(function () {
    ui.$prompt.addClass("u-displayNone");
    ui.$loadingIndicator.removeClass("u-displayNone");
    setTimeout(function () {
      ui.$loadingIndicator.addClass("u-displayNone");
      ui.$result.removeClass("u-displayNone");
    }, loadingWait());
  });

  ui.$tryAgain.click(function () {
    location.reload();
  });
});
