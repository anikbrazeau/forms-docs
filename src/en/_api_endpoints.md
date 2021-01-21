<code-group>
<code-block title="Java">
```java
import uk.gov.service.notify.NotificationClient;

NotificationClient client = new NotificationClient(apiKey, "https://api.notification.canada.ca");
```
</code-block>

<code-block title=".NET">
```vbnet
using Notify.Client;

var client = new NotificationClient(apiKey, "https://api.notification.canada.ca");
```
</code-block>

<code-block title="PHP">
```php
require __DIR__ . '/vendor/autoload.php';

$notifyClient = new \Alphagov\Notifications\Client([
  'baseUrl' => "https://api.notification.canada.ca",
  'apiKey' => 'your-api-key',
  'httpClient' => new \Http\Adapter\Guzzle6\Client
]);
```
</code-block>

<code-block title="Node.js">
```js
NotifyClient("https://api.notification.canada.ca", apiKey)
```
</code-block>

<code-block title="Python">
```python
from notifications_python_client.notifications import NotificationsAPIClient

notifications_client = NotificationsAPIClient(
    api_key,
    base_url="https://api.notification.canada.ca"
)
```
</code-block>

<code-block title="Ruby">
```ruby
require 'notifications/client'

client = Notifications::Client.new(api_key, "https://api.notification.canada.ca")
```
</code-block>

</code-group>
