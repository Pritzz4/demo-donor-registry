const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
const BASE_URL = process.env.BASE_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const ESIGN_ESP_URL = process.env.ESIGN_ESP_URL || 'https://digisignsbx.abdm.gov.in/digiSign/genEspRequest';
const ESIGN_FORM_SIGN_URL = process.env.ESIGN_FORM_SIGN_URL || "https://es-staging.cdac.in/esignlevel1/2.1/form/signdoc";
const ESIGN_FORM_REPLACE_URL = process.env.ESIGN_FORM_SIGN_URL || "https://digisignsbx.abdm.gov.in/digiSign/espResponse";
const PORTAL_PLEDGE_REGISTER_URL = process.env.PORTAL_PLEDGE_REGISTER_URL || "https://demo-donor-registry.xiv.in/form/signup";
module.exports = {
    REDIS_URL,
    BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    ESIGN_ESP_URL,
    ESIGN_FORM_SIGN_URL,
    ESIGN_FORM_REPLACE_URL,
    PORTAL_PLEDGE_REGISTER_URL
}
