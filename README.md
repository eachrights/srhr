# EACHRights SRHR Advocacy Portal

Public dashboard tracking SRHR policy and legal advocacy progress across Homa Bay, Migori, Kilifi and Kwale,
for the Amplify Change funded project "Taking on the Legal and Policy Advocacy Challenge" (2024 to 2027).

**Live site:** [https://eachrights.github.io/srhr/]

**Staff page:** [https://eachrights.github.io/srhr/admin.html]

The staff page is deliberately not linked from anywhere on the public site. Share the address with staff
directly, and keep it at the top of the Google Sheet so nobody has to remember it. It is **unlisted, not
protected**: anyone who has the address can open it. It holds no passwords and cannot change any data, so
that is acceptable. Do not put anything confidential on it on the assumption that it is private.

## Staff: how to update the portal

**Do not edit any file in this repository to update content.** Day to day updating happens in Google Sheets
and Google Forms, not in code.

Every form now starts from the staff page. The public pages are read only and carry no way to submit anything.

| To do this | Use | Access needed |
|---|---|---|
| Report an activity, meeting or news item | Field Update Form, from the staff page | Google sign-in |
| Record quarterly milestones and implementation | Quarterly Advocacy Tracking Form, from the staff page | Google sign-in |
| Submit a finished flyer, brief or social card | Materials Upload Form, from the staff page | Google sign-in |
| **Approve a submitted update so the public can see it** | Google Sheet, **Updates** tab, tick `Show on site` | Sheet edit permission |
| Change a policy status, progress, gap or document link | Google Sheet, **Policies** tab | Sheet edit permission |
| Score advocacy milestones | Google Sheet, **Advocacy Scorecard** tab | Sheet edit permission |
| Add a new policy, county or county statistic | Ask the developer | Code change required |

Full written instructions live on the site itself at **Admin -> How-To Guide**, and in the
*System Description* and *User Training Module* documents, linked from **Admin -> Training Guides**.

## Submitted updates are held for review

A field update does not appear on the dashboard when it is submitted. It lands in the **Updates** tab with its
`Show on site` box unticked, and stays invisible to the public until a staff member ticks it.

This is what stops an unwanted submission reaching the dashboard, so it matters that it is understood:

- Unticked, blank and unrecognised values all count as **not approved**. The gate fails closed.
- If the `Show on site` column is deleted, every row renders, which is how the sheet behaved before the gate
  existed. Deleting the column therefore disables the review step silently.
- **A tick takes a few minutes to reach the dashboard.** Google caches the published feed, so refreshing
  immediately after ticking often still shows the old version. Nothing is wrong when that happens.

## How it works

Static site, no backend, no database, no authentication. Pages read live data from a published Google Sheet
at load time and merge it over the baseline data compiled into `data/counties.js`.

```
Google Forms --> Google Sheet (Apps Script sorts each submission into the right tab)
                      |
                      +-- Policies tab            --+
                      +-- Updates tab              --+--> published CSV --> site reads on page load
                      +-- Advocacy Scorecard tab  --+
Google Drive --> policy PDFs and advocacy materials, linked by share URL
```

Deployed by GitHub Pages from `main`. Every push republishes automatically.

## Files

```
index.html        Home: county cards, map, national policy table
county.html       Per-county board (?id=homa-bay|migori|kilifi|kwale). Read only.
resources.html    All policy documents, grouped by county
admin.html        Staff monitor, how-to guide, training guides, and the three form links.
                  Unlisted, not linked from the public pages. NOT a login, no edit powers.
data/counties.js  Baseline data, published Sheet URLs, all parsing/merge logic
data/counties.geojson  County boundaries for the maps
css/base.css      Shared styling
docs/             Local copies of policy PDFs (most documents live in Drive instead)
```

The three Google Form URLs and the two training guide links live in `admin.html`, **not** in `data/counties.js`.
That file is loaded by every public page, so anything in it is served to every visitor. If a form is ever
rebuilt, `admin.html` is the one place its link has to change.

## Data the site reads from the Sheet

| Tab | Columns | Notes |
|---|---|---|
| Policies | `county_id`, `policy_id`, `status`, `impl_pct`, `gap`, `doc_url`, `last_updated` | `county_id` and `policy_id` join Sheet rows to `counties.js`. Never change them. `last_updated` is written automatically. A blank cell means "leave the existing value alone", it does not mean zero. |
| Updates | `Timestamp`, `County`, `Date Event`, `Update Title`, `Description`, `Source/ Organization`, `Tags`, `Show on site` | Written by Apps Script from the Field Update Form. Headers are matched case and whitespace insensitively. Only rows with `Show on site` ticked are rendered. |
| Advocacy Scorecard | `county_id`, `milestone_id`, `score` | Score is 0, 1 or 2 against each of the 15 milestones. A higher number is silently read as 2. |

Valid `status` values, typed by hand: `Adopted`, `Enacted`, `In Progress`, `Draft`, `Stalled`,
`Not Operational`, `Under Review`, `Limited Implementation`, `Not Yet Assessed`, `Completed`.

Written automatically by the Quarterly Tracking Form: `Not Started`, `Early Stage`, `Partially Implemented`,
`Substantially Implemented`, `Fully Implemented`.

Anything outside this list still appears on the dashboard exactly as typed, but its status pill loses its
colour. A colourless status on a county page is a reliable sign of a typing error in the Sheet.

All three tabs must stay published via **File -> Share -> Publish to web**. If publishing is revoked the site
still loads but silently falls back to the baseline figures in `counties.js`.

## Things that break silently

None of these produce an error message anywhere. They are listed together because each one looks like the
system is working right up until someone notices the data is wrong.

- **Renaming a tab or a column heading.** The Apps Script routes submissions by tab name matched as literal
  text, and the site finds columns by heading. Reordering columns is safe. Renaming is not.
- **Reordering questions in the Quarterly Tracking Form.** Its answers are read by position.
- **Revoking Publish to web.** The dashboard falls back to baseline figures and keeps working.
- **Deleting the `Show on site` column.** Every submission then publishes itself without review.
- **Changing the Sheet's locale.** The Sheet is currently month-first (`9/18/2026` means 18 September), and
  the site's date parser assumes the same. Switch the Sheet to a day-first locale and every date whose day is
  12 or lower is displayed as the wrong date. Dates after the 12th stay correct, which makes the damage look
  random rather than systematic.
- **Removing the account that created the Apps Script trigger.** Triggers belong to the account that made
  them, not to the file. Form submissions stop reaching the portal.

## Developer notes

- Advocacy materials are deliberately **not** auto-published. The Materials Upload Form stages submissions in
  a `Materials Uploads` tab marked *Pending Review*; publishing an approved item means adding its link to
  `advocacy_materials` in `counties.js`.
- The Apps Script lives in the bound Sheet (Extensions -> Apps Script), not in this repo.
- Status colours: green = adopted/enacted/implemented, amber = in progress/early stage, blue = under review,
  grey = draft/not assessed, red = stalled.
