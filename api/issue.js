// Safe placeholder: do not trust a client-provided day count or local save.
// A real implementation must check server-trusted eligibility and store
// a one-time code with a 60-second expiry in a persistent database.
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
    message: 'Beta code issuance is disabled until eligibility and persistence are configured.'
  });
}
