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

/**
 * MachineKey of an app.
 *
 */
class SiteMachineKey {
  /**
   * Create a SiteMachineKey.
   * @member {string} [validation] MachineKey validation.
   * @member {string} [validationKey] Validation key.
   * @member {string} [decryption] Algorithm used for decryption.
   * @member {string} [decryptionKey] Decryption key.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SiteMachineKey
   *
   * @returns {object} metadata of SiteMachineKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SiteMachineKey',
      type: {
        name: 'Composite',
        className: 'SiteMachineKey',
        modelProperties: {
          validation: {
            required: false,
            serializedName: 'validation',
            type: {
              name: 'String'
            }
          },
          validationKey: {
            required: false,
            serializedName: 'validationKey',
            type: {
              name: 'String'
            }
          },
          decryption: {
            required: false,
            serializedName: 'decryption',
            type: {
              name: 'String'
            }
          },
          decryptionKey: {
            required: false,
            serializedName: 'decryptionKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SiteMachineKey;