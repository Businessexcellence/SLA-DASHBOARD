# 🧪 TEST Dashboard - Data Refresh Debugging

## 🌐 TEST Dashboard URL

**🔗 TEST Link (Port 3001)**: https://3001-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai

**Password**: `GoGetter@2026`

---

## ✅ What's Different in TEST Version

### Visual Indicators
- ✅ **"TEST MODE" badge** in header (yellow/gold)
- ✅ **Data refresh indicator** appears after upload (green box with timestamp)
- ✅ Shows exact refresh time (HH:MM:SS)

### Enhanced Logging
The TEST version includes extensive console logging:

```javascript
🔄 ======================================== 
🔄 NEW FILE UPLOAD DETECTED
🔄 Timestamp: [Date and Time]
🔄 File name: [Your file name]
🔄 File size: [Size in bytes]
🔄 ========================================

🗑️ CLEARING OLD DATA...
✅ Old data cleared

📖 File read successfully, parsing...
📊 Workbook sheets: [Sheet names]
✅ FY24-25 Not Reported data loaded: [X] rows
✅ FY25-26 Not Reported data loaded: [Y] rows
✅ FY 25-26 Metrics Details loaded: [Z] measures

✅ DATA REFRESH COMPLETE at [HH:MM:SS]
📊 FY 24-25 records: [count]
📊 FY 25-26 records: [count]
📊 FY24-25 Not Reported records: [count]
📊 FY25-26 Not Reported records: [count]
📊 Metrics Details records: [count]
```

### Data Clearing
- ✅ **Explicitly clears all old data** before loading new data
- ✅ Sets `rawData = null`, `parsedData = null`, `filteredData = null`
- ✅ Clears all arrays: `fy2425NotReportedData`, `fy2526NotReportedData`, `metricsDetailsData`
- ✅ Console confirms: "✅ Old data cleared"

### Cache Busting
- ✅ **Aggressive no-cache headers** on server
- ✅ Server adds timestamp to each page load
- ✅ Console logs server timestamp on every load

---

## 🧪 How to Test Data Refresh

### Step 1: Open TEST Dashboard
1. Go to: **https://3001-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai**
2. Login with password: `GoGetter@2026`
3. **Open browser console** (Press F12 → Console tab)
4. Look for: `🕐 Server timestamp: [timestamp]`

### Step 2: Upload First File
1. Click **"Upload Excel"** button
2. Select your Excel file (e.g., `file_v1.xlsx`)
3. **Watch the console** for detailed logs
4. **Check top-right corner** - green box should appear with refresh time
5. **Note the data counts** in console:
   ```
   📊 FY 25-26 records: 150
   📊 FY25-26 Not Reported records: 1055
   ```

### Step 3: Verify Data Loaded
1. Go to **"Overview"** view
2. Check **Total Measures** count
3. Go to **"Not Reported Analysis"** 
4. Verify **FY 25-26 Total** matches expected value
5. Check **"Monthly Performance"** tiles show correct percentages

### Step 4: Upload Updated File
1. Modify your Excel file (change some values)
2. Save as `file_v2.xlsx`
3. Go back to TEST dashboard
4. Click **"Upload Excel"** again
5. Select `file_v2.xlsx`

### Step 5: Watch Console for Refresh
**Expected console output:**
```
🔄 ========================================
🔄 NEW FILE UPLOAD DETECTED
🔄 Timestamp: 2026-03-23 10:30:45
🔄 File name: file_v2.xlsx
🔄 File size: 15234 bytes
🔄 ========================================

🗑️ CLEARING OLD DATA...
✅ Old data cleared

📖 File read successfully, parsing...
📊 Workbook sheets: ["FY 24-25 Summary", "FY 25-26 Summary", ...]
✅ FY25-26 Not Reported data loaded: 1055 rows
...
✅ DATA REFRESH COMPLETE at 10:30:46
📊 FY 25-26 records: 175  ← NEW COUNT
📊 FY25-26 Not Reported records: 1200  ← NEW COUNT
```

