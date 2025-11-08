import Keycloak from "keycloak-js";

// @ts-ignore
const keycloak = new Keycloak({
    url: "https://auth.impulz.online",
    realm: "Impulz",
    clientId: "ImpulzClient"
});

export default keycloak
