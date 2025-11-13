const url = $request.url;
const obj = JSON.parse($response.body);

if (url.includes("v1/auth/device")) {
    obj.subscription = {
        autorenew: true,
        expiration: "2099-02-15T09:09:14Z",
        expires: "2099-02-15T09:09:14Z"
    };
} else if (url.includes("v1/account/details")) {
    obj.subscription = {
        autorenew: true,
        expiration: "2099-02-15T09:09:14.000000Z",
        uuid: "3c5927a6-4e3e-4773-b7af-62506e036dc7",
        subscription_type: "AppStore",
        is_expired: false,
        trial: false
    };
}

$done({ body: JSON.stringify(obj) });