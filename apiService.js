/*
// Choose ONE of the following based on your requirement:
const MASTER_KEY = '$2a$10$26E4jkDRgWxcCf19vDCsgO8vUAiRf74gEYQGG4nbu93ceFuJozpbG'; // Use this only on the server-side and keep it secret
const ACCESS_KEY = 'your_access_key_here'; // Use this for operations that don't require full control

fetch('https://api.jsonbin.io/v3/b/6546222612a5d3765994bc39/latest', {
  method: 'GET', // or 'PUT'
  headers: {
    // Use one of these headers based on your situation:
    'X-Master-Key': MASTER_KEY,
    // 'X-Access-Key': ACCESS_KEY,
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok: ' + response.statusText);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('There has been a problem with your fetch operation:', error));
*/