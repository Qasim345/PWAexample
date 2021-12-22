
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
});
let defferedPrompt;
const addbtn = document.querySelector('.btn');

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    defferedPrompt = event
    addbtn.style.display = 'block';
});

addbtn.addEventListener('click', event => {
    defferedPrompt.prompt();

    defferedPrompt.userChoice.then(choice => {
        if(choice.outcome === 'accepted'){
            console.log('user accepted the prompt')
        }
        defferedPrompt = null;
    })
})