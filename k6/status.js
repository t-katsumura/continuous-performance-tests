import { Trend } from 'k6/metrics';

export const  countStatus = {
    0: new Trend('status_0'),                                   // Error
    100: new Trend('status_100_Continue'),                      // RFC 9110, 15.2.1
    101: new Trend('status_101_SwitchingProtocols'),            // RFC 9110, 15.2.2
    102: new Trend('status_102_Processing'),                    // RFC 2518, 10.1
    103: new Trend('status_103_EarlyHints'),                    // RFC 8297
    200: new Trend('status_200_OK'),                            // RFC 9110, 15.3.1
    201: new Trend('status_201_Created'),                       // RFC 9110, 15.3.2
    202: new Trend('status_202_Accepted'),                      // RFC 9110, 15.3.3
    203: new Trend('status_203_NonAuthoritativeInfo'),          // RFC 9110, 15.3.4
    204: new Trend('status_204_NoContent'),                     // RFC 9110, 15.3.5
    205: new Trend('status_205_ResetContent'),                  // RFC 9110, 15.3.6
    206: new Trend('status_206_PartialContent'),                // RFC 9110, 15.3.7
    207: new Trend('status_207_MultiStatus'),                   // RFC 4918, 11.1
    208: new Trend('status_208_AlreadyReported'),               // RFC 5842, 7.1
    226: new Trend('status_226_IMUsed'),                        // RFC 3229, 10.4.1
    300: new Trend('status_300_MultipleChoices'),               // RFC 9110, 15.4.1
    301: new Trend('status_301_MovedPermanently'),              // RFC 9110, 15.4.2
    302: new Trend('status_302_Found'),                         // RFC 9110, 15.4.3
    303: new Trend('status_303_SeeOther'),                      // RFC 9110, 15.4.4
    304: new Trend('status_304_NotModified'),                   // RFC 9110, 15.4.5
    305: new Trend('status_305_UseProxy'),                      // RFC 9110, 15.4.6
    306: new Trend('status_306'),                               // RFC 9110, 15.4.7 (Unused)
    307: new Trend('status_307_TemporaryRedirect'),             // RFC 9110, 15.4.8
    308: new Trend('status_308_PermanentRedirect'),             // RFC 9110, 15.4.9
    400: new Trend('status_400_BadRequest'),                    // RFC 9110, 15.5.1
    401: new Trend('status_401_Unauthorized'),                  // RFC 9110, 15.5.2
    402: new Trend('status_402_PaymentRequired'),               // RFC 9110, 15.5.3
    403: new Trend('status_403_Forbidden'),                     // RFC 9110, 15.5.4
    404: new Trend('status_404_NotFound'),                      // RFC 9110, 15.5.5
    405: new Trend('status_405_MethodNotAllowed'),              // RFC 9110, 15.5.6
    406: new Trend('status_406_NotAcceptable'),                 // RFC 9110, 15.5.7
    407: new Trend('status_407_ProxyAuthRequired'),             // RFC 9110, 15.5.8
    408: new Trend('status_408_RequestTimeout'),                // RFC 9110, 15.5.9
    409: new Trend('status_409_Conflict'),                      // RFC 9110, 15.5.10
    410: new Trend('status_410_Gone'),                          // RFC 9110, 15.5.11
    411: new Trend('status_411_LengthRequired'),                // RFC 9110, 15.5.12
    412: new Trend('status_412_PreconditionFailed'),            // RFC 9110, 15.5.13
    413: new Trend('status_413_RequestEntityTooLarge'),         // RFC 9110, 15.5.14
    414: new Trend('status_414_RequestURITooLong'),             // RFC 9110, 15.5.15
    415: new Trend('status_415_UnsupportedMediaType'),          // RFC 9110, 15.5.16
    416: new Trend('status_416_RequestedRangeNotSatisfiable'),  // RFC 9110, 15.5.17
    417: new Trend('status_417_ExpectationFailed'),             // RFC 9110, 15.5.18
    418: new Trend('status_418_Teapot'),                        // RFC 9110, 15.5.19 (Unused)
    421: new Trend('status_421_MisdirectedRequest'),            // RFC 9110, 15.5.20
    422: new Trend('status_422_UnprocessableEntity'),           // RFC 9110, 15.5.21
    423: new Trend('status_423_Locked'),                        // RFC 4918, 11.3
    424: new Trend('status_424_FailedDependency'),              // RFC 4918, 11.4
    425: new Trend('status_425_TooEarly'),                      // RFC 8470, 5.2.
    426: new Trend('status_426_UpgradeRequired'),               // RFC 9110, 15.5.22
    428: new Trend('status_428_PreconditionRequired'),          // RFC 6585, 3
    429: new Trend('status_429_TooManyRequests'),               // RFC 6585, 4
    431: new Trend('status_431_RequestHeaderFieldsTooLarge'),   // RFC 6585, 5
    451: new Trend('status_451_UnavailableForLegalReasons'),    // RFC 7725, 3
    500: new Trend('status_500_InternalServerError'),           // RFC 9110, 15.6.1
    501: new Trend('status_501_NotImplemented'),                // RFC 9110, 15.6.2
    502: new Trend('status_502_BadGateway'),                    // RFC 9110, 15.6.3
    503: new Trend('status_503_ServiceUnavailable'),            // RFC 9110, 15.6.4
    504: new Trend('status_504_GatewayTimeout'),                // RFC 9110, 15.6.5
    505: new Trend('status_505_HTTPVersionNotSupported'),       // RFC 9110, 15.6.6
    506: new Trend('status_506_VariantAlsoNegotiates'),         // RFC 2295, 8.1
    507: new Trend('status_507_InsufficientStorage'),           // RFC 4918, 11.5
    508: new Trend('status_508_LoopDetected'),                  // RFC 5842, 7.2
    510: new Trend('status_510_NotExtended'),                   // RFC 2774, 7
    511: new Trend('status_511_NetworkAuthenticationRequired'), // RFC 6585, 6
}
