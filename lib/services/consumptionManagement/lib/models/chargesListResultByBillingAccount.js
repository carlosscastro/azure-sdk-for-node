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
 * Result of listing charge summary by billing account. It contains a list of
 * available change summaries in reverse chronological order by billing period.
 */
class ChargesListResultByBillingAccount extends Array {
  /**
   * Create a ChargesListResultByBillingAccount.
   * @member {string} [nextLink] The link (url) to the next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ChargesListResultByBillingAccount
   *
   * @returns {object} metadata of ChargesListResultByBillingAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChargesListResultByBillingAccount',
      type: {
        name: 'Composite',
        className: 'ChargesListResultByBillingAccount',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChargeSummaryByBillingAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChargeSummaryByBillingAccount'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ChargesListResultByBillingAccount;