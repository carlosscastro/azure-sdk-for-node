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
 * Class representing a CampaignPushResult.
 */
class CampaignPushResult {
  /**
   * Create a CampaignPushResult.
   * @member {array} [invalidDeviceIds] A JSON array containing all identifiers
   * that have been rejected. A device can be rejected for the following
   * reasons: * The device hasn’t reported any session yet. * The device is
   * over quota (if a push quota filter is applied on your campaign). Please
   * note that if the request parameters are valid but all the specified
   * devices are rejected, the status code is still `200` with a response
   * including all the devices as being rejected.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CampaignPushResult
   *
   * @returns {object} metadata of CampaignPushResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CampaignPushResult',
      type: {
        name: 'Composite',
        className: 'CampaignPushResult',
        modelProperties: {
          invalidDeviceIds: {
            required: false,
            serializedName: 'invalidDeviceIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CampaignPushResult;