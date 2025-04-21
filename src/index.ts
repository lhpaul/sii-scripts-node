import * as dotenv from 'dotenv';
import { SiiSimpleApiService } from './services/external-data-sources/sii-simple-api/sii-simple-api.service.js';

// Load environment variables
dotenv.config();

async function main() {
  try {
    // Get the service instance
    const siiService = SiiSimpleApiService.getInstance();
    console.log('SII Simple API service initialized successfully.');
    console.log('Ready to make API calls with proper documentation.');
    
    
    const salesResponse = await siiService.getSalesForMonth({
      year: 2021,
      month: 1,
      userRut: '77072463-5',
      userPassword: 'Isabelita8',
      companyRut: '77072463-5',
    });
    console.log('Sales summary:', salesResponse.summaries);
    console.log(`Total sales: ${salesResponse.sales.length}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main().catch(console.error);