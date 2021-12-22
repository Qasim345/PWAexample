if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registeration => {
    console.log("SW Registered!");
    console.log(registeration);
  }).catch(error => {
    console.log("SW Registered filed");
    console.log(error);
  })
}
window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();
  // Stash the event so it can be triggered later.
  this.deferredPrompt = e;
  return false;
});
// When you want to trigger prompt:
this.deferredPrompt.prompt();
this.deferredPrompt.userChoice.then(choice => {
  console.log(choice);
});
this.deferredPrompt = null;