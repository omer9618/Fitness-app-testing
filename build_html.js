const fs = require('fs');

const mdPath = 'C:/Users/Admin/.gemini/antigravity-ide/brain/a0e958d7-af8b-4e22-8dd6-4dd0ea03d4c5/consolidated_qa_report.md';
const mdContent = fs.readFileSync(mdPath, 'utf8');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitnessApp - QA Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
        :root {
            --bg-color: #0b0f19;
            --surface-color: #151a2a;
            --surface-light: #1e2638;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #3b82f6;
            --accent-glow: rgba(59, 130, 246, 0.4);
            --border: #2a3143;
            
            --high-risk: #ef4444;
            --medium-risk: #f59e0b;
            --low-risk: #10b981;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 60px 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1300px;
            margin: 0 auto;
            background: var(--surface-color);
            padding: 50px;
            border-radius: 24px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.6);
            border: 1px solid var(--border);
            backdrop-filter: blur(10px);
        }

        h1 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: 50px;
            background: linear-gradient(135deg, #60a5fa, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 10px 30px var(--accent-glow);
        }

        h2 {
            font-size: 1.8rem;
            border-bottom: 2px solid var(--border);
            padding-bottom: 12px;
            margin-top: 50px;
            color: #f1f5f9;
        }

        ul {
            background: var(--surface-light);
            padding: 20px 40px;
            border-radius: 12px;
            border: 1px solid var(--border);
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            margin-top: 30px;
            background: var(--surface-light);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        th, td {
            padding: 18px 24px;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }

        th {
            background-color: #0f172a;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            color: var(--text-muted);
        }

        tr:last-child td {
            border-bottom: none;
        }

        tr {
            transition: all 0.2s ease;
        }

        tr:hover td {
            background-color: rgba(255, 255, 255, 0.03);
        }

        td {
            font-size: 0.95rem;
            vertical-align: top;
        }
        
        td strong {
            color: #cbd5e1;
        }

        /* Severity Badges */
        .badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        
        code {
            background: rgba(0, 0, 0, 0.3);
            padding: 4px 8px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            color: #93c5fd;
            border: 1px solid var(--border);
            font-size: 0.85rem;
        }

        a {
            color: var(--accent);
            text-decoration: none;
            transition: text-shadow 0.2s;
        }
        
        a:hover {
            text-shadow: 0 0 10px var(--accent-glow);
        }

    </style>
</head>
<body>
    <div class="container" id="content">
        <!-- Content will be injected here -->
    </div>

    <script>
        const markdownContent = ${JSON.stringify(mdContent)};
        
        // Render markdown
        document.getElementById('content').innerHTML = marked.parse(markdownContent);
        
        // Add dynamic styling to severity badges (4th column in the table)
        document.querySelectorAll('table').forEach(table => {
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                if(cells.length >= 4) {
                    const severityCell = cells[3];
                    const text = severityCell.innerText.trim().toLowerCase();
                    
                    let badgeClass = '';
                    let bgColor = '';
                    let textColor = '';
                    
                    if(text.includes('high')) {
                        bgColor = 'rgba(239, 68, 68, 0.15)';
                        textColor = '#fca5a5';
                        border = '1px solid rgba(239, 68, 68, 0.3)';
                    } else if(text.includes('medium')) {
                        bgColor = 'rgba(245, 158, 11, 0.15)';
                        textColor = '#fcd34d';
                        border = '1px solid rgba(245, 158, 11, 0.3)';
                    } else if(text.includes('low')) {
                        bgColor = 'rgba(16, 185, 129, 0.15)';
                        textColor = '#6ee7b7';
                        border = '1px solid rgba(16, 185, 129, 0.3)';
                    }
                    
                    if (bgColor) {
                        const originalHtml = severityCell.innerHTML;
                        // Strip the bold tags if present to clean up the badge text
                        const cleanText = severityCell.innerText;
                        severityCell.innerHTML = \`<span class="badge" style="background: \${bgColor}; color: \${textColor}; border: \${border}">\${cleanText}</span>\`;
                    }
                }
            });
        });
    </script>
</body>
</html>
\`;

fs.writeFileSync('C:/Users/Admin/Desktop/Salamapath/qa_report.html', htmlContent);
console.log('Successfully generated qa_report.html');
