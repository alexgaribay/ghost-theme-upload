const path = require('path');
const GhostAdminApi = require('@tryghost/admin-api');

(async function main() {
  try {
    const client = new GhostAdminApi({
      url: process.env.PLUGIN_HOST,
      key: process.env.PLUGIN_API_KEY,
      version: 'v3'
    });

    const filePath = path.normalize(process.env.PLUGIN_FILE_PATH);

    await client.themes.upload({ file: filePath });
    console.log(`${filePath} uploaded successfully.`);
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}());