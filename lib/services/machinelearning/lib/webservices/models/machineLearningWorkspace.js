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
 * @class
 * Initializes a new instance of the MachineLearningWorkspace class.
 * @constructor
 * Information about the machine learning workspace containing the experiment
 * that is source for the web service.
 *
 * @member {string} id Specifies the workspace ID of the machine learning
 * workspace associated with the web service
 *
 */
class MachineLearningWorkspace {
  constructor() {
  }

  /**
   * Defines the metadata of MachineLearningWorkspace
   *
   * @returns {object} metadata of MachineLearningWorkspace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MachineLearningWorkspace',
      type: {
        name: 'Composite',
        className: 'MachineLearningWorkspace',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MachineLearningWorkspace;