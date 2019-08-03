const _ = require('lodash');

const javascriptTypes = {
    'integer': 'number',
    'object': 'any',
    'string': 'string',
    'boolean': 'boolean'
}
function handlebarsExt(Handlebars) {
    Handlebars.registerHelper('getType', prop => {
        if(!prop) {
            return 'void';
        }
        
        if(prop.isEnum) {
            return prop.enum.map(p => `'${p}'`).join(' | ');
        }

        if( prop.isArray ) {
            let jsType = javascriptTypes[prop.type] || prop.type; // map primitive, or return complex
            return `${jsType}[]`;
        }

        return javascriptTypes[prop.type] || prop.type;
    });

    // converts /buyers/{buyerID} to /buyers/${buyerID}
    // so template literal take in parameters
    Handlebars.registerHelper('parameterizePath', path => {
        if(!path) {
            return '';
        }
        return path.replace(/{/g, '${');
    });
  }
  
  module.exports = handlebarsExt;
  