const objc = JSON.parse($response.body);

if (objc.last_subscription) {
    objc.last_subscription.endDate = "2099-12-31 23:59:59";
    objc.last_subscription.autorenewing = true;
    objc.last_subscription.canceled = false;
    objc.last_subscription.trial = false;
}

$done({ body: JSON.stringify(objc) });
