// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}

  ![license](https://img.shields.io/badge/license-${data.license}-green)


  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ${data.screenshot}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions

  * GitHub: ${data.gitHub}
  * For more questions, reach me at ${data.questions}

  ## License

  Licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;
