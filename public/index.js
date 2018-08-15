function runGitStatus (command) {
  $.ajax({
    url: 'http://localhost:3000/status?command=' + command
  }).done(function (data) {
    console.log(data)
    var html = ''
    for (var i = 0; i < data.status.length; i++) {
      html += '<input type="checkbox" name="status" value=' + data.status[i] + '>' + data.status[i] + '<br>'
    }
    document.getElementById('logDiv').innerHTML = html
  })
}
function runGitDefault (command) {
  $.ajax({
    url: 'http://localhost:3000/status?command=' + command
  }).done(function (data) {
    document.getElementById('logDiv').innerText = data
  })
}
function runGitAdd (command) {
  var para = '.'
  var checkedValue = document.getElementsByName('status')
  console.log(checkedValue)
  if (checkedValue) {
    var cmdStr = ''
    for (var i = 0; i < checkedValue.length; i++) {
      if (checkedValue[i].checked) {
        cmdStr += checkedValue[i].value + ' '
      }
    }
    console.log(cmdStr)
    $.ajax({
      url: 'http://localhost:3000/status?command=' + command + cmdStr
    }).done(function (data) {
      document.getElementById('logDiv').innerText = data.content
    })
  } else {
    console.log(para)
    $.ajax({
      url: 'http://localhost:3000/status?command=' + command + para
    }).done(function (data) {
      document.getElementById('logDiv').innerText = data
    })
  }
}
function runGitCommit (command) {
  var para = "'update'"
  const inputValue = document.getElementById('commitInput').value
  if (inputValue) {
    para = "'" + inputValue + "'"
  }
  $.ajax({
    url: 'http://localhost:3000/status?command=' + command + para
  }).done(function (data) {
    document.getElementById('logDiv').innerText = data
  })
}
