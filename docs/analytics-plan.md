# opt-in analytics - "support with your data"

## goal
add privacy-first analytics using grafana faro as an alternative way to support the site. users can opt in to anonymous analytics instead of (or alongside) ko-fi donations.

## what you get
- **fly.io built-in metrics** (already available at fly-metrics.net) - cpu, memory, requests
- **grafana faro** (frontend RUM) - page views, web vitals, navigation patterns
- **settings page** - toggle for opt-in analytics with clear explanation
- **free tier** - grafana cloud free: 50gb telemetry/month

## pre-implementation setup (manual)

1. go to https://grafana.com/products/cloud/ and sign up (free)
2. navigate to "frontend observability" section
3. create new app called "fukurolyrics"
4. copy the collector url (looks like `https://faro-collector-prod-us-east-0.grafana.net/collect/...`)
5. this becomes `NEXT_PUBLIC_FARO_URL` env var

## files to create

| file | purpose |
|------|---------|
| `app/lib/hooks/useAnalyticsConsent.ts` | localStorage hook for consent state |
| `app/lib/hooks/index.ts` | barrel export |
| `app/components/analytics/FaroProvider.tsx` | conditional faro initialization |
| `app/components/analytics/index.ts` | barrel export |
| `app/settings/page.tsx` | settings page metadata |
| `app/settings/SettingsClient.tsx` | toggle ui + explanation |

## files to modify

| file | change |
|------|--------|
| `app/layout.tsx` | add FaroProvider |
| `app/components/layout/Footer.tsx` | add settings link |
| `tsconfig.json` | add @/lib/hooks path |

## implementation order

### 1. consent hook
create `app/lib/hooks/useAnalyticsConsent.ts`:
- stores `'granted' | 'denied' | 'unset'` in localStorage
- key: `fukuro-analytics-consent`
- exposes `{ consent, setConsent, isLoading }`

### 2. faro provider
create `app/components/analytics/FaroProvider.tsx`:
- reads consent from hook
- only initializes faro if consent === 'granted'
- pauses faro if consent revoked
- uses `NEXT_PUBLIC_FARO_URL` env var

install deps:
```bash
pnpm add @grafana/faro-web-sdk @grafana/faro-web-tracing
```

### 3. settings page
create `app/settings/SettingsClient.tsx`:
- explains "support with data" concept
- lists what data is collected (page views, web vitals, navigation, country)
- toggle switch for opt-in
- link to ko-fi as alternative
- casual lowercase tone

### 4. layout integration
modify `app/layout.tsx`:
- add `<FaroProvider />` inside body, before flex container

### 5. footer link
modify `app/components/layout/Footer.tsx`:
- add "Settings" link next to ko-fi

### 6. environment
local `.env.local`:
```
NEXT_PUBLIC_FARO_URL=your-collector-url
```

fly production:
```bash
fly secrets set NEXT_PUBLIC_FARO_URL="your-collector-url" --app fukurolyrics-bold-shadow-503
```

## what gets tracked (automatically)

grafana faro auto-tracks:
- page loads
- navigation (route changes)
- web vitals (LCP, FID, CLS, TTFB)
- js errors
- http request performance
- country-level geo (from ip)

no personal data, no cookies for ads, no selling data.

## optional: custom events

can add later in `app/lyrics/[slug]/LyricsClient.tsx`:
```typescript
import { faro } from '@grafana/faro-web-sdk'

// when view mode changes:
if (faro.api) {
  faro.api.pushEvent('view_mode_change', { mode })
}
```

## privacy notes

- analytics only loads after explicit opt-in
- no cookies used (localstorage only)
- no tracking pixels
- no third-party data sharing
- matches site's honest, casual tone

## sources

- [grafana faro docs](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/)
- [fly.io metrics](https://fly.io/docs/monitoring/metrics/)
- [grafana cloud free tier](https://grafana.com/pricing/)
