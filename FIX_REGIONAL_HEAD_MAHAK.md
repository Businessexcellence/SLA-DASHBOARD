# Fix: Regional Head Filter Showing 0 (HPE / Mahak)

## Problem
When filtering by **Regional Head = "Mahak"**, the **Account Health Status**
and **SLA Bifurcation Analysis** cards showed **0**, even though Mahak is the
Regional Head (and Practice Head) for the HPE account.

## Root Cause
`generateAccountHealthTiles()` and `generateKPIBifurcationTiles()` tried to
apply the Regional Head filter by reading a `Regional Head` field directly from
the **metrics-details rows** — but those rows do not carry a reliable Regional
Head field. As a result every row was filtered out and the cards collapsed to 0.

## Fix
1. Added helper functions `getProjectToRegionalHeadMap()` and
   `getProjectsForActiveRegionalHead()` which derive the Project → Regional Head
   mapping from the **summary sheets** (the source of truth used by the filter
   dropdown), handling both `'Regional Head '` (FY25-26/26-27) and
   `'Regional Head'` (FY24-25) key variants and trimming project names.
2. Replaced the broken inline Regional Head filtering in both
   `generateAccountHealthTiles()` and `generateKPIBifurcationTiles()` with a
   project-based lookup via that mapping — mirroring the existing Practice Head
   fix that resolves the "Manish" vs "Manish Malhotra" mismatch.
3. Data hygiene: ensured HPE's Regional Head = "Mahak" in the
   `fy24_25_not_reported` and `fy26_27_metrics_details` records (summary sheets
   were already correct).

## Verified Result (Regional Head = "Mahak", FY 26-27)
- Mahak resolves to project **HPE** → 30 metrics measures (was 0).
- SLA Bifurcation now shows data: Contractual (20), Internal KPI (10),
  Penalty (4), Non-Penalty (26) measures — instead of 0.0% everywhere.
- Account Health Status now classifies HPE instead of showing 0.