### Step 6: Verify Data Updated
1. **Green refresh indicator** should update with new timestamp
2. **Overview** → Total Measures should change if you added/removed rows
3. **Not Reported Analysis** → FY 25-26 Total should update
4. **Monthly Performance** → Percentages should recalculate
5. **Console** → New counts should match your updated file

---

## 🔍 Troubleshooting Data Not Refreshing

### Issue 1: Data Doesn't Update
**Check console for**:
```
🗑️ CLEARING OLD DATA...
✅ Old data cleared
```

If you DON'T see this:
- ❌ File upload might have failed
- ❌ Try refreshing page completely (Ctrl + Shift + R)
- ❌ Try different browser

### Issue 2: Old Values Still Showing
**Verify in console**:
1. Look for **NEW data counts** after upload
2. Compare with **previous counts** from first upload
3. If counts are identical:
   - Check if you actually changed the Excel file
   - Verify you saved the file before uploading
   - Make sure you uploaded the new file, not the old one

### Issue 3: Browser Caching Page
**Solutions**:
1. **Hard refresh**: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
2. **Clear browser cache**: 
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Firefox: Options → Privacy → Clear Data → Cached Web Content
3. **Incognito/Private mode**: Open TEST link in private browsing window
4. **Check server timestamp**: Console should show NEW timestamp after each refresh

### Issue 4: Can't See Green Refresh Indicator
**Check**:
1. Look at **top-right corner** of header
2. Should appear after successful upload
3. Shows: `✓ Data Refreshed: 10:30:46`
4. If not visible:
   - Check browser console for errors
   - Verify upload completed successfully
   - Look for `✅ DATA REFRESH COMPLETE` in console

---

## 🧩 Comparison: LIVE vs TEST

| Feature | LIVE Dashboard (Port 3000) | TEST Dashboard (Port 3001) |
|---------|---------------------------|---------------------------|
| **URL** | https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai | https://3001-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai |
| **Visual Badge** | None | "TEST MODE" (yellow) |
| **Refresh Indicator** | No | Yes (green box with time) |
| **Console Logging** | Standard | Enhanced with 🔄🗑️📊 emojis |
| **Data Clearing** | Yes (implicit) | Yes (explicit with confirmation) |
| **Cache Busting** | Standard headers | Aggressive + server timestamp |
| **Data Counts** | Not logged | Logged after each upload |
| **Upload Timestamp** | Not shown | Shown in console + indicator |

---

## 📋 Step-by-Step Testing Checklist

### Before Starting
- [ ] Have 2 versions of Excel file ready (v1 and v2 with different data)
- [ ] Browser console open (F12 → Console)
- [ ] Clear browser cache or use incognito mode

### First Upload (Baseline)
- [ ] Open TEST dashboard: https://3001-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
- [ ] Login with `GoGetter@2026`
- [ ] Console shows server timestamp
- [ ] Click "Upload Excel"
- [ ] Upload file_v1.xlsx
- [ ] Console shows: "🔄 NEW FILE UPLOAD DETECTED"
- [ ] Console shows: "🗑️ CLEARING OLD DATA..."
- [ ] Console shows: "✅ Old data cleared"
- [ ] Console shows: "✅ DATA REFRESH COMPLETE"
- [ ] Green indicator appears with timestamp
- [ ] Note data counts in console (e.g., FY 25-26: 150 records)

### Second Upload (Data Refresh Test)
- [ ] Modify Excel file (change some values)
- [ ] Save as file_v2.xlsx
- [ ] Click "Upload Excel" again (no page refresh)
- [ ] Upload file_v2.xlsx
- [ ] Console shows: "🔄 NEW FILE UPLOAD DETECTED" with NEW timestamp
- [ ] Console shows: "🗑️ CLEARING OLD DATA..."
- [ ] Console shows: "✅ Old data cleared"
- [ ] Console shows: "✅ DATA REFRESH COMPLETE" with NEW time
- [ ] Green indicator updates with NEW timestamp
- [ ] Data counts in console are DIFFERENT (e.g., FY 25-26: 175 records)

