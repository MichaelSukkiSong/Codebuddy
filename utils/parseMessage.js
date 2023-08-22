const types = require('./types');

exports.parsedMessages = (
  section,
  language,
  framework,
  messages,
  changedlanguage
) => {
  // messages=[{type:'TEXT',message:'' }, {type: 'CODE',message:'' }]
  const parsedMessages = messages
    .map((message, index) => {
      if (message.type === 'TEXT') {
        return `${message.message}. ${
          messages[index + 1]?.type === 'CODE'
            ? 'The following is the code.'
            : ''
        }`;
      } else if (message.type === 'CODE') {
        return `

        ${message.message}
        
        `;
      }
    })
    .join(' ');

  const generatedMessage = genMessage(section, changedlanguage);

  return `
  ${language ? `I am using ${language} as my programming language` : ''}
  ${framework ? `I am using ${framework} as my framework` : ''}
  
  ${generatedMessage}.

  ${parsedMessages}

  Organize and divide your response in to two parts, the 'code' part and the 'text' part. 
  The 'code'part includes the actual code.
  The 'text' part includes text that explains the code.
  The '==============================' string can only appear only one time in the whole response.
  Always start the response with the 'code' part, and then the string '==============================', and then the 'text' part. 
  The '==============================' string should alway be included in the response.
  `;
};

const genMessage = (section, changedlanguage) => {
  switch (section) {
    case types.helpimplementation:
      return 'I need help implementing something in code.';
      break;
    case types.cantremembersyntax:
      return 'I cant remember a specific syntax.';
      break;
    case types.finderror:
      return 'My code is not working and I cannot find the error in the code. The code is as follows.';
      break;
    case types.datastructuresandalgorithm:
      return 'I need help with data structures and algorithms.';
      break;
    case types.whatisthiscodedoing:
      return 'I have no idea what this code is doing.Explaing to me what this code is doing. The code is as follows.';
      break;
    case types.moreefficiency:
      return 'I want this code to be more optimized and more efficient. The code is as follows.';
      break;
    case types.usefulinfo:
      return 'I want to know some useful info or APIs.';
      break;
    case types.showtestcode:
      return 'I want you to show test code for this specific code with the programming language and framework/library previously mentioned. The code is as follows.';
      break;
    case types.changelanguage:
      return `I want you to convert/change the code in to a another language. I want it to be converted to ${changedlanguage} The code is as follows.`;
      break;
  }
};
