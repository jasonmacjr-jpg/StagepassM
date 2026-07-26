/*
==========================================
 StagePass Configuration
 Version: 1.0.0
 Environment: Development
==========================================
*/

const STAGEPASS_CONFIG = {

    // ----------------------------------
    // General Information
    // ----------------------------------

    APP_NAME: "StagePass",

    APP_TAGLINE: "The World's Stage Starts Here.",

    VERSION: "1.0.0",

    ENVIRONMENT: "development", // development | testing | production

    WEBSITE_URL: "https://stagepass.com",

    SUPPORT_EMAIL: "support@stagepass.com",

    CONTACT_EMAIL: "contact@stagepass.com",

    TRUST_EMAIL: "trust@stagepass.com",

    // ----------------------------------
    // Default Settings
    // ----------------------------------

    DEFAULT_LANGUAGE: "en",

    DEFAULT_CURRENCY: "USD",

    DEFAULT_THEME: "dark", // dark | light | system

    TIMEZONE: "UTC",

    // ----------------------------------
    // Feature Switches
    // ----------------------------------

    FEATURES: {

        WALLET: true,

        STAGEPOINTS: true,

        VIP: true,

        CONCIERGE: true,

        STARS: true,

        EVENTS: true,

        DISCOVER: true,

        SEARCH: true,

        MULTI_LANGUAGE: true,

        MULTI_CURRENCY: true,

        ANNOUNCEMENT_RIBBON: true,

        NEWSLETTER: true,

        TRUST_CENTER: true,

        SECURITY_CENTER: true,

        NOTIFICATIONS: true,

        CHAT_SYSTEM: true,

        VERIFICATION: true,

        TEST_MODE: true

    },

    // ----------------------------------
    // Homepage Settings
    // ----------------------------------

    HOMEPAGE: {

        HERO_SLIDER: true,

        HERO_SEARCH: true,

        LIVE_COUNTERS: true,

        FEATURED_EVENTS: true,

        FEATURED_STARS: true,

        VIP_SECTION: true,

        CATEGORY_SECTION: true,

        TESTIMONIALS: true,

        NEWSLETTER: true,

        FOOTER: true

    },

    // ----------------------------------
    // Wallet
    // ----------------------------------

    WALLET: {

        NAME: "StagePass Wallet",

        POINT_NAME: "StagePoints",

        AUTO_GENERATE_TRANSACTION_ID: true

    },

    // ----------------------------------
    // VIP Plans
    // ----------------------------------

    VIP: {

        GOLD: 99,

        PLATINUM: 249,

        DIAMOND: 499

    },

    // ----------------------------------
    // Payment Options
    // ----------------------------------

    PAYMENTS: {

        CRYPTO: true,

        BANK_TRANSFER: true,

        PAYPAL: true,

        CASHAPP: true,

        ZELLE: true,

        MANUAL_APPROVAL: true

    }

};

// Freeze configuration
Object.freeze(STAGEPASS_CONFIG);

console.log(
    `${STAGEPASS_CONFIG.APP_NAME} v${STAGEPASS_CONFIG.VERSION} Loaded`
);
