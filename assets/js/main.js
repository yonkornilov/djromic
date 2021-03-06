var term = require('hypernal')();
term.tail=true
term.appendTo('#terminal');

// setup websocket with callbacks
var ws = new WebSocket('wss://localhost:8080/');
ws.onopen = function() {
  console.log('CONNECT');
  term.write("Connecting to soundcloud...");
  term.write(" \n");
};
ws.onclose = function() {
  console.log('DISCONNECT');
};
ws.onmessage = function(event) {
  term.write(event.data);
  term.write(" \n"); // empty line for hydernal to make a line break
};
