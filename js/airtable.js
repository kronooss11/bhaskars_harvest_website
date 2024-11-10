// airtable.js
const axios = require('axios');

// Replace with your actual base ID and personal access token
const baseId = 'appjWCKwu9qEY7dF7';
const apiKey = 'patdjwWdMjF4YmCCy.e633e8c4f47b30c521a9a940edac22b949622695c60baf2f65d6971556e065a3';
const tableName = 'products'; // Replace with your actual table name

const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

const headers = {
  Authorization: `Bearer ${apiKey}`,
};

async function fetchProducts() {
  try {
    const response = await axios.get(airtableUrl, { headers });
    const records = response.data.records;
    records.forEach(record => { 
        console.log(`Product Code: ${record.fields['data-product-code']}`);
        console.log(`Product Name: ${record.fields['Product Name']}`);
        console.log(`Size: ${record.fields['data-product-sizes']}`);
        console.log(`Price: ${record.fields['Price']}`);
        console.log(`Category: ${record.fields['Category']}`);
        console.log(`Image: ${record.fields['image-link']}`);
        console.log('---');
    });
    return records; // Added return statement to make the data available to other functions
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return [];
  }
}

// Export the function to make it available to other files
module.exports = {
    fetchProducts
};

// Only call fetchProducts if this file is run directly
if (require.main === module) {
    fetchProducts();
}