/* EACHRights SRHR Portal — county budget lines (all figures in KSh million)
   Cleaned from Book1.xlsx. To add or correct a line, edit this file only.
   conf: 'ok' = figure and source agree | 'check' = needs verifying | 'secondary' = news/social post | 'duplicate' = not counted
   role: 'headline' = county health total (used for trend) | 'srhr' = SRHR-specific line | 'component' = sub-programme | 'grant' | 'duplicate'
*/
/* Live data: paste the published-CSV link of the Budget tab here. Leave empty to use the built-in data below.
   The tab uses the same columns as Book1: County | Fiscal year | Budget line | Recurrent (KSh M) | Development (KSh M) | Amount (KSh M) | Notes | Source | Where to find it (page / section / search term) | links
   Optional extra column: Role  (type "headline" on the county's overall health total rows; the page can then show a trend). */
window.BUDGET_SHEET_CSV = '';

window.BUDGET_DATA = {

'homa-bay': {
  latest: { label: 'County Department of Health – total', ids: ['hb3'] },
  srhr_share: { num: 'hb4', den: 'hb3' },
  trend_note: '',
  lines: [
    { id:'hb1', fy:'FY2021/22', label:'Health Services', rec:2685.37, dev:0, total:2685.37, role:'headline', conf:'check',
      note:'Reported as KSh 2,685,367,926. No page number given. Development shown as 0, which may mean "not split" rather than "none".',
      source:'Homa Bay County Government', locator:'County website > Resources', url:'https://homabay.go.ke/download/county-budget-mwananchi-edition-2023-2024' },
    { id:'hb2', fy:'FY2023/24', label:'Public Health & Medical Services', rec:2595, dev:310, total:2905, role:'headline', conf:'check',
      note:'Sheet labelled this FY2024/25, but the source and notes are the FY2023/24 Mwananchi booklet, so it is shown as FY2023/24. Sheet total (56,695) was a typo; 2,595 + 310 = 2,905. The note also says "about KSh 3.1B" (development ~0.6B), which does not match 310.',
      source:'Homa Bay County, FY2023/24 Approved Budget (Mwananchi Edition), p. 5', locator:'Downloads > "County Budget Mwananchi Edition 2023-2024", p. 5 (Departmental Allocations table)', url:'https://homabay.go.ke/download/county-budget-mwananchi-edition-2023-2024' },
    { id:'hb3', fy:'FY2025/26', label:'Department of Health – total', rec:3649.503913, dev:null, total:3649.503913, role:'headline', conf:'secondary',
      note:'Reported as KSh 3,649,503,913 from a Facebook post. Confirm against the approved budget document.',
      source:'Homa Bay County Daily News (Facebook)', locator:'Social media post; no page number', url:null },
    { id:'hb4', fy:'FY2025/26', label:'HIV/AIDS advocacy', rec:20, dev:0, total:20, role:'srhr', conf:'check',
      note:'Page 13 is the printed page number; in a PDF viewer it is about page 17. The link is the FY2023/24 booklet, so the year and document do not match.',
      source:'Homa Bay budget', locator:'Printed p. 13 (about p. 17 in PDF viewer)', url:'https://homabay.go.ke/download/county-budget-mwananchi-edition-2023-2024' }
  ],
  verify: [
    'Find the FY2025/26 approved budget PDF and replace the Facebook figure for the Department of Health.',
    'Check p. 5 of the FY2023/24 booklet: is development KSh 310M or about KSh 600M?',
    'Add FY2022/23 and FY2024/25 health totals so the trend has no gaps.',
    'Confirm the HIV/AIDS advocacy line is in the FY2025/26 document, not the FY2023/24 booklet.'
  ]
},

'migori': {
  latest: { label: 'Health (Medical Services & Public Health)', ids: ['mg2'] },
  srhr_share: null,
  trend_note: 'Only one county health total (FY2026/27) is on record, so there is nothing to compare it with yet.',
  lines: [
    { id:'mg1', fy:'FY2025/26', label:'Maternal & Reproductive Health services (SP8)', rec:31, dev:0, total:31, role:'srhr', conf:'ok',
      note:'Entered in the sheet as KSh 31,000,000; converted to KSh million.',
      source:'Migori County Government budget', locator:'p. 86, sector / sub-programme column, SP8', url:'https://migoriassembly.go.ke/' },
    { id:'mg2', fy:'FY2026/27', label:'Health (Medical Services & Public Health)', rec:null, dev:null, total:2720, role:'headline', conf:'secondary',
      note:'Reported as 8.5% of the county budget, which implies a total county budget of about KSh 32 billion.',
      source:'Migori County Assembly (Facebook)', locator:'Social media post; no page number', url:null },
    { id:'mg3', fy:'FY2026/27', label:'Medical Services', rec:null, dev:null, total:1062.97537, role:'component', conf:'ok',
      note:'Programme-based budget figure. Recurrent/development split not given.',
      source:'Migori PBB FY2026/27 (FY 2026-27 Budget-PBB.docx)', locator:'p. 84', url:null },
    { id:'mg4', fy:'FY2026/27', label:'Planning & Administrative Support Services', rec:null, dev:null, total:669.300966, role:'component', conf:'ok',
      note:'Programme-based budget figure.',
      source:'Migori PBB FY2026/27 (FY 2026-27 Budget-PBB.docx)', locator:'p. 84', url:null },
    { id:'mg5', fy:'FY2026/27', label:'Health Services & Sanitation', rec:null, dev:null, total:1062.97537, role:'duplicate', conf:'duplicate',
      note:'Same figure as Medical Services. Treated as a duplicate and not counted.',
      source:'Migori PBB FY2026/27', locator:'p. 84', url:null }
  ],
  verify: [
    'The KSh 2,720M health figure comes from a Facebook post. Medical Services (1,063) plus Planning & Admin (669) is 1,732, so the PBB and the post cover different scopes. Confirm which one is the full health department.',
    'Check whether "Health Services & Sanitation" is a genuine separate line or a repeat of Medical Services.',
    'Add FY2025/26 and earlier health totals to allow a trend.'
  ]
},

'kilifi': {
  latest: { label: 'Health & Sanitation Services (recurrent only)', ids: ['kf1'] },
  srhr_share: null,
  trend_note: 'The two health figures cover different things (full recurrent vs. operations & maintenance only), so a change between them would be misleading.',
  lines: [
    { id:'kf1', fy:'FY2024/25', label:'Health & Sanitation Services – recurrent', rec:3210, dev:null, total:3210, role:'headline', conf:'check',
      note:'Recurrent only; development spending is not included. The linked document is the FY2025/26 CFSP/PBB, so the year may be off by one.',
      source:'County Government of Kilifi', locator:'County website; no page number', url:'https://kilifiassembly.go.ke/images/KCPBB%20FY%202025-2026-ADOPTED%20AT%20CEC%20LEVEL.pdf' },
    { id:'kf2', fy:'FY2024/25', label:'National conditional grant – Community Health Promoters', rec:null, dev:null, total:90.95, role:'grant', conf:'check',
      note:'National grant. Unclear whether it is already inside the 3,210 figure.',
      source:'County Government of Kilifi', locator:'County website; no page number', url:'https://kilifiassembly.go.ke/images/KCPBB%20FY%202025-2026-ADOPTED%20AT%20CEC%20LEVEL.pdf' },
    { id:'kf3', fy:'FY2024/25', label:'National conditional grant – Primary Healthcare', rec:null, dev:null, total:16.09, role:'grant', conf:'check',
      note:'National grant. Unclear whether it is already inside the 3,210 figure.',
      source:'County Government of Kilifi', locator:'County website; no page number', url:'https://kilifiassembly.go.ke/images/KCPBB%20FY%202025-2026-ADOPTED%20AT%20CEC%20LEVEL.pdf' },
    { id:'kf4', fy:'FY2026/27', label:'Health – operations & maintenance resources', rec:null, dev:null, total:967.51, role:'component', conf:'check',
      note:'The source does not state the fiscal year; it was taken from the CFSP 2026. Covers operations & maintenance only.',
      source:'Kilifi CFSP 2026 (CFSP-2026-Submitted-To-County-Assembly.pdf)', locator:'p. 3', url:null }
  ],
  verify: [
    'Confirm the fiscal year of the 3,210 figure and of the 967.51 figure.',
    'Find development spending for health so the full health allocation can be shown.',
    'Check whether the two national grants sit inside or on top of the 3,210 figure.',
    'No reproductive or maternal health line has been captured for Kilifi yet.'
  ]
},

'kwale': {
  latest: { label: 'Curative + Promotive & Preventive programmes', ids: ['kw2','kw3'] },
  srhr_share: null,
  trend_note: 'The FY2021/22 figure is a whole-department total, while FY2026/27 shows two programmes only, so they are not comparable.',
  lines: [
    { id:'kw1', fy:'FY2021/22', label:'Medical & Public Health Services', rec:null, dev:0, total:3631, role:'headline', conf:'check',
      note:'The sheet shows 3,631 but the note says KSh 3,613,000,000. One of them has swapped digits. Page not given.',
      source:'Kwale CIDP 2023-2027 / Office of the Controller of Budget', locator:'Page not given', url:'https://kwale.go.ke/' },
    { id:'kw2', fy:'FY2026/27', label:'Curative & Reproductive Health Services', rec:1508.759306, dev:678.954337, total:2187.713643, role:'srhr', conf:'check',
      note:'Total corrected: the sheet repeated 578.4 from the next row. Recurrent + development = 2,187.7. This programme combines curative care and reproductive health, so the SRHR portion cannot be separated.',
      source:'Kwale approved budget estimates FY2026/27', locator:'p. 5 (COUNTY-APPROVED-BUDGET-ESTIMATES-FY2026-2027-II.pdf)', url:null },
    { id:'kw3', fy:'FY2026/27', label:'Promotive & Preventive Health Services', rec:268.281828, dev:310.136260, total:578.418088, role:'component', conf:'ok',
      note:'Recurrent + development matches the total.',
      source:'Kwale approved budget estimates FY2026/27', locator:'p. 5 (COUNTY-APPROVED-BUDGET-ESTIMATES-FY2026-2027-II.pdf)', url:null }
  ],
  verify: [
    'Decide between 3,631 and 3,613 for FY2021/22 and find the page.',
    'Check p. 5 of the FY2026/27 estimates to confirm the Curative & Reproductive total of 2,187.7.',
    'Find the full Department of Health total for FY2026/27 so it can be compared with FY2021/22.',
    'Look for a sub-line for family planning / maternal health within Curative & Reproductive.'
  ]
}

};




