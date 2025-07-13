// app/utils/httpclient.js
"use client";

export default function httpClient(baseURL) {
  async function request(url, method = "GET", data = null) {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${baseURL}${url}`, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    return response.json();
  }

  return {
    get: (url) => request(url, "GET"),
    post: (url, data) => request(url, "POST", data),
    put: (url, data) => request(url, "PUT", data),
    remove: (url) => request(url, "DELETE"),
  };
}
