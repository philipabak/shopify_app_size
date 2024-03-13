var eventName = typeof(Turbolinks) !== 'undefined' ? 'turbolinks:load' : 'DOMContentLoaded';

if (!document.documentElement.hasAttribute("data-turbolinks-preview")) {
  document.addEventListener(eventName, function flash() {
    var flashData = JSON.parse(document.getElementById('shopify-app-flash').dataset.flash);

    if (flashData.notice) {
      //ShopifyApp.flashNotice(flashData.notice);
      let toastOptions = {
        message: flashData.notice,
        duration: 5000,
      };
      let toastNotice = Toast.create(app, toastOptions);


    }

    if (flashData.error) {
      //ShopifyApp.flashError(flashData.error);
      let toastOptions = {
        message: flashData.error,
        duration: 5000,
        isError: true,
      };
      let toastNotice = Toast.create(app, toastOptions);
    }

    document.removeEventListener(eventName, flash)
  });
}
