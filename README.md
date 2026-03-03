# Assignment for Fenrir Security by Apurv Pandey.

A demo B2B security dashboard created as a part of Fenrir's frontend engineering internship. Conists of 3 screens from a real product, in light and dark mode. The pages include a Login Screen, a Scan Dashboard, and an ative scan detail view. The application is responsive and interacive.

## Live Link


## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS v4
- shadcn/ui
- TanStack Table v6
- next-themes
- Lucide React icons


## Screens

### Screen 1 — Login
Split layout with a full-bleed background image. The left side shows the product headline, feature list, and Trustpilot rating. The right side is a signup card with first/last name, email, password (with show/hide toggle), a terms checkbox, a create account button, and Apple/Google/Meta social login buttons. The Create Account button is disabled until the terms checkbox is ticked. Clicking it navigates to the dashboard — no real auth, intentionally mocked per the spec.

### Screen 2 — Dashboard
Full app layout with the sidebar and a main content area. The top section is a `StatusBar` showing org metadata and four severity counters (Critical, High, Medium, Low) with percentage change indicators. Below that is the scan table built with TanStack Table — search filters rows by scan name in real time, and clicking any row navigates to the scan detail page.

### Screen 3 — Active Scan Detail
Same sidebar layout. The top card shows a circular progress indicator, a five-step tracker (Spidering → Mapping → Testing → Validating → Reporting), and a metadata row. Below that, the layout splits into two panels: the left is a live console with Activity Log and Verification Loops tabs showing timestamped terminal output with inline highlights; the right is a finding log with stacked vulnerability cards showing severity, endpoint, and description. Export Report and Stop Scan buttons trigger Sonner toasts.


## Mock Data

All data is hardcoded in `lib/mock-data.ts`. No backend, no API calls. The scan table pulls from a `mockScans` array typed against the `Scan` interface. The scan detail page uses hardcoded log entries and findings defined directly in the component files.

---

## Running Locally

```bash
git clone <repo-url>
cd <project-folder>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — starts on the login screen.

---

## Known Limitations

- The Filter and Column buttons in the toolbar are present but not fully wired, search is functional, but advanced filtering by status/type is not implemented
- All scan detail data is static, navigating to different scan rows loads the same mock detail page
- No actual authentication,the login form navigates directly to the dashboard on submit
- Social login buttons (Apple, Google, Meta) are decorative only

  