/* ===== Deep link: opens a PDF straight at the right page (browser PDF viewers understand #page=N) ===== */
function budgetPageOf(text) {
  const t = String(text || '');
  const pdf = t.match(/(?:pdf viewer|pdf page)[^.]*?(\d+)/i);          // "in a PDF viewer ... around page 17" beats the printed page number
  if (pdf) return parseInt(pdf[1], 10);
  const m = t.match(/\bp(?:age|p)?\.?\s*(\d+)/i);
  return m ? parseInt(m[1], 10) : null;
}
function budgetDeepLink(url, locator, page) {
  if (!url || /#/.test(url) || !/\.pdf(\?|$)/i.test(url)) return { href: url, page: null };   // only direct PDF links, and never override a #page you typed yourself
  const pg = page || budgetPageOf(locator);
  if (!pg) return { href: url, page: null };
  const named = (String(locator || '').match(/[\w%.\-]+\.pdf/i) || [])[0];                    // locator names a different PDF than the link? don't guess
  if (named) { let u = url; try { u = decodeURIComponent(url); } catch (e) {} if (!u.toLowerCase().includes(named.toLowerCase().replace(/\.pdf$/, ''))) return { href: url, page: null }; }
  return { href: url + '#page=' + pg, page: pg };
}

/* ===== Turns rows of the Drive sheet into the same shape as the built-in data above ===== */
function buildBudgetFromRows(objs, id) {
  const clean = v => (v == null ? '' : String(v).trim());
  const num = v => { const t = clean(v).replace(/[,\s]/g, ''); if (!t || t === '-') return null; const x = parseFloat(t); return isNaN(x) ? null : x; };
  const slug = v => clean(v).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const yr = fy => parseInt((fy.match(/\d{4}/) || [0])[0], 10);
  const normFy = v => { const m = clean(v).match(/(\d{4})\s*[\/-]\s*(\d{2,4})/); return m ? 'FY' + m[1] + '/' + m[2].slice(-2) : clean(v); };
  const ROLES = ['headline', 'srhr', 'component', 'grant', 'duplicate'];
  const rows = objs.map(o => { const n = {}; Object.keys(o).forEach(k => n[k.trim().toLowerCase()] = o[k]); return n; })
    .filter(o => slug(o['county']) === id);
  const seen = {}, lines = [];

  rows.forEach((o, i) => {
    const label = clean(o['budget line']).replace(/\s+/g, ' ');
    const fy = normFy(o['fiscal year']);
    if (!label || !fy) return;
    let rec = num(o['recurrent (ksh m)']), dev = num(o['development (ksh m)']), total = num(o['amount (ksh m)']);
    const why = []; let converted = false;

    if ([rec, dev, total].some(v => v != null && v >= 1e5)) {          // entered in full KSh, not KSh million
      [rec, dev, total] = [rec, dev, total].map(v => v != null && v >= 1e5 ? v / 1e6 : v); converted = true;
    }
    if (rec != null && dev != null && total != null && rec + dev > 0 && Math.abs(rec + dev - total) > 1) {   // zeros mean "not split", so only compare real splits
      why.push('the Amount column shows ' + total.toLocaleString('en-KE', { maximumFractionDigits: 1 }) + ' but recurrent + development is ' + (rec + dev).toLocaleString('en-KE', { maximumFractionDigits: 1 }) + ', so the sum was used');
      total = rec + dev;
    } else if (total == null && (rec != null || dev != null)) total = (rec || 0) + (dev || 0);
    if (total == null) return;

    const notesRaw = clean(o['notes']);
    const nm = notesRaw.match(/FY\s*(\d{4})\s*[\/-]\s*(\d{2,4})/i);
    if (nm) { const f2 = 'FY' + nm[1] + '/' + nm[2].slice(-2); if (f2 !== fy) why.push('the notes mention ' + f2 + ' but the Fiscal year cell says ' + fy); }
    if (/not stated/i.test(notesRaw)) why.push('the fiscal year is not stated in the source');

    const rawLoc = clean(o['where to find it (page / section / search term)']);
    if (/not opened/i.test(rawLoc)) why.push('the source document was not opened');
    const link = clean(o['links']), url = /^https?:\/\//i.test(link) ? link : '';
    let loc = rawLoc.replace(/\[[^\]]*\]/g, ' ').replace(/\(Detail:[^)]*\)?/gi, ' ').replace(/\(no link[^)]*\)/gi, ' ')
      .replace(/See tab[^.\n]*\.?/gi, ' ').replace(/\s+/g, ' ').trim();
    if (link && !url) loc = (loc + ' ' + link).trim();
    const hasPage = /\bp(?:age|p)?\.?\s*\d+/i.test(loc);
    const pageNo = budgetPageOf(rawLoc.replace(/\[(?!\d+\])[^\]]*\]/g, ' ') + ' ' + loc);
    if (loc.length > 170) loc = loc.slice(0, 169) + '…';

    const source = clean(o['source']);
    const explicit = clean(o['role']).toLowerCase();
    let role;
    const key = fy + '|' + total.toFixed(2);
    if (ROLES.includes(explicit)) role = explicit;
    else if (seen[key]) role = 'duplicate';
    else if (/maternal|reproductive|hiv|family planning|sexual|adolescent/i.test(label)) role = 'srhr';
    else if (/grant/i.test(label)) role = 'grant';
    else role = 'component';
    if (role !== 'duplicate') seen[key] = true;

    let conf;
    if (role === 'duplicate') conf = 'duplicate';
    else if (/facebook|twitter|whatsapp|social media/i.test(source + ' ' + rawLoc)) { conf = 'secondary'; why.push('the figure comes from a social media post; confirm it against the official budget document'); }
    else if (why.length || !hasPage) { conf = 'check'; if (!why.length) why.push('no page number given; add where it appears in the source'); }
    else conf = 'ok';

    const note = [notesRaw.replace(/\s+/g, ' '), converted ? 'Converted from KSh to KSh million.' : '',
      ...(role === 'duplicate' ? ['Same figure as an earlier line; not counted.'] : why.map(w => w.charAt(0).toUpperCase() + w.slice(1) + '.'))]
      .filter(Boolean).join(' ');
    lines.push({ id: 'r' + i, fy, label, rec, dev, total, role, conf, note, source, locator: loc, url, page: pageNo, why });
  });
  if (!lines.length) return null;

  const live = lines.filter(l => l.role !== 'duplicate');
  const head = lines.filter(l => l.role === 'headline');
  const newest = Math.max(...live.map(l => yr(l.fy)));
  let latest = head.filter(l => yr(l.fy) === Math.max(...head.map(h => yr(h.fy))));
  if (!latest.length) latest = [live.filter(l => yr(l.fy) === newest && l.role !== 'grant').sort((a, b) => b.total - a.total)[0]];
  const sr = lines.find(l => l.role === 'srhr'), den = sr && head.find(h => h.fy === sr.fy);
  const verify = lines.filter(l => l.conf === 'check' || l.conf === 'secondary')
    .map(l => l.label + ' (' + l.fy + '): ' + l.why.join('; ') + '.');
  return {
    latest: { label: latest.map(l => l.label).join(' + '), ids: latest.map(l => l.id) },
    srhr_share: sr && den ? { num: sr.id, den: den.id } : null,
    trend_note: head.length ? 'Only one county health total is on record, so there is nothing to compare it with yet.'
      : 'No row has Role = headline yet. Mark the county\u2019s overall health total rows as "headline" in the sheet to show a trend.',
    lines, verify: verify.length ? verify : ['No open checks.']
  };
}

