import { Magic } from "magic-sdk";
import { NearExtension } from "@magic-ext/near";
import { OAuthExtension } from "@magic-ext/oauth";

// export const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
//     extensions: [
//         new NearExtension({
//             rpcUrl: "",
//         }),
//         new OAuthExtension(),
//     ],
// });

function createMagic() {
    if (typeof window === "undefined") return null;
    return new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
        extensions: [
            new NearExtension({
                rpcUrl: "",
            }),
            new OAuthExtension(),
        ],
    });
}

export const magic = createMagic();
