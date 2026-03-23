# 📊 TAGGD Dashboard Excel Template Guide v5.10.5

## 📥 Download Template

**File**: `TAGGD_Dashboard_Template_v5.10.5_20260323.xlsx`  
**Location**: `/home/user/webapp/`  
**Version**: v5.10.5 (Latest)  
**Date**: 2026-03-23

---

## 🎯 Quick Start

1. **Download** the Excel template file
2. **Open** in Microsoft Excel or Google Sheets
3. **Read** the "Instructions" sheet first
4. **Replace** sample data with your real data
5. **Upload** to dashboard at: https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
6. **Login** with password: `GoGetter@2026`

---

## 📋 Required Sheets (All 5 Mandatory)

### 1️⃣ FY 24-25 Summary
**Purpose**: Historical SLA/KPI data for fiscal year 2024-2025

**Columns** (17 total):
```
1.  S.No               - Sequential number (1, 2, 3, ...)
2.  Project            - Project name (e.g., "Project Alpha")
3.  Category           - SLA category (see valid values below)
4.  Measure            - Performance measure description
5.  Regional Head      - Regional head name
6.  Region             - Region name (e.g., "Mumbai", "Bangalore")
7.  Practice Head      - Practice head name
8.  April              - April status (Met/Not Met/Not Reported/NA)
9.  May                - May status
10. June               - June status
11. July               - July status
12. Aug                - August status
13. Sep                - September status
14. Oct                - October status
15. Nov                - November status
16. Dec                - December status
17. Jan                - January status
18. Industry Type      - Industry type with TRAILING SPACE
```

**Valid Status Values**:
- `Met` - SLA/KPI achieved
- `Not Met` - SLA/KPI missed
- `Not Reported` - Data not available (excluded from % calculation)
- `NA` - Not applicable (excluded from % calculation)

**Valid Categories** (Case-sensitive):
- `Contractual SLA` - SLAs with contractual obligations
- `Internal KPI` - Internal performance indicators
- `Penalty SLA` - SLAs with penalty clauses

**Sample Row**:
```
1 | Project Alpha | Contractual SLA | Response Time | John Doe | Mumbai | Practice A | Met | Met | Not Met | Met | Not Reported | Met | Met | Met | Not Met | Met | IT Services
```

---

### 2️⃣ FY 25-26 Summary
**Purpose**: Current SLA/KPI data for fiscal year 2025-2026

**Structure**: IDENTICAL to "FY 24-25 Summary"  
**Columns**: Same 17 columns as FY 24-25  
**Values**: Same valid status values

This sheet is used for:
- Current year tracking
- Year-over-year comparison
- Overview dashboard metrics
- Monthly/Quarterly/Yearly views

---

### 3️⃣ FY24-25 Not Reported
**Purpose**: Detailed tracking of "Not Reported" entries for FY 24-25

**Columns** (27 total):
```
Base Info (7 columns):
1. S.No
2. Project
3. Category
4. Measure
5. Regional Head
6. Region
7. Practice Head

Month Data (20 columns - 2 per month):
8.  Apr MET/NOT_MET              - April status
9.  Apr MET/NOT_MET_NotReported  - April not reported flag (0 or 1)
10. May MET/NOT_MET              - May status
11. May MET/NOT_MET_NotReported  - May not reported flag (0 or 1)
12. Jun MET/NOT_MET              - June status
13. Jun MET/NOT_MET_NotReported  - June not reported flag (0 or 1)
... (repeat for Jul, Aug, Sep, Oct, Nov, Dec, Jan)
```

**Column Pattern**:
- **MET/NOT_MET columns**: Status value (Met, Not Met, Not Reported, NA)
- **NotReported columns**: Numeric flag
  - `0` = Data was reported
  - `1` = Data was NOT reported

**Sample Row**:
```
1 | Project Alpha | Contractual SLA | Response Time | John Doe | Mumbai | Practice A | Met | 0 | Met | 0 | Not Met | 0 | Met | 0 | Not Reported | 1 | Met | 0 | Met | 0 | Met | 0 | Not Met | 0 | Met | 0
```

**CRITICAL**: 
- When status is "Not Reported" or "NA", the NotReported flag should be `1`
- When status is "Met" or "Not Met", the NotReported flag should be `0`

---

### 4️⃣ FY25-26 Not Reported
**Purpose**: Detailed tracking of "Not Reported" entries for FY 25-26

