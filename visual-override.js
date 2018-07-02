/*
 * Custom function used to generate the output of the override CSS
 */

var generateOverride = function (params) {
    let output = '';

    if(params.siteBackgroundColor !== '#ffffff') {
        output += `
        body {
            background-color: ${params.siteBackgroundColor};
        }`;
    }

    return output;
}

module.exports = generateOverride;
