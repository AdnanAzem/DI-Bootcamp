// src/components/DataFetcher.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenericData } from '../features/dataSlice';
import { RootState } from '../store';
import { AxiosRequestConfig } from 'axios';

interface DataFetcherProps<T> {
  config: AxiosRequestConfig;
  render: (data: T) => React.ReactNode;
}

export function DataFetcher<T>({ config, render }: DataFetcherProps<T>) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchGenericData(config) as any);
  }, [dispatch, config]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return <>{render(data)}</>;
}
