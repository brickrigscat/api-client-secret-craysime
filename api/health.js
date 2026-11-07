export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  }
  return res.status(200).json({
    service: 'craysim-beta-access',
    status: 'setup_required',
    codeLifetimeSeconds: 60,
    codeIssuanceEnabled: false,
    redemptionEnabled: false
  });
}
