export default function handler(req, res) {
  res.writeHead(302, {
    Location: "http://127.0.0.1/admin/flags"
  });
  res.end();
}
