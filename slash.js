const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('*', (req, res) => {
  const text = req.body && req.body.text
  let msg;

  switch (text) {
    case 'ggr':
      msg = `Googleで調べれば解決できそうです！ :google: いい機会なので調べてみてください！`;
      break;
    case 'doc':
      msg = `
        ドキュメントで解説されています。検索してみましょう
        https://docs.update.jp
      `;
      break;
    case 'help':
      msg = `
      doc: ドキュメントで調べましょう
      ggr: Googleで調べましょう
      `
    default:
      msg = `コマンドが見つかりません`;
  }

  res.end(msg)
})

module.exports = app