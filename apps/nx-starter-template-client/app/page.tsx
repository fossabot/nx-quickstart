import { initClient } from '@ts-rest/core';
import { TestTsRestRoute } from '@nx-starter-template/shared-dto-routers';
export default async function Index() {
  /**
   * Initializes the client and sends a request to get a message.
   * @param {string} TestTsRestRoute - The route for the REST API.
   * @param {object} options - The options for initializing the client.
   * @param {string} options.baseUrl - The base URL for the API.
   * @param {object} options.baseHeaders - The base headers for the API.
   * @returns {Promise<any>} - A promise that resolves to the result of the API request.
   */
  const client = initClient(TestTsRestRoute, {
    baseUrl: 'http://localhost:3000/api',
    baseHeaders: {},
  });

  const result = await client.getMessage({
    params: {
      displayName: 'Test1',
    },
  });

  return (
    <div>
      <p>
        {result.status === 200 ? result.body?.message : 'Something went wrong'}
      </p>
    </div>
  );
}
