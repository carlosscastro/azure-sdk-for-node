/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * An error response from the Batch AI service.
 *
 */
class CloudErrorBody {
  /**
   * Create a CloudErrorBody.
   * @member {string} [code] An identifier for the error. Codes are invariant
   * and are intended to be consumed programmatically.
   * @member {string} [message] A message describing the error, intended to be
   * suitable for display in a user interface.
   * @member {string} [target] The target of the particular error. For example,
   * the name of the property in error.
   * @member {array} [details] A list of additional details about the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CloudErrorBody
   *
   * @returns {object} metadata of CloudErrorBody
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CloudErrorBody',
      type: {
        name: 'Composite',
        className: 'CloudErrorBody',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CloudErrorBodyElementType',
                  type: {
                    name: 'Composite',
                    className: 'CloudErrorBody'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CloudErrorBody;