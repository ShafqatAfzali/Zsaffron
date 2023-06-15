/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    NEXT_AZURE_HOST:process.env.NEXT_AZURE_HOST,
    NEXT_AZURE_USER_NAME:process.env.NEXT_AZURE_USER_NAME,
    NEXT_AZURE_PORT: process.env.NEXT_AZURE_PORT,
    NEXT_AZURE_PASS: process.env.NEXT_AZURE_PASS,
    NEXT_AZURE_DATABASE: process.env.NEXT_AZURE_DATABASE
  },
};

module.exports = nextConfig
