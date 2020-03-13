require('net').createServer(function (socket) {
  let date = new Date();
  console.log(`{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} {date.getHours()}:{date.getMinutes()}\r\n`);
  socket.end(`{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} {date.getHours()}:{date.getMinutes()}\r\n`);
})
.listen(31337);
