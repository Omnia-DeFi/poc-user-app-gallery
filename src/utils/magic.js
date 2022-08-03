import { Magic } from "magic-sdk";
import { NearExtension } from "@magic-ext/near";
import { OAuthExtension } from "@magic-ext/oauth";

export const magic = new Magic("pk_live_A597CC4EA4944505", {
    extensions: [
        new NearExtension({
            rpcUrl: "",
        }),
        new OAuthExtension(),
    ],
});
