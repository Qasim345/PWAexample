if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registeration => {
    console.log("SW Registered!");
    console.log(registeration);
  }).catch(error => {
    console.log("SW Registered filed");
    console.log(error);
  })
}
// install
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
    if (choice.outcome === 'accepted') {
      console.log('user accepted the prompt')
    }
    defferedPrompt = null;
  })
})