### Verification
- [ ] Overview → Total Measures changed
- [ ] Not Reported Analysis → FY 25-26 Total updated
- [ ] Monthly Performance → Percentages recalculated
- [ ] Charts reflect new data
- [ ] Filters work with new data
- [ ] Drill-down shows new data

---

## 💡 What to Look For

### ✅ Success Signs
1. **Console logs show clear sequence**:
   - Upload detected → Old data cleared → New data loaded → Refresh complete
2. **Timestamps update**: Both in console and green indicator
3. **Data counts change**: If you modified the file, counts should be different
4. **Dashboard updates**: All views reflect new data
5. **No errors**: Console shows no red error messages

### ❌ Failure Signs
1. **Missing console logs**: No "🔄 NEW FILE UPLOAD DETECTED"
2. **Same timestamps**: Green indicator doesn't update
3. **Same data counts**: Console shows identical numbers
4. **Stale values**: Dashboard shows old values
5. **Errors**: Red error messages in console

---

## 🔧 Advanced Debugging

### Check Raw Data Variables
In browser console, run:
```javascript
// Check if data exists
console.log('rawData:', rawData);
console.log('FY 24-25 records:', rawData?.fy24_25?.length);
console.log('FY 25-26 records:', rawData?.fy25_26?.length);
console.log('Not Reported FY25-26:', fy2526NotReportedData?.length);
console.log('Metrics Details:', metricsDetailsData?.length);
```

### Force Data Clear
In browser console, run:
```javascript
// Manually clear data
rawData = null;
parsedData = null;
filteredData = null;
fy2425NotReportedData = [];
fy2526NotReportedData = [];
metricsDetailsData = [];
console.log('✅ Data manually cleared');
```

### Check Filter State
In browser console, run:
```javascript
// Check active filters
console.log('Active FY filter:', document.getElementById('fyFilter')?.value);
console.log('Active month:', document.getElementById('monthFilter')?.value);
console.log('Filtered data:', filteredData);
```

---

## 📞 What to Report

If data refresh still doesn't work, provide:

1. **Console logs** (full output from upload)
2. **Screenshot** of TEST dashboard header (showing TEST MODE badge)
3. **File details**:
   - Original file name and size
   - Updated file name and size
   - What data changed
4. **Browser info**: Chrome, Firefox, Safari + version
5. **Steps taken**: Exact sequence of actions
6. **Expected vs Actual**:
   - Expected: "FY 25-26 records: 175"
   - Actual: "FY 25-26 records: 150" (no change)

---

## 🎯 Quick Test (30 seconds)

1. Open: https://3001-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
2. Login: `GoGetter@2026`
3. Press F12 (open console)
4. Upload Excel file
5. Look for: "✅ DATA REFRESH COMPLETE at [time]"
6. Look for: Green box top-right showing time
7. Upload SAME file again
8. Check: NEW timestamp appears
9. ✅ If timestamps update → Data refresh is working!

---

## 🌐 TEST vs LIVE URLs

**TEST (Port 3001)** - Use this for debugging:
```
https://3001-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
```

**LIVE (Port 3000)** - Your production dashboard:
```
https://3000-in27j4kvifkpo1odihjj8-b237eb32.sandbox.novita.ai
```

**Note**: Both dashboards are independent. Changes in TEST won't affect LIVE.

---

**Version**: TEST v5.10.5  
**Created**: 2026-03-23  
**Purpose**: Debug data refresh issues  
**Status**: ✅ Running on port 3001

---

🎉 **TEST Dashboard is ready! Start by uploading your Excel file and watch the console logs.**
