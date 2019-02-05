const { parse } = require('url')

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { text } = query
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
    case '':
      msg = `
      doc: ドキュメントで調べましょう
      ggr: Googleで調べましょう
      `
    default:
      msg = `コマンドが見つかりません ${JSON.stringify(query)}`;
  }
  res.end(msg);
}