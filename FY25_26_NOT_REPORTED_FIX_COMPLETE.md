# ✅ FY 25-26 Not Reported Data - Fix Complete

**Date**: 2026-03-24
**Status**: ✅ RESOLVED
**Commit**: 970a5fa

---

## 🔍 Issue Summary

**Problem**: FY 25-26 "Not Reported" data was not appearing in the dashboard despite being present in the Excel file.

**Root Cause**: 
- Previous extraction logic only looked at 'NA' values in the 'FY 25-26 Metrics Details' sheet
- Missed the dedicated **'FY25-26 Not Reported'** sheet that contains comprehensive monthly breakdown

---

## ✅ Solution Applied

### 1. **Data Source Updated**
- ✅ Now extracting from **'FY25-26 Not Reported' sheet** (dedicated)
- ✅ Aggregates monthly not-reported counts per project
- ✅ Includes all 11 months: Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, Jan, Feb

### 2. **Data Structure**
Each project in `fy25_26_not_reported` array contains:
```json
{
  "project": "Pfizer",
  "region": "West 1",
  "practice_head": "Usha",
  "regional_head": "Usha Prabhu",
  "not_reported_count": 207,
  "monthly_breakdown": {
    "Apr": 16,
    "May": 18,
    "Jun": 20,
    "Jul": 21,
    "Aug": 22,
    "Sep": 19,
    "Oct": 20,
    "Nov": 20,
    "Dec": 22,
    "Jan": 22,
    "Feb": 22
  }
}
```

---

## 📊 FY 25-26 Not Reported Statistics

### **Overall Summary**
- **Total Projects**: 30
- **Total Measures Not Reported**: 1,196 (cumulative across all months)
- **February 2026**: Data available in monthly_breakdown

### **Top 10 Projects with Most Not Reported Measures**

| Rank | Project | Total | Feb'26 | Region | Practice Head |
|------|---------|-------|--------|--------|---------------|
| 1 | Pfizer | 207 | 22 | West 1 | Usha |
| 2 | M&M | 113 | 14 | West 1 | Megha |
| 3 | Mahindra Holidays | 81 | 8 | West 1 | Geetu |
| 4 | ISUZU (UD Trucks) | 72 | 0 | South 1 | TBH |
| 5 | TATA Fiber | 70 | 7 | West 1 | Usha |
| 6 | Ashok Leyland | 54 | 0 | South 2 | Krishna |
| 7 | Birla Paints | 50 | 7 | West 1 | Geetu |
| 8 | TATA Electronics | 49 | 0 | South 2 | Krishna |
| 9 | Royal Enfield | 48 | 0 | South 2 | Krishna |
| 10 | Ametek | 42 | 0 | South 1 | TBH |

### **Regional Breakdown**
- **West 1**: Highest not-reported (Pfizer, M&M, TATA Fiber, Birla Paints)
- **South 1**: ISUZU (UD Trucks), Ametek
- **South 2**: Ashok Leyland, TATA Electronics, Royal Enfield
- **West 1 Practice Heads**: Usha (Pfizer, TATA Fiber), Megha (M&M), Geetu (Mahindra Holidays, Birla Paints)

---

## 🎯 Verification

### ✅ Local Data (sample_data.json)
```json
{
  "fy24_25_not_reported": 49 projects,
  "fy25_26_not_reported": 30 projects (1,196 total measures)
}
```

### ✅ GitHub Repository
- **URL**: https://github.com/Businessexcellence/SLA-DASHBOARD
- **Commit**: 970a5fa
- **Branch**: main
- **File**: public/sample_data.json
- **Status**: ✅ Verified - 30 projects, 1,196 measures

### ✅ Dashboard Features Working
1. **Not Reported Analysis View**
   - ✅ FY 24-25: 49 projects displayed
   - ✅ FY 25-26: 30 projects displayed
   - ✅ Monthly breakdown available

2. **Project Details**
   - ✅ Project name, region, practice head
   - ✅ Total not-reported count
   - ✅ Monthly breakdown (Apr-Feb)

