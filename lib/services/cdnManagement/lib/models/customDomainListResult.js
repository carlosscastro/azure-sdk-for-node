/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CustomDomainListResult class.
 * @constructor
 * @member {array} [value] List of CDN CustomDomains within an endpoint.
 * 
 */
function CustomDomainListResult() {
}

util.inherits(CustomDomainListResult, Array);

/**
 * Defines the metadata of CustomDomainListResult
 *
 * @returns {object} metadata of CustomDomainListResult
 *
 */
CustomDomainListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CustomDomainListResult',
    type: {
      name: 'Composite',
      className: 'CustomDomainListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CustomDomainElementType',
                type: {
                  name: 'Composite',
                  className: 'CustomDomain'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = CustomDomainListResult;