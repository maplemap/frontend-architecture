import { APP_CONFIG } from '../config/app-config';

const mockDb = {
  '/products': [
    { id: 'p-1', title: 'Notion Backpack', price: 129, isAvailable: true },
    { id: 'p-2', title: 'Indie T-shirt', price: 39, isAvailable: true },
    { id: 'p-3', title: 'Wooden Keyboard', price: 249, isAvailable: false },
  ],
};

class ApiClient {
  private readonly baseUrl = APP_CONFIG.apiUrl;

  async get<T>(path: keyof typeof mockDb): Promise<T> {
    const url = `${this.baseUrl}${path}`;

    return new Promise((resolve) => {
      setTimeout(() => {
        const payload = JSON.parse(JSON.stringify(mockDb[path]));
        resolve(payload as T);
      }, 300);
    });
  }
}

export const apiClient = new ApiClient();
