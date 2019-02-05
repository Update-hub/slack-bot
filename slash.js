const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('*', (req, res) => {
  const text = req.body.text
  let msg

  switch (text) {
    case 'try':
      msg = `
その問題は解決できそうなので、まずは<https://docs.update.jp/projects/flow#karanaitsumadzuita|トラブルシューティング>を見てトライしてみましょう！
      `
      break
    case 'ggr':
      msg = `:google:Googleで調べれば解決できそうです！いい機会なので調べてみてください！`
      break
    case 'doc':
      msg = `
ドキュメントで解説されています。検索してみましょう
https://docs.update.jp
      `
      break
    case 'help':
      msg = `
doc: ドキュメントで調べましょう
ggr: Googleで調べましょう
      `
      break
    default:
      msg = `コマンドが見つかりません`
  }

  res.json({
    response_type: 'in_channel',
    text: msg
  })
})

module.exports = app
