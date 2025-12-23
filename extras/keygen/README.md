# License Key Generator (Keygen)

This folder contains:
- A small **Node.js HTTP server** that serves the keygen UI
- A **Node.js CLI** for generating keys in the terminal
- A **standalone HTML generator page**

## Location

- Keygen app: `extras/keygen/`
- Web server entry: `extras/keygen/index.js`
- CLI entry: `extras/keygen/cli.js`

## Simple HTML generator (no Node.js)

Open this file in a browser (double-click):

- `extras/keygen/index.html`

It generates the same key format and supports:
- Trial
- VL
- Lifetime

## Requirements

- Node.js 18+

## Option A — Run the Web UI (recommended)

From `extras/keygen/`:

```bash
node index.js
```

Then open:

```text
http://localhost:8787
```

Change the port with `PORT`:

```bash
set PORT=9000
node index.js
```

## Option B — Generate a license key (CLI)

From the repo root (`templatev1/`):

```bash
node extras/keygen/cli.js --product APP01 --type vl --days 365 --customer "John Doe"
```

Supported `--type` values:
- `trial`
- `vl`
- `lifetime`

### Batch mode (prints several types)

```bash
node extras/keygen/cli.js --product APP01 --batch
```

## Optional: run from the React project

If you want a shortcut script, run it from the React folder:

```bash
cd react
npm run keygen -- --product APP01 --type vl --days 365 --customer "John Doe"
```

## Notes

- `--days` controls the expiry date embedded into the key.
- Keys are deterministic by format + checksum (this is the *simple* key format). If you later move to server-issued keys, keep this tool for local testing.
