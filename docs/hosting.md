# hosting

fukurolyrics.com runs on fly.io with a postgres database.

## the setup

| resource | specs | runs 24/7? |
|----------|-------|------------|
| app (next.js) | 2 VMs × 1GB RAM, shared CPU | no (auto-stops) |
| postgres | 1 VM × 256MB RAM | yes |

## how billing works

fly.io charges per second that a VM is running.

- app VMs auto-stop after ~5 min of no traffic
- postgres runs 24/7 (needs to be ready for queries)

### free tier includes

- 3 shared-cpu VMs with 256MB RAM
- 3GB persistent storage
- ~100GB outbound bandwidth

### what we pay for

- extra memory (app uses 1GB vs free 256MB)
- postgres uptime

## monthly estimate

| item | cost |
|------|------|
| postgres (256MB, 24/7) | ~$2/month |
| app VMs (1GB, auto-stop) | ~$0.50-2/month |
| **total** | **~$2.50-4/month** |

## traffic impact

- more traffic = VMs stay awake longer = higher cost
- no traffic = VMs stop = $0 for app
- bandwidth = generous free tier

max realistic cost for constant 24/7 traffic: ~$5-6/month

## scaling

reduce app VM memory:
```bash
fly scale memory 512 --app 
```

scale back up:
```bash
fly scale memory 1024 --app 
```

## cold starts

when VMs are stopped, first visitor waits 2-3 sec for boot. tradeoff for auto-stop cost savings.

## useful commands

```bash
# status
fly status --app 
# VM specs
fly scale show --app 

# logs
fly logs --app 

# ssh in
fly ssh console --app

# postgres
fly postgres list
```

## domain

fukurolyrics.com → namecheap DNS → fly.io

ssl auto-managed by fly (lets encrypt).