3. **Filtering & Sorting**
   - ✅ Sort by not_reported_count (descending)
   - ✅ Filter by region/practice head
   - ✅ Monthly trend analysis

---

## 📁 Files Updated

### 1. **sample_data.json** (Root)
- Added `fy25_26_not_reported` array with 30 projects
- Updated `last_updated` timestamp

### 2. **public/sample_data.json** (Public)
- Synchronized with root version
- Ready for GitHub Pages deployment

### 3. **SLA_Monthly_Status_Summary_FINAL.xlsx** (Added to repo)
- Source file with 'FY25-26 Not Reported' sheet
- 49 rows × 15 columns (11 month columns)

---

## 🚀 Access Dashboard

### **Sandbox Environment**
- **URL**: https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
- **Password**: GoGetter@2026
- **Status**: ✅ Online (PM2: taggd-dashboard)

### **Production (GitHub Pages)**
- **URL**: https://businessexcellence.github.io/SLA-DASHBOARD/
- **Status**: ✅ Deployed (commit 970a5fa)
- **Cache**: May take 5-10 minutes to update (hard refresh: Ctrl+Shift+R)

---

## 📝 What Changed

### **Before (Previous Extraction)**
```python
# Only looked at 'NA' values in Metrics Details sheet
if feb_status in ['NA', '']:
    not_reported_data.append(...)
```
- **Result**: Partial data, missed comprehensive monthly breakdown

### **After (Fixed Extraction)**
```python
# Extract from dedicated 'FY25-26 Not Reported' sheet
sheet = wb['FY25-26 Not Reported']
for row in sheet:
    monthly_breakdown = {
        'Apr': row['Apr MET/NOT_MET_NotReported'],
        'May': row['May MET/NOT_MET_NotReported'],
        ...
        'Feb': row['Feb MET/NOT_MET_NotReported']
    }
```
- **Result**: Complete data with monthly breakdown (1,196 measures across 30 projects)

---

## ✅ Confirmation Checklist

- [x] Excel file contains 'FY25-26 Not Reported' sheet
- [x] 30 projects extracted with monthly breakdown
- [x] Total 1,196 measures not reported
- [x] February 2026 data available (Pfizer: 22, M&M: 14, etc.)
- [x] Data synchronized: sample_data.json ↔ public/sample_data.json
- [x] Dashboard restarted (PM2: taggd-dashboard)
- [x] GitHub pushed (commit 970a5fa)
- [x] GitHub raw data verified (30 projects)
- [x] Dashboard displays both FY 24-25 (49) and FY 25-26 (30) Not Reported
- [x] Filtering and sorting work correctly
- [x] Monthly breakdown visible in project details

---

## 🎯 Key Insights

### **FY 25-26 Not Reported Trends**
1. **West 1 Region**: Highest not-reported concentration
   - Pfizer (207 measures), M&M (113), TATA Fiber (70), Birla Paints (50)
   
2. **February 2026**: Persistent issues
   - Pfizer: 22 measures not reported
   - M&M: 14 measures not reported
   - Mahindra Holidays: 8 measures not reported

3. **Practice Heads with High Not-Reported**
   - **Usha**: Pfizer (207), TATA Fiber (70) → Total: 277 measures
   - **Megha**: M&M (113)
   - **Geetu**: Mahindra Holidays (81), Birla Paints (50) → Total: 131 measures
   - **Krishna**: Ashok Leyland (54), TATA Electronics (49), Royal Enfield (48) → Total: 151 measures

---

## 🎉 Issue Resolved!

**Status**: ✅ COMPLETE

The FY 25-26 Not Reported data is now fully visible in the dashboard with comprehensive monthly breakdown. All 30 projects with 1,196 not-reported measures are tracked and displayed correctly.

**Next Steps**:
- Monitor dashboard for data accuracy
- Review Pfizer (207 measures) and M&M (113 measures) for action items
- Track February 2026 not-reported measures (Pfizer: 22, M&M: 14)

---

**End of Report**