**Structure**: IDENTICAL to "FY24-25 Not Reported"  
**Columns**: Same 27 columns  
**Pattern**: Same month data structure

**Expected Totals** (For verification):
| Filter Config | FY 24-25 | FY 25-26 |
|--------------|----------|----------|
| No filters | 567 | 1,055 |
| Month = Oct | ~47 | 102 |
| Month = Dec | ~43 | 149 |
| Month = Jan | ~45 | 113 |

These totals are the sum of ALL "NotReported" columns (where value = 1).

---

### 5️⃣ FY 25-26 Metrics Details 
**Purpose**: Detailed performance metrics for double-click drill-down modal

**⚠️ IMPORTANT**: Sheet name MUST end with a SPACE character: `"FY 25-26 Metrics Details "`

**Columns** (17 total):
```
Base Info (7 columns):
1. S.No
2. Project
3. Category
4. Performance Measure      - Measure with TRAILING SPACE
5. Regional Head
6. Region
7. Practice Head

Month Status (10 columns):
8.  Apr MET/NOT_MET        - April status
9.  May MET/NOT_MET        - May status
10. Jun MET/NOT_MET        - June status
11. Jul MET/NOT_MET        - July status
12. Aug MET/NOT_MET        - August status
13. Sep MET/NOT_MET        - September status
14. Oct MET/NOT_MET        - October status
15. Nov MET/NOT_MET        - November status
16. Dec MET/NOT_MET        - December status
17. Jan MET/NOT_MET        - January status
```

**Usage**:
- Shown in the double-click drill-down modal
- Displays project-wise breakdown by SLA category
- Calculates Met % per project
- Sorts by Met % descending

**Sample Row**:
```
1 | Project Alpha | Contractual SLA | Response Time < 5 seconds | John Doe | Mumbai | Practice A | Met | Met | Met | Not Met | Met | Met | Not Reported | Met | Met | Met
```

---

## 📐 Data Rules & Constraints

### ✅ Required Fields (Cannot be empty)
- S.No
- Project
- Category
- Measure / Performance Measure
- Regional Head
- Region
- Practice Head
- All month columns

### 🔤 Case-Sensitive Values

**Categories** (Must match exactly):
```
✅ Contractual SLA
✅ Internal KPI
✅ Penalty SLA
❌ contractual sla (wrong case)
❌ Contractual_SLA (wrong format)
```

**Status Values** (Must match exactly):
```
✅ Met
✅ Not Met
✅ Not Reported
✅ NA
❌ met (wrong case)
❌ NotMet (no space)
❌ Not reported (wrong case)
```

**Month Names** (Must use short form):
```
✅ Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, Jan
❌ April, October, January (too long)
```

### 📏 Special Column Names (With Trailing Spaces)

These columns MUST have a trailing space:
1. `Industry Type ` (with space at end)
2. `Performance Measure ` (with space at end)
3. Sheet name: `FY 25-26 Metrics Details ` (with space at end)

**Why?** The dashboard code looks for these exact names with spaces.

---

## 🧮 Calculation Logic

### Met % Formula
```
Met % = (Met / (Met + Not Met)) × 100
```

**CRITICAL**: "Not Reported" and "NA" are EXCLUDED from the denominator.

**Example**:
```
Met: 8
Not Met: 2
Not Reported: 3
Total Measures: 13

Met % = (8 / (8 + 2)) × 100 = 80.0%
```

The 3 "Not Reported" entries are NOT counted in the percentage.

### Not Reported Total Calculation
```javascript
// Sum all NotReported columns where value = 1
for (let row of data) {
  for (let column in row) {
    if (column.includes('NotReported')) {
      total += (row[column] || 0);
    }
  }
}
```

---

## 🎨 Data Entry Tips

### 1. Consistent Naming
Use the SAME project name across all sheets:
```
✅ "Project Alpha" everywhere
❌ "Project Alpha" in one sheet, "Proj Alpha" in another
```

### 2. Regional Head → Region → Practice Mapping
Ensure logical hierarchy:
```
Regional Head: John Doe
  ├── Region: Mumbai
  │   └── Practice Head: Practice A
  └── Region: Pune
      └── Practice Head: Practice B
```

### 3. S.No Sequence
Start from 1 and increment:
```
✅ 1, 2, 3, 4, 5, ...
❌ 1, 1, 2, 3, 5, ... (duplicates/gaps)
```

