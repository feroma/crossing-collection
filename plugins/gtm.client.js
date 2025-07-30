// plugins/gtm.client.js
export default ({ app }) => {
  // Consent Mode
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'security_storage': 'granted',
    'functionality_storage': 'granted'
  });

  // GTM Script
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KX2SNRQN');

  // NoScript iframe nel body
  const noscript = document.createElement('noscript');
  noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KX2SNRQN" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
  document.body.insertBefore(noscript, document.body.firstChild);
}
