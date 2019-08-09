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

        const isPrimitiveType = type => {
         return ['string', 'number', 'boolean', 'null', 'undefined', 'any'].includes(type);
        }
        const jsType = javascriptTypes[prop.type] || prop.type;

        if( prop.isArray ) {
            return isPrimitiveType(jsType) ? `${jsType}[]`: `Partial<${jsType}>[]`
        }

        if(!prop.hasRequiredFields) {
            return isPrimitiveType(jsType) ? jsType : `Partial<${jsType}>`
        }

        return jsType;
    });

    // converts /buyers/{buyerID} to /buyers/${buyerID}
    // so template literal take in parameters
    Handlebars.registerHelper('parameterizePath', path => {
        if(!path) {
            return '';
        }
        return path.replace(/{/g, '${');
    });

    Handlebars.registerHelper('commaSeparate', fields => {
        return fields.join(', ');
    })
  }
  
  module.exports = handlebarsExt;
  