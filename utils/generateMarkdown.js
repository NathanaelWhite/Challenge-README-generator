// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

return `

  # ${data.title}

  ![license](https://img.shields.io/badge/license-${data.license}-green)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#installation)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  
  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}

  ${data.screenshot ? data.screenshot : ''}

  ## Contributing
  ${data.contributing}


  ## Tests  
  ${data.test}


  ## Questions 
  * GitHub: ${data.github}
  * For more questions, reach me at ${data.questions}

  ## License 
  Licensed under the ${data.license} license.

  `;
};

module.exports = generateMarkdown;