/* ===== Budget Analysis section (renders on county.html) ===== */
(async function () {
  const id = new URLSearchParams(location.search).get('id') || 'homa-bay';
  const main = document.querySelector('.county-main');
  if (!main) return;

  const E = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const U = u => (typeof u === 'string' && /^https?:\/\//i.test(u)) ? u : null;
  const n1 = v => v == null ? '—' : Number(v).toLocaleString('en-KE', { maximumFractionDigits: 1, minimumFractionDigits: 0 });
  const startYear = fy => parseInt((fy.match(/\d{4}/) || [0])[0], 10);
  const fyLabel = y => 'FY' + y + '/' + String(y + 1).slice(-2);
  const county = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const ST = {
    ok:        { t: 'Consistent',       c: '#174F30', pill: '#32A03722', ink: '#174F30' },
    check:     { t: 'Needs check',      c: '#F2781C', pill: '#F2781C22', ink: '#A84A06' },
    secondary: { t: 'Secondary source', c: '#8a8a99', pill: '#8a8a9926', ink: '#4f4f5e' },
    duplicate: { t: 'Duplicate',        c: '#c9c9d1', pill: '#e6e6ea',   ink: '#6b6b78' }
  };

  const css = document.createElement('style');
  css.textContent = `
  .ba-lede{font-size:15px;color:var(--ink-mid);line-height:1.65;max-width:72ch;margin:0 0 14px}
  .ba-lede strong{color:var(--ink)}
  .ba-meter{display:flex;height:8px;border-radius:4px;overflow:hidden;background:var(--rule);margin:0 0 8px;max-width:520px}
  .ba-meter i{display:block;height:100%}
  .ba-legend{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:12px;color:var(--ink-mid);margin:0 0 20px}
  .ba-legend b{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:6px}
  .ba-top{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:14px;margin-bottom:18px}
  .ba-card{background:var(--white);border-radius:8px;box-shadow:var(--shadow);padding:18px 20px}
  .ba-card .k{font-size:12px;color:var(--ink-lt);line-height:1.35;margin-bottom:8px}
  .ba-card .v{font-family:'Source Serif 4',serif;font-size:30px;font-weight:600;color:var(--green-dk);line-height:1.05}
  .ba-card .v small{font-family:'Source Sans 3',sans-serif;font-size:12px;font-weight:400;color:var(--ink-lt);margin-left:4px}
  .ba-card .s{font-size:12.5px;color:var(--ink-mid);line-height:1.5;margin-top:8px}
  .ba-card.muted .v{font-size:20px;color:var(--ink-lt)}
  .ba-card.hero{background:var(--sidebar);color:#fff}
  .ba-card.hero .k{color:rgba(255,255,255,.7)}
  .ba-card.hero .v{font-size:44px;color:var(--lime)}
  .ba-card.hero .v small{color:rgba(255,255,255,.65)}
  .ba-card.hero .s{color:rgba(255,255,255,.75)}
  .ba-chip{display:inline-block;font-size:11px;font-weight:700;padding:2px 9px;border-radius:10px;margin-right:6px}
  .ba-panel{background:var(--white);border-radius:8px;box-shadow:var(--shadow);padding:18px 20px;margin-bottom:18px}
  .ba-panel h3{font-family:'Source Serif 4',serif;font-size:16px;font-weight:600;color:var(--ink);margin:0 0 2px}
  .ba-panel .cap{font-size:12.5px;color:var(--ink-lt);margin:0 0 16px;max-width:80ch}
  .ba-cols{display:flex;align-items:flex-end;gap:clamp(8px,3vw,28px);padding:0 4px;border-bottom:1.5px solid var(--ink-lt);min-height:230px}
  .ba-col{flex:1;max-width:110px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}
  .ba-col .val{font-family:'Source Serif 4',serif;font-size:15px;font-weight:600;color:var(--ink);margin-bottom:6px}
  .ba-stack{display:flex;flex-direction:column;width:100%;border-radius:4px 4px 0 0;overflow:hidden;background:var(--c)}
  .ba-stack i{display:block;width:100%}
  .ba-stack i.dev{background:#fff;opacity:.5}
  .ba-stack.empty{background:none;border:1.5px dashed var(--rule);border-bottom:0}
  .ba-xlab{display:flex;gap:clamp(8px,3vw,28px);padding:6px 4px 0}
  .ba-xlab div{flex:1;max-width:110px;text-align:center;font-size:12px;color:var(--ink-mid);line-height:1.3}
  .ba-xlab small{display:block;color:var(--ink-lt);font-size:11px}
  .ba-rows{display:flex;flex-direction:column;gap:12px}
  .ba-row{display:grid;grid-template-columns:minmax(150px,34%) 1fr 74px;gap:14px;align-items:center}
  .ba-rl{font-size:13px;color:var(--ink);line-height:1.35}
  .ba-rl small{display:block;font-size:11.5px;color:var(--ink-lt)}
  .ba-track{background:var(--paper);border-radius:4px;height:22px}
  .ba-stack.h{flex-direction:row;height:22px;border-radius:4px}
  .ba-stack.h i{height:100%;width:auto}
  .ba-rv{font-family:'Source Serif 4',serif;font-size:15px;font-weight:600;text-align:right;font-variant-numeric:tabular-nums}
  .ba-key{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:12px;color:var(--ink-mid);margin-top:16px;padding-top:12px;border-top:1px solid var(--rule)}
  .ba-key b{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:6px}
  .ba-table{width:100%;border-collapse:collapse;font-size:13px;min-width:780px}
  .ba-table th{background:var(--green);color:#fff;padding:10px 14px;text-align:left;font-weight:600;font-size:12px;letter-spacing:.04em;white-space:nowrap}
  .ba-table th.num,.ba-table td.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
  .ba-table td{padding:11px 14px;border-bottom:1px solid var(--rule);vertical-align:top}
  .ba-table tr.grp td{background:var(--paper);font-family:'Source Serif 4',serif;font-weight:600;font-size:13px;color:var(--green-dk);padding:7px 14px}
  .ba-table tr.row:hover td{background:var(--green-lt)}
  .ba-table tr.dup td{color:var(--ink-lt)}
  .ba-table tr.dup .ba-line{text-decoration:line-through}
  .ba-line{font-weight:600;color:var(--ink);line-height:1.35}
  .ba-note{font-size:12px;color:var(--ink-mid);margin-top:4px;line-height:1.5;max-width:46ch}
  .ba-src{font-size:12px;color:var(--ink-mid);line-height:1.5;max-width:260px}
  .ba-src .loc{color:var(--ink-lt);display:block;margin:2px 0 6px}
  .ba-verify{background:var(--lime-lt);border-left:3px solid var(--lime);border-radius:0 8px 8px 0;padding:14px 18px;margin-top:18px}
  .ba-verify h4{font-size:14px;color:var(--green-dk);margin:0 0 8px}
  .ba-verify ul{list-style:none;margin:0;padding:0}
  .ba-verify li{font-size:13px;color:var(--ink-mid);line-height:1.5;padding:4px 0 4px 24px;position:relative}
  .ba-verify li::before{content:'';position:absolute;left:0;top:8px;width:12px;height:12px;border:1.5px solid var(--green);border-radius:3px;background:#fff}
  @media(max-width:860px){.ba-top{grid-template-columns:1fr}.ba-row{grid-template-columns:1fr 64px;gap:4px 10px}.ba-rl{grid-column:1/-1}}
  @media print{.ba-card.hero,.ba-table th,.ba-stack,.ba-meter i{-webkit-print-color-adjust:exact;print-color-adjust:exact}}`;
  document.head.appendChild(css);

  const oldChart = document.getElementById('budget-chart-wrap');
  if (oldChart) oldChart.style.display = 'none';

  const sec = document.createElement('div');
  sec.className = 'section';
  sec.id = 'budget-analysis';
  sec.style.padding = '0 0 28px';
  const firstSection = main.querySelector('.section');
  if (firstSection && firstSection.nextSibling) main.insertBefore(sec, firstSection.nextSibling); else main.appendChild(sec);
  sec.innerHTML = '<div class="section-hd"><h2>Budget Analysis</h2></div><p style="font-size:14px;color:var(--ink-lt);">Loading budget figures…</p>';

  // --- Data: live Google Sheet (published CSV) first, built-in data above as fallback ---
  async function fromSheet() {
    const url = window.BUDGET_SHEET_CSV;
    if (!url || typeof Papa === 'undefined') return null;
    try {
      const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 5000);
      const r = await fetch(url, { signal: ctl.signal }); clearTimeout(t);
      if (!r.ok) return null;
      const parsed = Papa.parse(await r.text(), { header: true, skipEmptyLines: true });
      return buildBudgetFromRows(parsed.data, id);
    } catch (e) { return null; }
  }
  const D = (await fromSheet()) || (window.BUDGET_DATA || {})[id];

  if (!D) {
    sec.innerHTML = '<div class="section-hd"><h2>Budget Analysis</h2></div><p style="font-size:14px;color:var(--ink-lt);">No budget lines have been captured for this county yet.</p>';
    return;
  }

  const byId = Object.fromEntries(D.lines.map(l => [l.id, l]));
  const counted = D.lines.filter(l => l.role !== 'duplicate');
  const tally = { ok: 0, check: 0, secondary: 0 };
  counted.forEach(l => { tally[l.conf] = (tally[l.conf] || 0) + 1; });
  const n = counted.length;

  // Headline numbers
  const latestLines = (D.latest.ids || []).map(i => byId[i]).filter(Boolean);
  const latestVal = latestLines.reduce((s, l) => s + l.total, 0);
  const latestFy = latestLines[0] ? latestLines[0].fy : '';
  const worst = latestLines.some(l => l.conf === 'secondary') ? 'secondary' : latestLines.some(l => l.conf === 'check') ? 'check' : 'ok';

  const meter = ['ok', 'check', 'secondary'].filter(k => tally[k]).map(k => `<i style="width:${tally[k] / n * 100}%;background:${ST[k].c}"></i>`).join('');
  const legend = ['ok', 'check', 'secondary'].filter(k => tally[k]).map(k => `<span><b style="background:${ST[k].c}"></b>${tally[k]} ${ST[k].t.toLowerCase()}</span>`).join('');

  let k2;
  const srhr = D.lines.filter(l => l.role === 'srhr');
  if (srhr.length) {
    const s = srhr[0]; let share = '';
    if (D.srhr_share && byId[D.srhr_share.num] && byId[D.srhr_share.den]) {
      const a = byId[D.srhr_share.num], b = byId[D.srhr_share.den];
      if (a.fy === b.fy) share = ` That is ${(a.total / b.total * 100).toFixed(2)}% of the county health total for the same year.`;
    }
    k2 = `<div class="ba-card"><div class="k">${E(s.label)} · ${E(s.fy)}</div><div class="v">${n1(s.total)}<small>KSh M</small></div><div class="s">The line closest to SRHR in the budget documents.${E(share)}</div></div>`;
  } else {
    k2 = `<div class="ba-card muted"><div class="k">SRHR-specific line</div><div class="v">Not captured yet</div><div class="s">No reproductive or maternal health line has been recorded for this county.</div></div>`;
  }

  const head = D.lines.filter(l => l.role === 'headline').sort((a, b) => startYear(a.fy) - startYear(b.fy));
  const byYear = {};
  head.forEach(l => { const y = startYear(l.fy); const o = byYear[y] || (byYear[y] = { total: 0, rec: 0, dev: 0, split: true, conf: 'ok' }); o.total += l.total; if (l.rec != null && l.dev != null) { o.rec += l.rec; o.dev += l.dev; } else o.split = false; if (l.conf !== 'ok' && (o.conf === 'ok' || l.conf === 'secondary')) o.conf = l.conf; });
  const years = Object.keys(byYear).map(Number).sort((a, b) => a - b);
  let k3;
  if (years.length >= 2) {
    const a = byYear[years[0]], z = byYear[years[years.length - 1]], span = years[years.length - 1] - years[0];
    const chg = (z.total / a.total - 1) * 100, cagr = (Math.pow(z.total / a.total, 1 / span) - 1) * 100;
    k3 = `<div class="ba-card"><div class="k">Change, ${fyLabel(years[0])} to ${fyLabel(years[years.length - 1])}</div><div class="v">${chg >= 0 ? '+' : ''}${chg.toFixed(1)}%</div><div class="s">About ${cagr.toFixed(1)}% a year over ${span} years, before inflation. Indicative: the figures come from different documents.</div></div>`;
  } else {
    k3 = `<div class="ba-card muted"><div class="k">Change over time</div><div class="v">Not available</div><div class="s">${E(D.trend_note)}</div></div>`;
  }

  // Chart: yearly columns when there is a trend, otherwise a labelled bar per budget line
  const anySplit = counted.some(l => l.rec > 0 && l.dev > 0);
  let chart;
  if (years.length >= 2) {
    const all = []; for (let y = years[0]; y <= years[years.length - 1]; y++) all.push(y);
    const max = Math.max(...years.map(y => byYear[y].total)), H = 190;
    const cols = all.map(y => {
      const o = byYear[y];
      if (!o) return `<div class="ba-col"><div class="val" style="color:var(--ink-lt)">—</div><div class="ba-stack empty" style="height:34px"></div></div>`;
      const h = Math.max(6, o.total / max * H), devPct = o.split && o.rec > 0 && o.dev > 0 ? o.dev / o.total * 100 : 0;
      return `<div class="ba-col"><div class="val">${n1(o.total)}</div><div class="ba-stack" style="height:${h}px;--c:${ST[o.conf].c}">${devPct ? `<i class="dev" style="height:${devPct}%"></i>` : ''}</div></div>`;
    }).join('');
    const xl = all.map(y => `<div>${fyLabel(y)}${byYear[y] ? '' : '<small>no figure</small>'}</div>`).join('');
    const desc = all.map(y => fyLabel(y) + ': ' + (byYear[y] ? n1(byYear[y].total) + ' million shillings' : 'no figure')).join('; ');
    chart = `<h3>County health allocation by year</h3><p class="cap">KSh million. Bars start at zero. A dashed space means we have no figure for that year, not that the budget was zero.</p>
      <div class="ba-cols" role="img" aria-label="${E(desc)}">${cols}</div><div class="ba-xlab">${xl}</div>`;
  } else {
    const rows = [...counted].sort((a, b) => startYear(b.fy) - startYear(a.fy) || b.total - a.total);
    const max = Math.max(...rows.map(l => l.total));
    const bars = rows.map(l => {
      const w = Math.max(1.5, l.total / max * 100), split = l.rec > 0 && l.dev > 0;
      const inner = split ? `<i style="flex:${l.rec}"></i><i class="dev" style="flex:${l.dev}"></i>` : '';
      return `<div class="ba-row"><div class="ba-rl">${E(l.label)}<small>${E(l.fy)}</small></div>
        <div class="ba-track"><div class="ba-stack h" style="width:${w}%;--c:${ST[l.conf].c}">${inner}</div></div><div class="ba-rv">${n1(l.total)}</div></div>`;
    }).join('');
    chart = `<h3>Budget lines on record</h3><p class="cap">KSh million, newest year first. These lines come from different documents and years, so read them for scale, not as a trend.</p><div class="ba-rows">${bars}</div>`;
  }
  const key = ['ok', 'check', 'secondary'].filter(k => tally[k]).map(k => `<span><b style="background:${ST[k].c}"></b>${ST[k].t}</span>`).join('')
    + (anySplit ? '<span><b style="background:#999"></b>Solid = recurrent</span><span><b style="background:#ccc"></b>Lighter = development</span>' : '');

  // Table, grouped by year
  const yearsDesc = [...new Set(D.lines.map(l => l.fy))].sort((a, b) => startYear(b) - startYear(a));
  const tbody = yearsDesc.map(fy => {
    const rows = D.lines.filter(l => l.fy === fy).map(l => {
      const st = ST[l.conf] || ST.check, dl = budgetDeepLink(U(l.url), l.locator, l.page);
      const link = dl.href ? `<a class="doc-link" href="${E(dl.href)}" target="_blank" rel="noopener noreferrer">${dl.page ? 'Open at p. ' + dl.page : 'Open source'} ↗</a>` : '';
      return `<tr class="row ${l.role === 'duplicate' ? 'dup' : ''}">
        <td><div class="ba-line">${E(l.label)}</div><div class="ba-note">${E(l.note)}</div></td>
        <td class="num">${n1(l.rec)}</td><td class="num">${n1(l.dev)}</td><td class="num"><strong>${n1(l.total)}</strong></td>
        <td><span class="pill" style="background:${st.pill};color:${st.ink}">${st.t}</span></td>
        <td><div class="ba-src">${E(l.source)}<span class="loc">${E(l.locator)}</span>${link}</div></td></tr>`;
    }).join('');
    return `<tr class="grp"><td colspan="6">${E(fy)}</td></tr>${rows}`;
  }).join('');

  const verify = D.verify.map(v => `<li>${E(v)}</li>`).join('');

  sec.innerHTML = `
    <div class="section-hd"><h2>Budget Analysis</h2><span class="meta">${n} budget lines · KSh million</span></div>
    <p class="ba-lede">${E(county)}'s most recent health allocation on record is <strong>KSh ${n1(latestVal)} million</strong> (${E(latestFy)}). ${tally.ok} of ${n} budget lines match their source; ${n - tally.ok} still ${n - tally.ok === 1 ? 'needs' : 'need'} confirming before the figures are quoted.</p>
    <div class="ba-meter" role="img" aria-label="${tally.ok} of ${n} lines consistent">${meter}</div>
    <div class="ba-legend">${legend}</div>
    <div class="ba-top">
      <div class="ba-card hero"><div class="k">${E(D.latest.label)} · ${E(latestFy)}</div><div class="v">${n1(latestVal)}<small>KSh million</small></div>
        <div class="s"><span class="ba-chip" style="background:rgba(255,255,255,.16);color:#fff">${ST[worst].t}</span>${worst === 'ok' ? 'Figure and source agree.' : 'Confirm the source before quoting.'}</div></div>
      ${k2}${k3}
    </div>
    <div class="ba-panel">${chart}<div class="ba-key">${key}</div></div>
    <div style="overflow-x:auto;border-radius:8px;box-shadow:var(--shadow);background:var(--white);">
      <table class="ba-table"><thead><tr><th>Budget line</th><th class="num">Recurrent</th><th class="num">Development</th><th class="num">Total</th><th>Status</th><th>Source</th></tr></thead>
      <tbody>${tbody}</tbody></table></div>
    <div class="ba-verify"><h4>To confirm before publishing</h4><ul>${verify}</ul></div>`;
})();
