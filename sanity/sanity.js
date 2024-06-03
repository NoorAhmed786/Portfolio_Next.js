import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  useCdn: true, // Use `false` to ensure fresh data
  apiVersion: '2023-01-01', // Use a specific API version
});

export default client;
