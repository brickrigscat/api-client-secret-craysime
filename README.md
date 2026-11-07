# CraySim Beta Access API 🦞

Server-side API for the planned **Crayfish Simulator 2 Beta** access system, by **Whyacat**.

**API website:** https://api-client-secret-craysime.vercel.app

## Endpoints
- `GET /api/health` — setup status.
- `POST /pgmodre/app/craysim/from/craysim1/unlock/craysim2/beta` — planned PenguinMod code request route (rewritten to `/api/issue`).
- `POST /api/redeem` — planned code validation/redeem route.

## Planned flow
1. Verify that a player is allowed to request Day 100 beta access using trustworthy server-side data.
2. Create a random, single-use code.
3. Record the code and expiry in persistent storage.
4. Expire it after **60 seconds**, measured by the server.
5. Redeem it at most once and record beta access securely.

## Security status
**Issuance and redemption are intentionally disabled.** The existing endpoints return a setup-required response until verification and persistent storage are ready. Do not enable code issuance based only on a PenguinMod local save or game-provided day number.

**Do not commit tokens, passwords, database credentials, or secret API keys to GitHub.**

## Related websites
- [Main CraySim site](https://craysim.vercel.app)
- [Secret beta portal](https://secret-craysim.vercel.app)

Created by **Whyacat**.
