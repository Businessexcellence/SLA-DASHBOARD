# 📊 TAGGD Dashboard Excel Template - Quick Reference

## 🎯 Download Links

### Excel Template (Latest Version)
**Direct Download**: 
```
https://github.com/Businessexcellence/SLA-DASHBOARD/raw/main/TAGGD_Dashboard_Template_v5.10.5_20260323.xlsx
```

**View on GitHub**:
```
https://github.com/Businessexcellence/SLA-DASHBOARD/blob/main/TAGGD_Dashboard_Template_v5.10.5_20260323.xlsx
```

### Documentation
**Complete Guide**:
```
https://github.com/Businessexcellence/SLA-DASHBOARD/blob/main/EXCEL_TEMPLATE_GUIDE.md
```

**Delivery Summary**:
```
https://github.com/Businessexcellence/SLA-DASHBOARD/blob/main/EXCEL_TEMPLATE_DELIVERY.md
```

---

## 📋 Required Sheets (All 5 Mandatory)

| Sheet Name | Columns | Purpose |
|------------|---------|---------|
| **FY 24-25 Summary** | 18 | Historical SLA/KPI data |
| **FY 25-26 Summary** | 18 | Current SLA/KPI data |
| **FY24-25 Not Reported** | 27 | Detailed Not Reported tracking (FY24-25) |
| **FY25-26 Not Reported** | 27 | Detailed Not Reported tracking (FY25-26) |
| **FY 25-26 Metrics Details ** | 17 | Metrics for drill-down modal |

⚠️ **CRITICAL**: "FY 25-26 Metrics Details " has a TRAILING SPACE at the end!

---

## ✅ Valid Values

### Status Values (Case-sensitive)
```
✅ Met             - SLA achieved
✅ Not Met         - SLA missed
✅ Not Reported    - Data unavailable
✅ NA              - Not applicable
```

### Categories (Case-sensitive)
```
✅ Contractual SLA
✅ Internal KPI
✅ Penalty SLA
```

### Months (Short form only)
```
✅ Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, Jan
❌ April, October, January (DO NOT USE)
```

---

## 🧮 Key Formula

### Met % Calculation
```
Met % = (Met / (Met + Not Met)) × 100
```

**CRITICAL**: "Not Reported" and "NA" are EXCLUDED from denominator.

**Example**:
```
Met: 8, Not Met: 2, Not Reported: 3
Met % = (8 / 10) × 100 = 80.0%
(The 3 "Not Reported" entries are excluded)
```

---

## 📊 Column Structure Quick Reference

### Summary Sheets (FY 24-25 & FY 25-26)
```
1. S.No
2. Project
3. Category
4. Measure
5. Regional Head
6. Region
7. Practice Head
8-17. Month columns (April - Jan)
18. Industry Type  ← TRAILING SPACE
```

### Not Reported Sheets (FY24-25 & FY25-26)
```
1. S.No
2. Project
3. Category
4. Measure
5. Regional Head
6. Region
7. Practice Head
8-27. Month pairs (20 columns):
      Apr MET/NOT_MET, Apr MET/NOT_MET_NotReported
      May MET/NOT_MET, May MET/NOT_MET_NotReported
      ... (repeat for all 10 months)
```

### Metrics Details Sheet
```
1. S.No
2. Project
3. Category
4. Performance Measure  ← TRAILING SPACE
5. Regional Head
6. Region
7. Practice Head
8-17. Month status columns (Apr - Jan MET/NOT_MET)
```

---

## 🔢 Expected Totals (For Verification)

**Not Reported Analysis** - No Filters:
```
FY 24-25: 567
FY 25-26: 1,055
```

**Not Reported Analysis** - Month Filters:
```
Oct: FY24-25 ~47, FY25-26 102
Dec: FY24-25 ~43, FY25-26 149
Jan: FY24-25 ~45, FY25-26 113
```

---

## 🚀 Quick Start (5 Steps)

### 1. Download
```bash
# Click the download link above or use curl:
curl -L -o template.xlsx "https://github.com/Businessexcellence/SLA-DASHBOARD/raw/main/TAGGD_Dashboard_Template_v5.10.5_20260323.xlsx"
```

### 2. Open & Review
- Open in Excel or Google Sheets
- Read **Instructions** sheet first
- Review sample data

### 3. Replace Data
- Keep headers EXACTLY as shown
- Delete rows 2-6 (sample data)
- Add your real data starting row 2
- Use valid values only

### 4. Verify
- [ ] All 5 sheets present
- [ ] Headers match exactly
- [ ] Status values valid
- [ ] Month names short form
- [ ] No empty required fields

### 5. Upload
1. Go to: https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
2. Login: `GoGetter@2026`
3. Click "Upload Excel"
4. Select your file
5. Verify data loads

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Sheet not found | Check exact names (case-sensitive) |
| Wrong totals | Check NotReported columns are 0 or 1 |
| Drill-down empty | Verify "FY 25-26 Metrics Details " (trailing space) |
| Met % wrong | Use exact status values (case-sensitive) |
| Month filter fails | Use short names (Apr, not April) |

---

## 📞 Support

### Console Debugging
Press **F12** → **Console** to see:
```javascript
✅ FY24-25 Not Reported data loaded: [X] rows
✅ FY25-26 Not Reported data loaded: [Y] rows
✅ FY 25-26 Metrics Details loaded: [Z] measures
```

### Dashboard Access
- **URL**: https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
- **Password**: `GoGetter@2026`
- **Version**: v5.10.5

### GitHub Repository
- **Repo**: https://github.com/Businessexcellence/SLA-DASHBOARD
- **Branch**: main
- **Commit**: 3e1884b

---

## 📚 Full Documentation

For complete details, see:
- **EXCEL_TEMPLATE_GUIDE.md** - Comprehensive guide (15+ pages)
- **EXCEL_TEMPLATE_DELIVERY.md** - Delivery summary
- **Instructions sheet** in Excel file - Quick reference

---

## 🎓 Sample Data

Template includes 5 sample rows per sheet:
- **3 Projects**: Alpha, Beta, Gamma
- **3 Regional Heads**: John Doe, Jane Smith, Robert Lee
- **3 Regions**: Mumbai, Bangalore, Delhi
- **3 Practices**: A, B, C
- **3 Categories**: Contractual SLA, Internal KPI, Penalty SLA

---

## ⚙️ Regenerate Template

```bash
# Download generator script
curl -O https://raw.githubusercontent.com/Businessexcellence/SLA-DASHBOARD/main/generate_excel_template.py

# Run generator
python3 generate_excel_template.py

# New file created with today's date
```

---

**Version**: v5.10.5  
**Date**: 2026-03-23  
**Commit**: 3e1884b  
**Status**: ✅ Ready to use

---

🎉 **Everything you need to get started with the TAGGD Dashboard Excel template!**

For detailed instructions, open the **Instructions** sheet in the Excel file or read **EXCEL_TEMPLATE_GUIDE.md** on GitHub.
