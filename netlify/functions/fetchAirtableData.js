// fetchAirtableData.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const personalAccessToken = process.env.AIRTABLE_PAT;  // Add this environment variable in Netlify settings
    const baseId = 'appjWCKwu9qEY7dF7';
    const tableName = 'products';

    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${personalAccessToken}`
            }
        });

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data.records),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message })
        };
    }
};
