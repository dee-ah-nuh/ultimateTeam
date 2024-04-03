const fs = require('fs');
const path = require('path');

const sports = ['soccer', 'basketball', 'volleyball'];
const teamSizes = ['5v5', '7v7', '11v11'];

sports.forEach(sport => {
    teamSizes.forEach(teamSize => {
        const fileName = `${sport}-${teamSize}.html`;
        const filePath = path.join(__dirname, fileName);
        const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${sport.toUpperCase()} ${teamSize.toUpperCase()}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>${sport.toUpperCase()} ${teamSize.toUpperCase()}</h1>
    <!-- Add your content here -->
</body>
</html>
        `;
        
        fs.writeFileSync(filePath, content);
        console.log(`Created ${fileName}`);
    });
});
