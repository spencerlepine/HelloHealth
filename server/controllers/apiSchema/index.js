const axios = require('axios');
const endpointSchema = require('../../config/endpointSchema');

// cp ./client/src/api/routes.js ./server/config/endpointSchema.js

const objToString = (obj, newLineTab, tab) => {
  const indent = `\n${newLineTab}${tab}`;

  if (obj instanceof Array) {
    return JSON.stringify(obj);
  }
  if (obj instanceof Object) {
    const string = Object.keys(obj)
      .map((keyString, i) => {
        const val = JSON.stringify(obj[keyString]);

        if (obj[keyString] instanceof Array) {
          const v = obj[keyString].map((e) => {
            const bool = typeof e === 'function' ? e.name : e;
            return bool;
          });
          return `${keyString}: ${JSON.stringify(v)}`;
        }
        return `${keyString}: ${val || obj[keyString].name}`;
      })
      .join(`,  .${indent}`);

    return `{${indent}  ${string}\n${newLineTab} }`;
  }
  return obj;
};

const endpointObjToString = (endpoints, endpointObj, tabArr, tab) => {
  let outputStr = '';

  Object.keys(endpointObj).forEach((key, i) => {
    const tabIndent = tabArr.join('');

    const obj = endpointObj[key];

    if (key === 'ENDPOINT') {
      if (tabArr.length === 0) {
        outputStr += '\n-------------\n';
      } else {
        outputStr += '\n';
      }

      outputStr += `.${tabIndent}${key} => ${endpoints.join('')}\n`;
    } else if (key === 'METHOD' || key === 'PARAMS' || key === 'BODY') {
      if (endpointObj[key]) {
        outputStr += `.${tabIndent}${tab}${key}: ${objToString(
          obj,
          `${tabIndent}     .`,
          tab
        )} \n`;
      }
    } else {
      outputStr += endpointObjToString(
        [...endpoints, endpointObj[key].ENDPOINT],
        endpointObj[key],
        [...tabArr, tab],
        tab
      );
    }
  });

  return outputStr;
};

module.exports = {
  returnAPISchema: (req, res) => {
    let outputStr = '';

    Object.keys(endpointSchema).forEach((key) => {
      outputStr += endpointObjToString(
        [endpointSchema[key].ENDPOINT],
        endpointSchema[key],
        [],
        '   .'
      );
    });

    res.status(200).send(outputStr);
  },
};
