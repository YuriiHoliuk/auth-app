const BASE_URL = 'http://localhost:3000';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = token
    ? { Authorization: token }
    : {};

  return new Headers(headers);
};

const getBodyHeaders = () => {
  const headers = getAuthHeaders();

  headers.set('Content-Type', 'application/json');

  return headers;
}

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const token = response.headers.get('x-token');

  if (token) {
    localStorage.setItem('token', token);
  }

  return response.json();
};

export const api = {
  async get(url) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },
  async post(url, body) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: getBodyHeaders(),
      body: JSON.stringify(body),
    });

    return handleResponse(response);
  },
};
