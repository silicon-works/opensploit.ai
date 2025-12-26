# opensploit.ai

Website and API for OpenSploit - Autonomous Penetration Testing Platform.

## Endpoints

- `/` - Landing page
- `/registry.yaml` - Tool registry (proxied from mcp-tools repo)

## Development

```bash
npm install -g vercel
vercel dev
```

## Deployment

```bash
vercel --prod
```

Or connect to Vercel via GitHub for automatic deployments.

## Registry

The `/registry.yaml` endpoint proxies from:
```
https://raw.githubusercontent.com/silicon-works/mcp-tools/main/registry.yaml
```

Cached at edge for 5 minutes with 1 hour stale-while-revalidate.
