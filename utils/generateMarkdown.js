const badge = require('./licenseBadge');

//function to generate readme markdown
function generateMarkdown(data) {
  return `# ${data.title}
${badge[data.license]}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Contact email: ${data.email}
GitHub: [${data.github}](https://github.com/${data.github})
${data.addquestions}

## License
This project is licensed under the terms of the ${data.license} license.
`;
}

module.exports = generateMarkdown;
