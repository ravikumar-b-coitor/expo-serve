const ExpoConfig = require('@expo/config');
const fs = require('fs');
const path = require('path');

// Get path to the expo project
const projectDir = path.join(__dirname, '..', '..', 'expo-updates-client');

// Get the config
const { exp } = ExpoConfig.getConfig(projectDir, {
  skipSDKVersionRequirement: true,
  isPublicConfig: true,
});

// Output file path
const outputPath = path.join(__dirname, '..', 'updates', '2', '1744112932', 'expoConfig.json');

// Write the config to file
fs.writeFileSync(outputPath, JSON.stringify(exp, null, 2), 'utf-8');
console.log(`✅ Expo config exported to: ${outputPath}`);
