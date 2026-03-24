#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const FILE_PATH = path.join(__dirname, 'index-test.html');

console.log('🚀 Starting TEST Server...');
console.log('📁 Serving file:', FILE_PATH);
console.log('🔗 Port:', PORT);

const server = http.createServer((req, res) => {
  console.log(`📥 ${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Set aggressive cache-busting headers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Only serve the test HTML file
  if (req.url === '/' || req.url.startsWith('/?')) {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error('❌ Error reading file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading dashboard');
        return;
      }
      
      // Add timestamp to HTML to force refresh
      const timestamp = new Date().toISOString();
      const modifiedData = data.replace(
        '</head>',
        `<script>console.log('🕐 Server timestamp: ${timestamp}');</script></head>`
      );
      
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(modifiedData);
      console.log('✅ Dashboard served successfully');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('✅ TEST Server running!');
  console.log('');
  console.log('🌐 Access at:');
  console.log('   - http://localhost:3001');
  console.log('   - http://0.0.0.0:3001');
  console.log('');
  console.log('💡 This is a TEST version with:');
  console.log('   ✓ Enhanced data refresh logging');
  console.log('   ✓ Visual refresh indicator');
  console.log('   ✓ Aggressive cache busting');
  console.log('   ✓ Data clear confirmation');
  console.log('');
  console.log('🔄 Upload your Excel file to test data refresh');
  console.log('📋 Check browser console (F12) for detailed logs');
  console.log('');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('⏹️  Shutting down TEST server...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\n⏹️  Shutting down TEST server...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});
