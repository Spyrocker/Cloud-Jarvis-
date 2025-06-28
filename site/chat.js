const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const log = document.getElementById('chat-log');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;
  appendMessage('You', msg);
  setTimeout(() => {
    appendMessage('Jarvis', 'This is a canned response to "' + msg + '"');
  }, 500);
  input.value = '';
});

function appendMessage(author, text) {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = author + ': ' + text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}
