import { Client, Account, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // or your self-hosted URL
  .setProject('YOUR_PROJECT_ID');              // replace with your project ID

export const account = new Account(client);
export { ID };