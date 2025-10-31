import Keycloak from "keycloak-js";

// @ts-ignore
const keycloak = new Keycloak({
    url: "http://keycloak:8080",
    realm: "Impulz",
    clientId: "ImpulzClient"
});

export default keycloak
