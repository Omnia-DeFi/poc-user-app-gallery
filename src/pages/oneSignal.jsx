import OneSignal from "react-onesignal";

export default async function runOneSignal() {
    await OneSignal.init({
        appId: "1e3811b5-c496-45df-a95d-10359c7d9f0f",
        allowLocalhostAsSecureOrigin: true,
    });
    OneSignal.showSlidedownPrompt();
}
