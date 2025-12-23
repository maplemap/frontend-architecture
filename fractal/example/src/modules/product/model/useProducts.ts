import { useMemo } from 'react';
import { apiClient } from '../../../app/api';
import { useAsync } from '../../../hooks';
import type { Product } from './types';

async function fetchProducts() {
  return apiClient.get<Product[]>('/products');
}

export function useProducts() {
  const { data, loading, error, reload } = useAsync(fetchProducts, []);

  return useMemo(
    () => ({
      products: data ?? [],
      isLoading: loading,
      hasError: Boolean(error),
      refetch: reload,
    }),
    [data, error, loading, reload],
  );
}
