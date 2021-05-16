// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (!license) {
    return '';
  }
  return `
  ![license](https://img.shields.io/badge/license-${data.license}-green)
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  // return license link
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  ## License 
  Licensed under the ${data.license} license.
  `
};


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

return `

  # ${data.title}

  ## Description

  ${data.description}

  ${renderLicenseBadge(data)}
  
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
  * GitHub: ${data.github}
  * For more questions, reach me at ${data.questions}

  ${renderLicenseSection(data)}
  `;

};

module.exports = generateMarkdown;