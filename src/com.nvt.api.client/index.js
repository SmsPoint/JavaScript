/**
 * sms-client
 * API for sms-send functions
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import SmsSendRequest from './com.nvt.api.client.model/SmsSendRequest';
import SmsSendResponse from './com.nvt.api.client.model/SmsSendResponse';
import DefaultApi from './com.nvt.api.client.api/DefaultApi';


/**
* API_for_sms_send_functions.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SmsClient = require('com.nvt.api.client/index'); // See note below*.
* var xxxSvc = new SmsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SmsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['com.nvt.api.client/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SmsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SmsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module com.nvt.api.client/index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:com.nvt.api.client/ApiClient}
     */
    ApiClient,

    /**
     * The SmsSendRequest model constructor.
     * @property {module:com.nvt.api.client/com.nvt.api.client.model/SmsSendRequest}
     */
    SmsSendRequest,

    /**
     * The SmsSendResponse model constructor.
     * @property {module:com.nvt.api.client/com.nvt.api.client.model/SmsSendResponse}
     */
    SmsSendResponse,

    /**
    * The DefaultApi service constructor.
    * @property {module:com.nvt.api.client/com.nvt.api.client.api/DefaultApi}
    */
    DefaultApi
};