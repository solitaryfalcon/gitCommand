export default async (ctx, next) => {
  console.log('=====>')
  console.log(ctx.request.query)
  const command = ctx.request.query.command
  const shell = require('shelljs')
  const arr = []
  const runCommand = shell.exec(command, {cwd: '/Users/bowen/Documents/project/dataPreview/previewComponent'})
  if (runCommand.stderr !== '') {
    ctx.body = runCommand.stderr
  } else {
    var splitArr = runCommand.stdout.split('\n')
    for (var i = 0; i < splitArr.length - 1; i++) {
      arr.push(splitArr[i])
    }
    ctx.body = {content: runCommand, status: arr}
  }
}
