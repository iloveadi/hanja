const fs = require('fs');

// Read the file content - assuming we are in the same directory or provide full path
const content = fs.readFileSync('c:/@app-dev/web-hanja/hanja_data.js', 'utf8');

// Extract the array content
const match = content.match(/const hanjaData = \[([\s\S]*)\];/);
if (!match) {
    console.log("Could not find hanjaData array");
    process.exit(1);
}

// Parse the data roughly (since it's JS file, not pure JSON)
// We can use eval or Function to parse it since it is trusted local file
const hanjaData = eval(match[0].replace('const hanjaData = ', ''));

// Count by level
const counts = {};
hanjaData.forEach(h => {
    const level = h.level || 'unknown';
    counts[level] = (counts[level] || 0) + 1;
});

console.log("Total characters:", hanjaData.length);
console.log("Counts by level:", counts);

// Cumulative counts from 8 down to 1
const levels = [8, 7, 6, 5, 4, 3, 2, 1];
let cumulative = 0;
levels.forEach(l => {
    if (counts[l]) {
        cumulative += counts[l];
        console.log(`Level ${l} and easier: ${cumulative}`);
    }
});
