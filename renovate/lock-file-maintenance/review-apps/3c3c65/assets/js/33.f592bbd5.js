(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{326:function(t,e,s){"use strict";s.r(e);var a=s(4),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"get-message-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-message-status"}},[t._v("#")]),t._v(" Get message status")]),t._v(" "),e("p",[t._v("You can use the GC Notify API to retrieve the status of one or more messages.")]),t._v(" "),e("p",[t._v("Message status depends on the type of message you have sent.")]),t._v(" "),e("p",[t._v("You can only get the status of messages that are 7 days old or newer (by default). Data retention can be configured to be anywhere between 3 and 7 days at either the service or notification level.")]),t._v(" "),e("h2",{attrs:{id:"email-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email-status"}},[t._v("#")]),t._v(" Email status")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Status Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Information")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Created")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has placed the message in a queue, ready to be sent to the provider. It should only remain in this state for a few seconds.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("In transit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has sent the message to the provider. The provider will try to deliver the message to the recipient for up to 72 hours. GC Notify is waiting for delivery information.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Pending")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify is waiting for more delivery information."),e("br"),t._v("GC Notify received a callback from the provider but the recipient’s device has not yet responded. Another callback from the provider determines the final status of the notification.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Sent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has received delivery information from the provider that indicates the message was successfully delivered to the recipient")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Delivered")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The message was successfully delivered.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Failed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This covers all failure statuses:"),e("br"),t._v("- "),e("code",[t._v("permanent-failure")]),t._v(' - "The provider could not deliver the message because the email address was wrong. You should remove these email addresses from your database."'),e("br"),t._v("- "),e("code",[t._v("temporary-failure")]),t._v(' - "The provider could not deliver the message. This can happen when the recipient’s inbox is full. You can try to send the message again."'),e("br"),t._v("- "),e("code",[t._v("technical-failure")]),t._v(' - "Your message was not sent because there was a problem between GC Notify and the provider."'),e("br"),t._v("You’ll have to try sending your messages again."),e("br"),t._v("- "),e("code",[t._v("virus-scan-failed")]),t._v(' - "GC Notify did not send your message because we detected a virus in the attachments. Check the attachments and try again."')])])])]),t._v(" "),e("h2",{attrs:{id:"text-message-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text-message-status"}},[t._v("#")]),t._v(" Text message status")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Status Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Information")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Created")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has placed the message in a queue, ready to be sent to the provider. It should only remain in this state for a few seconds.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("In transit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has sent the message to the provider. The provider will try to deliver the message to the recipient for up to 72 hours. GC Notify is waiting for delivery information.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Pending")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify is waiting for more delivery information."),e("br"),t._v("GC Notify received a callback from the provider but the recipient’s device has not yet responded. Another callback from the provider determines the final status of the notification.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Sent / Sent internationally")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The message was sent to an international number. The mobile networks in some countries do not provide any more delivery information. The GC Notify client API returns this status as "),e("code",[t._v("sent")]),t._v(". The GC Notify client app returns this status as "),e("code",[t._v("Sent to an international number")]),t._v(".")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Delivered")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The message was successfully delivered.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Failed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("This covers all failure statuses:"),e("br"),t._v("- "),e("code",[t._v("permanent-failure")]),t._v(' - "The provider could not deliver the message. This can happen if the phone number was wrong or if the network operator rejects the message. If you’re sure that these phone numbers are correct, you should '),e("a",{attrs:{href:"https://notification.canada.ca/contact",target:"_blank",rel:"noopener noreferrer"}},[t._v("contact us"),e("OutboundLink")],1),t._v('. If not, you should remove them from your database. You’ll still be charged for text messages that cannot be delivered."'),e("br"),t._v("- "),e("code",[t._v("temporary-failure")]),t._v(' - "The provider could not deliver the message. This can happen when the recipient’s phone is off, has no signal, or their text message inbox is full. You can try to send the message again. You’ll still be charged for text messages to phones that are not accepting messages."'),e("br"),t._v("- "),e("code",[t._v("technical-failure")]),t._v(' - "Your message was not sent because there was a problem between GC Notify and the provider.'),e("br"),t._v('You’ll have to try sending your messages again. You will not be charged for text messages that are affected by a technical failure."')])])])]),t._v(" "),e("h2",{attrs:{id:"get-the-status-of-one-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-status-of-one-message"}},[t._v("#")]),t._v(" Get the status of one message")]),t._v(" "),e("p",[t._v("You can use the GC Notify API to get a single message status.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /v2/notifications/{notification_id}\n")])])]),e("h3",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("h4",{attrs:{id:"notification-id-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notification-id-required"}},[t._v("#")]),t._v(" notification_id (required)")]),t._v(" "),e("p",[t._v("The ID of the notification. You can find the notification ID in the response to the original notification method call.")]),t._v(" "),e("p",[t._v("You can also find it by "),e("a",{attrs:{href:"https://notification.canada.ca/sign-in",target:"_blank",rel:"noopener noreferrer"}},[t._v("signing in to GC Notify"),e("OutboundLink")],1),t._v(" and going to the "),e("strong",[t._v("API integration")]),t._v(" page.")]),t._v(" "),e("p",[t._v("You can filter the returned messages by including the following optional parameters in the URL:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("template_type")])]),t._v(" "),e("li",[e("code",[t._v("status")])]),t._v(" "),e("li",[e("code",[t._v("reference")])]),t._v(" "),e("li",[e("code",[t._v("older_than")])])]),t._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("p",[t._v("If the request is successful, the response body is "),e("code",[t._v("json")]),t._v(" and the status code is "),e("code",[t._v("200")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"740e5834-3a29-46b4-9a6f-16142fde533a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - notification ID\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reference"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email_address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sender@something.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for emails\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+447900900123"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for text messages\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email / sms"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created / sending / pending / delivered / permanent-failure / temporary-failure / technical-failure / pending-virus-check / virus-scan-failed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status_description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"In transit / In transit / In transit / Delivered / [Blocked | No such number | No such address] / [Content or inbox issue | Carrier issue] / Tech issue / In transit / Attachment has virus"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider_response"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - will not be "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v(" only when the status is a technical failure\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"template"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f33517ff-2a88-4f6e-b855-c550268ce08a"')]),t._v(" # required string - template ID\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/v2/template/{id}/{version}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - body of notification\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string for email - subject of email\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - date and time notification created\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_by_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - name of the person who sent the notification if sent manually\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sent_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - date and time notification sent to provider\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed_at:"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v(" # optional string - date and time notification delivered or failed\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"error-codes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-codes"}},[t._v("#")]),t._v(" Error codes")]),t._v(" "),e("p",[t._v("If the request is not successful, the response body is "),e("code",[t._v("json")]),t._v(", refer to the table below for details.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("status_code")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("How to fix")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("400")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "ValidationError",')]),e("br"),e("code",[t._v('"message": "id is not a valid UUID"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("403")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "AuthError",')]),e("br"),e("code",[t._v('"message": "Error: Your system clock must be accurate to within 30 seconds"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check your system clock")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("403")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "AuthError",')]),e("br"),e("code",[t._v('"message": "Invalid token: API key not found"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Use the correct "),e("RouterLink",{attrs:{to:"/en/keys.html"}},[t._v("API key")])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("404")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "NoResultFound",')]),e("br"),e("code",[t._v('"message": "No result found"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])])])]),t._v(" "),e("h2",{attrs:{id:"get-the-status-of-multiple-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-status-of-multiple-messages"}},[t._v("#")]),t._v(" Get the status of multiple messages")]),t._v(" "),e("p",[t._v("You can use the GC Notify API to find the status of multiple messages at the same time.")]),t._v(" "),e("p",[t._v("This API call returns one page of up to 250 messages and statuses. You can get either the most recent messages, or get older messages by specifying a particular notification ID in the "),e("code",[t._v("older_than")]),t._v(" argument.")]),t._v(" "),e("p",[t._v("You can only get the status of messages that are 7 days old or newer (by default). Data retention can be configured to be anywhere between 3 and 7 days at either the service or notification level.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /v2/notifications\n")])])]),e("h4",{attrs:{id:"all-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-messages"}},[t._v("#")]),t._v(" All messages")]),t._v(" "),e("p",[t._v("This will return your messages with statuses. The type of API key you use to make requests to this endpoint is important (i.e. Team, Test, or Live). This type will be matched with the type of API key that created your messages. If you make a request with a Live API key, only messages created by Live API keys will be returned. They will display in pages of up to 250 messages each.")]),t._v(" "),e("p",[t._v("You can filter the returned messages by including the following optional arguments in the URL:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("template_type")])]),t._v(" "),e("li",[e("code",[t._v("status")])]),t._v(" "),e("li",[e("code",[t._v("reference")])]),t._v(" "),e("li",[e("code",[t._v("older_than")])])]),t._v(" "),e("h3",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("p",[t._v("You can omit any of these arguments to ignore these filters.")]),t._v(" "),e("h4",{attrs:{id:"template-type-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#template-type-optional"}},[t._v("#")]),t._v(" template_type (optional)")]),t._v(" "),e("p",[t._v("If you specify "),e("code",[t._v("template_type")]),t._v(", you can filter by:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("email")])]),t._v(" "),e("li",[e("code",[t._v("sms")])])]),t._v(" "),e("h4",{attrs:{id:"status-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status-optional"}},[t._v("#")]),t._v(" status (optional)")]),t._v(" "),e("p",[t._v("If you specify "),e("code",[t._v("status")]),t._v(", you can filter by each:")]),t._v(" "),e("ul",[e("li",[t._v("email status")]),t._v(" "),e("li",[t._v("text message status")])]),t._v(" "),e("p",[t._v("You can leave out this argument to ignore this filter.")]),t._v(" "),e("h4",{attrs:{id:"reference-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference-optional"}},[t._v("#")]),t._v(" reference (optional)")]),t._v(" "),e("p",[t._v("If you specify a "),e("code",[t._v("reference")]),t._v(", you can filter results by that value, an identifier that you can create if necessary. This reference identifies a single notification or a batch of notifications. It must not contain any personal information such as name or postal address. For example:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reference"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v("\n")])])]),e("h4",{attrs:{id:"older-than-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#older-than-optional"}},[t._v("#")]),t._v(" older_than (optional)")]),t._v(" "),e("p",[t._v("Input the ID of a notification into this argument. If you use this "),e("code",[t._v("older_than")]),t._v(" argument, the method returns the next 250 received notifications older than the given ID.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"older_than":"740e5834-3a29-46b4-9a6f-16142fde533a"\n')])])]),e("p",[t._v("If you leave out this argument, the method returns the most recent 250 notifications.")]),t._v(" "),e("p",[t._v("The client only returns notifications that are 7 days old or newer. If the notification specified in this argument is older than 7 days, the client returns an empty response.")]),t._v(" "),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("p",[t._v("If the request is successful, the response body is "),e("code",[t._v("json")]),t._v(" and the status code is "),e("code",[t._v("200")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"all-messages-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-messages-2"}},[t._v("#")]),t._v(" All messages")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notifications"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"740e5834-3a29-46b4-9a6f-16142fde533a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - notification ID\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reference"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - client reference\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email_address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sender@something.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for emails\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone_number"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+447900900123"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for text messages\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email / sms"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created / sending / delivered / permanent-failure / temporary-failure / technical-failure / pending-virus-check / virus-scan-failed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status_description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"In Transit / Delivered / [Blocked | No such number | No such address] / [Content or inbox issue | Carrier issue] / Tech issue / In transit / Attachment has virus"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider_response"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - will not be "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v(" only when the status is a technical failure\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"template"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'f33517ff-2a88-4f6e-b855-c550268ce08a' # required string - template ID\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/v2/template/{id}/{version}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - body of notification\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string for email - subject of email\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - date and time notification created\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_by_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - name of the person who sent the notification if sent manually\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sent_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" STRING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - date and time notification sent to provider\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"completed_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v(" # optional string - date and time notification delivered or failed\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    …\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"current"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/notifications?template_type=sms&status=delivered"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/notifications?other_than=last_id_in_list&template_type=sms&status=delivered"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"error-codes-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-codes-2"}},[t._v("#")]),t._v(" Error codes")]),t._v(" "),e("p",[t._v("If the request is not successful, the response body is "),e("code",[t._v("json")]),t._v(", refer to the table below for details.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("status_code")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("How to fix")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("400")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "ValidationError",')]),e("br"),e("code",[t._v('"message": "id is not a valid UUID"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("403")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "AuthError",')]),e("br"),e("code",[t._v('"message": "Error: Your system clock must be accurate to within 30 seconds"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check your system clock")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("403")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "AuthError",')]),e("br"),e("code",[t._v('"message": "Invalid token: API key not found"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Use the correct "),e("RouterLink",{attrs:{to:"/en/keys.html"}},[t._v("API key")])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("404")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("[{")]),e("br"),e("code",[t._v('"error": "NoResultFound",')]),e("br"),e("code",[t._v('"message": "No result found"')]),e("br"),e("code",[t._v("}]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);