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
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["/", "src/style.css", "/logo.png"])
    })
  );
});
self.addEventListener("fetch", e => {
  e.respndWith(
    catches.match(e.request).then(respons => {
      return respons || fetch(e.request)
    })
  )
})