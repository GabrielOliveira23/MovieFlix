import { AxiosError, type AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useAxios = <T>(
	axiosFunction: () => Promise<AxiosResponse<T>>,
	autoFetch = true,
) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			setError(null);

			const response = await axiosFunction();

			console.log('fetch')
			setData(response.data);
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log('Axios Error')
				console.log(error.response?.data.message);
			}
			setError(error instanceof Error ? error : new Error('An error occurred'));
		} finally {
			setLoading(false);
		}
	};

	const reset = () => {
		setData(null);
		setLoading(false);
		setError(null);
	};

	useEffect(() => {
		if (autoFetch) {
			fetchData();
		}
	}, []);

	return { data, loading, error, refetch: fetchData, reset };
};

export default useAxios;
