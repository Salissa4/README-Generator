// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

Project is licensed under ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}  
  
  ## Table of Content
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  Install necessary dependencies by entering the below in command line:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## Tests

  To run a test enter below in command line:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Contributing

  ${data.contributing}

  ## Questions

  If you have any questions regarding repo, or issues please reach me at ${data.email}. Find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