### 4. Category Distribution
Ensure you have data for all categories:
- Contractual SLA (multiple rows)
- Internal KPI (multiple rows)
- Penalty SLA (subset of Contractual)

### 5. NotReported Flag Consistency
Match the flag with the status:
```
✅ Status: "Not Reported", Flag: 1
✅ Status: "Met", Flag: 0
❌ Status: "Not Reported", Flag: 0 (inconsistent)
```

---

## 🧪 Testing Your Data

### Step 1: Upload to Dashboard
1. Open: https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
2. Login: `GoGetter@2026`
3. Click "Upload Excel" button
4. Select your Excel file

### Step 2: Verify Summary Cards
Check the Overview dashboard:
- Total Measures count is correct
- Overall Compliance Rate makes sense
- Met/Not Met counts match your data

### Step 3: Test Monthly Performance
1. Go to "Monthly Performance" view
2. See 4 KPI tiles (Contractual, Internal, Penalty, Non-Penalty)
3. Double-click any tile
4. Verify Met % calculation excludes Not Reported

### Step 4: Test Not Reported Analysis
1. Go to "Not Reported Analysis" view
2. No filters: Verify FY totals match expected
3. Apply FY filter: FY 25-26 only
4. Apply Month filter: Oct
5. Verify count updates and charts rebuild

### Step 5: Check Console Logs
Press F12 → Console tab, look for:
```
✅ FY24-25 Not Reported data loaded: [X] rows
✅ FY25-26 Not Reported data loaded: [Y] rows
✅ FY 25-26 Metrics Details loaded: [Z] performance measures
🔍 Not Reported Summary - FY24-25: [A], FY25-26: [B]
```

---

## 🐛 Common Issues & Fixes

### Issue 1: Sheet Not Found
**Error**: `"FY24-25 Not Reported" sheet not found`

**Fix**: 
- Check sheet name spelling (case-sensitive)
- No extra spaces at the beginning
- Hyphens, not underscores: `FY24-25` not `FY24_25`

### Issue 2: Wrong Column Names
**Error**: `Missing required columns: [list]`

**Fix**:
- Match column names exactly (case-sensitive)
- Include trailing spaces where required
- Use short month names (Apr, not April)

### Issue 3: Invalid Status Values
**Symptom**: Metrics not calculating correctly

**Fix**:
- Use exact values: `Met`, `Not Met`, `Not Reported`, `NA`
- No typos: `Not met` is wrong (lowercase 'm')
- No extra characters

### Issue 4: Not Reported Totals Wrong
**Symptom**: Not Reported Analysis shows wrong numbers

**Fix**:
- Check NotReported columns have 0 or 1 (not text)
- Ensure flag matches status
- Verify all month columns exist

### Issue 5: Drill-Down Empty
**Symptom**: Double-click shows no data

**Fix**:
- Ensure "FY 25-26 Metrics Details " sheet exists (with trailing space)
- Check data exists for the selected category
- Verify filters are not too restrictive

---

## 📊 Sample Data Structure

### Minimal Working Example (3 Projects, 2 Measures Each)

**FY 25-26 Summary**:
```
S.No | Project   | Category         | Measure      | Regional Head | Region    | Practice | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Jan | Industry Type
-----|-----------|------------------|--------------|---------------|-----------|----------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|---------------
1    | Alpha     | Contractual SLA  | Response     | John Doe      | Mumbai    | Practice A | Met | Met | Met | Not Met | Met | Met | Met | Met | Met | Met | IT Services
2    | Alpha     | Internal KPI     | Quality      | John Doe      | Mumbai    | Practice A | Met | Not Met | Met | Met | Met | Met | Not Met | Met | Met | NA | IT Services
3    | Beta      | Penalty SLA      | Availability | Jane Smith    | Bangalore | Practice B | Met | Met | Not Met | Met | Met | Met | Met | Met | Met | Met | Financial
4    | Beta      | Contractual SLA  | Uptime       | Jane Smith    | Bangalore | Practice B | Met | Met | Met | Met | Met | Not Met | Met | Met | Met | Met | Financial
5    | Gamma     | Internal KPI     | Satisfaction | Robert Lee    | Delhi     | Practice C | Not Met | Met | Met | Met | Met | Met | Met | Met | Met | Met | Healthcare
6    | Gamma     | Contractual SLA  | Performance  | Robert Lee    | Delhi     | Practice C | Met | Met | Met | Met | Met | Met | Met | Not Met | Met | Met | Healthcare
```

