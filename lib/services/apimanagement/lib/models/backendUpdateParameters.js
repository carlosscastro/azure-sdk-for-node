/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Parameters supplied to the Update Backend operation.
 *
 * @extends models['BackendBaseParameters']
 */
class BackendUpdateParameters extends models['BackendBaseParameters'] {
  /**
   * Create a BackendUpdateParameters.
   * @member {string} [url] Runtime Url of the Backend.
   * @member {string} [protocol] Backend communication protocol. Possible
   * values include: 'http', 'soap'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BackendUpdateParameters
   *
   * @returns {object} metadata of BackendUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackendUpdateParameters',
      type: {
        name: 'Composite',
        className: 'BackendUpdateParameters',
        modelProperties: {
          title: {
            required: false,
            serializedName: 'title',
            constraints: {
              MaxLength: 300,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            constraints: {
              MaxLength: 2000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            constraints: {
              MaxLength: 2000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'BackendProperties'
            }
          },
          credentials: {
            required: false,
            serializedName: 'credentials',
            type: {
              name: 'Composite',
              className: 'BackendCredentialsContract'
            }
          },
          proxy: {
            required: false,
            serializedName: 'proxy',
            type: {
              name: 'Composite',
              className: 'BackendProxyContract'
            }
          },
          tls: {
            required: false,
            serializedName: 'tls',
            type: {
              name: 'Composite',
              className: 'BackendTlsProperties'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            constraints: {
              MaxLength: 2000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          protocol: {
            required: false,
            serializedName: 'protocol',
            type: {
              name: 'Enum',
              allowedValues: [ 'http', 'soap' ]
            }
          }
        }
      }
    };
  }
}

module.exports = BackendUpdateParameters;