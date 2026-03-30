/**
 * Regenerates sample_data.json from the new Excel file,
 * updating Practice Head and Regional Head names throughout.
 */
const XLSX = require('/tmp/xlsxtools/node_modules/xlsx');
const fs = require('fs');

const EXCEL_PATH = '/home/user/uploaded_files/SLA_Monthly_Status_Summary_FINAL.xlsx';
const OUTPUT_PATH = '/home/user/webapp/sample_data.json';

const wb = XLSX.readFile(EXCEL_PATH);

// Helper: trim all string values in a row object
function trimRow(row) {
  const out = {};
  for (const key of Object.keys(row)) {
    out[key] = typeof row[key] === 'string' ? row[key].trim() : row[key];
  }
  return out;
}

// Helper: normalize region names (remove trailing spaces)
function normalizeRegion(val) {
  if (!val) return val;
  return val.trim().replace(/\s+/g, ' ');
}

// ── 1. FY 24-25 Summary ─────────────────────────────────────────────────────
const raw2425 = XLSX.utils.sheet_to_json(wb.Sheets['FY 24-25 Summary']);
const fy24_25 = raw2425.map(row => {
  const r = trimRow(row);
  // Normalise region
  if (r['Region']) r['Region'] = normalizeRegion(r['Region']);
  // Keep 'Regional Head' key consistent (no trailing space)
  if (r['Regional Head '] !== undefined) {
    r['Regional Head'] = (r['Regional Head '] || '').trim();
    delete r['Regional Head '];
  }
  return r;
});

// ── 2. FY 25-26 Summary ─────────────────────────────────────────────────────
const raw2526 = XLSX.utils.sheet_to_json(wb.Sheets['FY 25-26 Summary']);
const fy25_26 = raw2526.map(row => {
  const r = trimRow(row);
  if (r['Region']) r['Region'] = normalizeRegion(r['Region']);
  if (r['Regional Head '] !== undefined) {
    r['Regional Head'] = (r['Regional Head '] || '').trim();
    delete r['Regional Head '];
  }
  return r;
});

// ── 3. FY 25-26 Metrics Details ─────────────────────────────────────────────
const rawMetrics = XLSX.utils.sheet_to_json(wb.Sheets['FY 25-26 Metrics Details ']);
const fy25_26_metrics_details = rawMetrics.map(row => {
  const r = trimRow(row);
  if (r['Region']) r['Region'] = normalizeRegion(r['Region']);
  // Fix trailing-space key on Performance Measure
  if (r['Performance Measure '] !== undefined) {
    r['Performance Measure'] = (r['Performance Measure '] || '').trim();
    delete r['Performance Measure '];
  }
  return r;
});

// ── 4. FY24-25 Not Reported ──────────────────────────────────────────────────
const rawNR2425 = XLSX.utils.sheet_to_json(wb.Sheets['FY24-25 Not Reported']);
const fy24_25_not_reported = rawNR2425.map(row => {
  const r = trimRow(row);
  if (r['Region']) r['Region'] = normalizeRegion(r['Region']);
  if (r['Regional Head '] !== undefined) {
    r['Regional Head'] = (r['Regional Head '] || '').trim();
    delete r['Regional Head '];
  }
  return r;
});

// ── 5. FY25-26 Not Reported ──────────────────────────────────────────────────
const rawNR2526 = XLSX.utils.sheet_to_json(wb.Sheets['FY25-26 Not Reported']);
const fy25_26_not_reported = rawNR2526.map(row => {
  const r = trimRow(row);
  if (r['Region']) r['Region'] = normalizeRegion(r['Region']);
  if (r['Regional Head '] !== undefined) {
    r['Regional Head'] = (r['Regional Head '] || '').trim();
    delete r['Regional Head '];
  }
  return r;
});

// ── Build final JSON ─────────────────────────────────────────────────────────
const output = {
  fy24_25,
  fy25_26,
  fy25_26_metrics_details,
  fy24_25_not_reported,
  fy25_26_not_reported
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf8');
console.log('✅ sample_data.json regenerated successfully!');

// ── Summary report ───────────────────────────────────────────────────────────
const phSet = new Set();
const rhSet = new Set();
[...fy24_25, ...fy25_26].forEach(r => {
  if (r['Practice Head']) phSet.add(r['Practice Head']);
  if (r['Regional Head']) rhSet.add(r['Regional Head']);
});
fy24_25_not_reported.forEach(r => {
  if (r['Practice Head']) phSet.add(r['Practice Head']);
  if (r['Regional Head']) rhSet.add(r['Regional Head']);
});
fy25_26_not_reported.forEach(r => {
  if (r['Practice Head']) phSet.add(r['Practice Head']);
  if (r['Regional Head']) rhSet.add(r['Regional Head']);
});
fy25_26_metrics_details.forEach(r => {
  if (r['Practice Head']) phSet.add(r['Practice Head']);
});

console.log('\n📋 Practice Heads in new JSON:', [...phSet].sort());
console.log('\n📋 Regional Heads in new JSON:', [...rhSet].sort());
console.log('\n📊 Dataset row counts:');
console.log('  fy24_25:', fy24_25.length, 'rows');
console.log('  fy25_26:', fy25_26.length, 'rows');
console.log('  fy25_26_metrics_details:', fy25_26_metrics_details.length, 'rows');
console.log('  fy24_25_not_reported:', fy24_25_not_reported.length, 'rows');
console.log('  fy25_26_not_reported:', fy25_26_not_reported.length, 'rows');
