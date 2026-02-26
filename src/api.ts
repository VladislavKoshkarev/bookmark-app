import axios from 'axios';

export const API_ROUTES = {
	profile: `profile`,
	categories: `categories`,
  bookmarks: {
    get: (id: number) => `categories/${id}/bookmarks`,
    delete: (id: number) => `bookmarks/${id}`
  }
};

export const http = axios.create({
	baseURL: "http://localhost:3000/api/",
	timeout: 10000
});