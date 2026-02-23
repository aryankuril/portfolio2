import { withSentryConfig } from "@sentry/nextjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const sentryWebpackPluginOptions = {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
};

const sentryOptions = {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
    // tunnelRoute: "/monitoring",
};

export default withSentryConfig(
    nextConfig,
    sentryWebpackPluginOptions,
    sentryOptions
);