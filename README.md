# Overview

Provides the ability to upload a packaged Ghost theme to a Ghost blog as part of 
a Drone CI pipeline plugin.

## Usage

To use this plugin, update your `.drone.yml` and include the plugin as a build step. Here's how my website is configured.

``` yaml
- name: upload
  image: alexgaribay/ghost-theme-upload:latest
  settings:
    host: https://alexgaribay.com
    api_key:
      from_secret: ghost_admin_key
    file_path: alexgaribay.com.zip
```

The plugin expects 3 values to be provided:

1. `host` - the Ghost blog you are targeting
2. `api_key` - an Admin API for the Ghost blog
3. `file_path` - file path to the Ghost theme you want to upload

To create an Admin API key, add a new custom integration to your website (Settings > Integrations > Custom Integrations). Use the Admin API listed in the custom integration.