This minimal structure will:
- Show all 3 projects in Overview
- Display 4 KPI tiles in Monthly Performance
- Enable drill-down by category
- Populate all filters (Regional Head, Region, Practice)

---

## 🔧 Advanced Features

### Filter Hierarchy
The dashboard cascades filters:
```
Regional Head → Region → Practice Head → Account (Project)
```

Example:
1. Select Regional Head: "John Doe"
2. Region filter shows only: "Mumbai", "Pune" (his regions)
3. Select Region: "Mumbai"
4. Practice filter shows only: "Practice A", "Practice B" (Mumbai practices)
5. Select Practice: "Practice A"
6. Account filter shows only: Projects under Practice A in Mumbai

### Month Filter Behavior
- Applies to all views (Monthly, Quarterly, Yearly)
- In Not Reported Analysis: Filters both FY24-25 and FY25-26 independently
- Charts rebuild with filtered data
- Summary cards update with month-specific totals

### FY Filter (Not Reported Analysis)
- `All FY`: Shows 4 cards (FY24-25, FY25-26, YoY Change, YoY %)
- `FY 24-25`: Shows 1 card (FY24-25 only)
- `FY 25-26`: Shows 1 card (FY25-26 only)
- Charts always show both FYs for comparison

---

## 📚 Additional Resources

### Documentation Files
- `README.md` - Project overview
- `PASSWORD_PROTECTION_v5.10.1.md` - Login system details
- `CHANGES_v5.10.2_MET_PERCENT.md` - Met % label changes
- `FINAL_CHANGES_v5.10.3.md` - Filter implementation
- `NOT_REPORTED_FIX_v5.10.4.md` - Month filter logic fix
- `FY2526_MONTH_FILTER_FIX_v5.10.5.md` - Independent FY filtering

### GitHub Repository
- **URL**: https://github.com/Businessexcellence/SLA-DASHBOARD
- **Branch**: main
- **Latest Commit**: 78bf81a
- **Files**: index.html (complete dashboard), documentation

### Live Dashboard
- **URL**: https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
- **Password**: GoGetter@2026
- **Version**: v5.10.5
- **Status**: ✅ Active

---

## 🆘 Support

### Console Debugging
Press **F12** → **Console** tab to see:
- Data loading messages
- Filter application logs
- Chart creation status
- Error messages with details

### Common Console Messages
```javascript
✅ FY24-25 Not Reported data loaded: 567 rows
✅ FY25-26 Not Reported data loaded: 1055 rows
✅ FY 25-26 Metrics Details loaded: 245 performance measures
📅 Applying FY filter: fy25_26
📆 Applying month filter: Oct
✅ FY25-26 month filter applied - kept only: Oct
🔍 Not Reported Summary - FY24-25: 47, FY25-26: 102
✅ Project chart created
✅ Region chart created
✅ Practice chart created
✅ Trend chart created
```

### Quick Checks
1. **File size**: Should be 15-50 KB for typical data
2. **Sheet count**: Exactly 6 sheets (5 data + 1 instructions)
3. **Row count**: At least 10 rows per sheet for meaningful analysis
4. **Upload time**: <5 seconds for files under 1 MB

---

## ✅ Checklist Before Upload

- [ ] All 5 data sheets present (exact names)
- [ ] Column headers match exactly (case-sensitive)
- [ ] Status values are valid (Met, Not Met, Not Reported, NA)
- [ ] Categories are valid (Contractual SLA, Internal KPI, Penalty SLA)
- [ ] S.No is sequential starting from 1
- [ ] Project names consistent across sheets
- [ ] Regional Head → Region → Practice hierarchy logical
- [ ] NotReported flags match status values (0 or 1)
- [ ] Month columns use short names (Apr, not April)
- [ ] Industry Type  has trailing space
- [ ] Performance Measure  has trailing space
- [ ] FY 25-26 Metrics Details  sheet has trailing space
- [ ] No empty cells in required columns
- [ ] At least 10 sample rows per sheet

---

**Version**: v5.10.5  
**Created**: 2026-03-23  
**Template File**: `TAGGD_Dashboard_Template_v5.10.5_20260323.xlsx`  
**Dashboard URL**: https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai  
**Password**: GoGetter@2026

---

🎉 **Ready to upload!** Your Excel file should now be compatible with the TAGGD Dashboard v5.10.5.
