document.addEventListener("DOMContentLoaded", function() {
  var messages = document.getElementById('messages');
  var newMsg = document.getElementById('new-msg');
  var userName = document.getElementById('user-name');
  var userEmail = document.getElementById('user-email').innerHTML;

  var socket = io();
  socket.on('add-message', function (data) {
    addMessage(data);
      
  });

  document.getElementById('btn-send-msg').addEventListener('click', function() {
    socket.emit('add-message', {
      name: userEmail,
      msg: newMsg.value
    });
    newMsg.value = '';
  });


function addMessage(data) {

    messages.innerHTML += ['<li class="chat-message"><span class="userEmail">', data.name, '</span>: <span class="msg-content">', data.msg, '</span></li>'].join('');    
  }

});

function makeQuestion(obj) {
return `<h1>${obj.category}</h1>
      <p>${obj.question}</p>
      <hr>
      <small>${obj.answer}</small>
      `;
}


function generateQuestion(){
  $.get('/api/random').then(function(data) {
  $('#question').html("")
  $('#question').prepend(makeQuestion(data.info));
  }, function(err) {console.error(err);})
}
//setInterval(generateQuestion, 9000);
generateQuestion()



