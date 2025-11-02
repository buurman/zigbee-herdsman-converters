import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["Socket Switch"],
        model: "ZCC-3500",
        vendor: "KlikAanKlikUit",
        description: "Zigbee socket switch",
        extend: [m.onOff()],
    },
    {
        fingerprint: [{modelID: "Built-in Switch", manufacturerName: "KlikAanKlikUit"}],
        model: "ZCM-1800",
        vendor: "KlikAanKlikUit",
        description: "Zigbee switch module",
        extend: [m.onOff()],
    },
    {
        zigbeeModel: ['ZSDR-850'],
        model: "ZSDR-850",
        vendor: "KlikAanKlikUit",
        description: 'Smoke detector',
        extend: [m.battery(), m.iasZoneAlarm({"zoneType":"generic","zoneAttributes":["alarm_1","alarm_2","tamper","battery_low"]}), m.iasWarning()],
    },
];
