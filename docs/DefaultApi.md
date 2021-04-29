# SmsClient.DefaultApi

All URIs are relative to *http://localhost:9003/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smsSend**](DefaultApi.md#smsSend) | **POST** /sms/send | Send a text message request.



## smsSend

> SmsSendResponse smsSend(smsSendRequest)

Send a text message request.

### Example

```javascript
import SmsClient from 'sms_client';
let defaultClient = SmsClient.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SmsClient.DefaultApi();
let smsSendRequest = new SmsClient.SmsSendRequest(); // SmsSendRequest | 
apiInstance.smsSend(smsSendRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsSendRequest** | [**SmsSendRequest**](SmsSendRequest.md)|  | 

### Return type

[**SmsSendResponse**](SmsSendResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

