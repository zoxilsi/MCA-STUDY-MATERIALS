// Create the install button
const installBtn = document.createElement('button');
installBtn.id = 'install-btn';
installBtn.textContent = ' Install App';
installBtn.style.display = 'none';

// Style the button
Object.assign(installBtn.style, {
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#28a745',
  color: 'white',
  border: '2px solid black',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.9)',
  transition: 'all 0.2s ease',
  marginLeft: '12px'
});

installBtn.addEventListener('mouseover', () => {
  installBtn.style.backgroundColor = '#218838';
  installBtn.style.boxShadow = '5px 5px 0 rgba(0, 0, 0, 0.9)';
});

installBtn.addEventListener('mouseout', () => {
  installBtn.style.backgroundColor = '#28a745';
  installBtn.style.boxShadow = '3px 3px 0 rgba(0, 0, 0, 0.9)';
});

installBtn.addEventListener('mousedown', () => {
  installBtn.style.boxShadow = '2px 2px 0 rgba(0, 0, 0, 0.9)';
});

installBtn.addEventListener('mouseup', () => {
  installBtn.style.boxShadow = '5px 5px 0 rgba(0, 0, 0, 0.9)';
});

// Append to a target container 
const targetContainer = document.querySelector("Header"); 
if (targetContainer) {
  targetContainer.appendChild(installBtn);
}

// Handle install prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'inline-block';

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log(' App installed');
      } else {
        console.log(' Install dismissed');
      }
      deferredPrompt = null;
      installBtn.style.display = 'none';
    });
  });
});
