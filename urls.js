/*
    Subnodal Cloud

    Copyright (C) Subnodal Technologies. All Rights Reserved.

    https://cloud.subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

namespace("com.subnodal.cloud.urls", function(exports) {
    exports.encodeItem = function(items, cut = false) {
        var itemsValue = items.map((key) => encodeURIComponent(key)).join(",");

        return `${window.location.href.split("?")[0]}?action=open&items=${itemsValue}&cut=${cut ? "true" : "false"}`;
    };

    exports.encodeSelection = function(items, path) {
        var itemsValue = items.map((key) => encodeURIComponent(key)).join(",");
        var pathValue = path.map((key) => encodeURIComponent(key)).join(",");

        return `${window.location.href.split("?")[0]}?action=select&items=${itemsValue}&path=${pathValue}`;
    };
});