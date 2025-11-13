const inAppItem = {
    quantity: "1",
    expires_date: "2099-12-18 23:59:59 Etc/GMT",
    expires_date_pst: "2099-12-18 23:59:59 America/Los_Angeles",
    is_in_intro_offer_period: "false",
    purchase_date_ms: "1701705599000",
    transaction_id: "100000000000000",
    is_trial_period: "false",
    original_transaction_id: "100000000000000",
    purchase_date: "2023-12-04 23:59:59 Etc/GMT",
    product_id: "com.anycasesolutions.SexTracker.3mon",
    original_purchase_date_pst: "2023-12-04 23:59:59 America/Los_Angeles",
    in_app_ownership_type: "PURCHASED",
    original_purchase_date_ms: "1701705599000",
    web_order_line_item_id: "100000000000000",
    expires_date_ms: "4101292799000",
    purchase_date_pst: "2023-12-04 23:59:59 America/Los_Angeles",
    original_purchase_date: "2023-12-04 23:59:59 Etc/GMT"
};

const objc = {
    status: 0,
    receipt: {
        receipt_type: "Production",
        app_item_id: 1572610176,
        receipt_creation_date: "2024-03-03 06:19:42 Etc/GMT",
        bundle_id: "com.anycasesolutions.SexTracker",
        original_purchase_date: "2024-03-03 06:19:35 Etc/GMT",
        in_app: [inAppItem],
        adam_id: 1572610176,
        receipt_creation_date_pst: "2024-03-02 22:19:42 America/Los_Angeles",
        request_date: "2024-03-03 06:51:07 Etc/GMT",
        request_date_pst: "2024-03-02 22:51:07 America/Los_Angeles",
        version_external_identifier: 861899708,
        request_date_ms: "1709448667411",
        original_purchase_date_pst: "2024-03-02 22:19:35 America/Los_Angeles",
        application_version: "119",
        original_purchase_date_ms: "1709446775000",
        receipt_creation_date_ms: "1709446782000",
        original_application_version: "119",
        download_id: 503264477119066430
    },
    latest_receipt_info: [inAppItem],
    latest_receipt: "https://t.me/py996",
    environment: "Production",
    pending_renewal_info: [{
        product_id: "com.anycasesolutions.SexTracker.3mon",
        original_transaction_id: "100000000000000",
        auto_renew_product_id: "com.anycasesolutions.SexTracker.3mon",
        auto_renew_status: "1"
    }]
};

$done({ body: JSON.stringify(objc) });