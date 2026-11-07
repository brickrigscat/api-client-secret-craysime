// Safe placeholder: never allow the browser to determine whether a code is valid.
const trustedOrigins = new Set([
  'https://craysim.vercel.app',
  'https://secret-craysim.vercel.app'
]);
export default function handler(req, res) {
  const origin = req.headers.origin;
  if (trustedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  }
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  }
  return res.status(503).json({
    error: 'SETUP_REQUIRED',
    message: 'Code redemption is disabled until secure storage and account binding are configured.'
  });
}
