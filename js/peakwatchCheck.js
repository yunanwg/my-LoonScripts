const objc = JSON.parse($response.body);

if (objc.features) {
    for (const key in objc.features) {
        objc.features[key] = true;
    }
}

if (objc.content) {
    objc.content.isSubscriber = true;
    objc.content.needForceUpgrade = false;
    objc.content.productId = "peakwatch_pro_yearly_new";
}

$done({ body: JSON.stringify(objc) });