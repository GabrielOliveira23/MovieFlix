/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Movie Flix
 * OpenAPI spec version: 0.0.1
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { env } from './env';

const API_URL = env.EXPO_PUBLIC_API_URL;

export type HelloWorld200 = {
	message: string;
};

export type HelloWorld400 = {
	message: string;
};

export type CreateUserBody = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export type CreateUser201 = {
	firstName: string;
	lastName: string;
	email: string;
};

export type CreateUser400 = {
	message: string;
};

export type CreateUser409 = {
	message: string;
};

export type CreateUser500 = {
	message: string;
};

export type GetUserById200UserZodRole =
	(typeof GetUserById200UserZodRole)[keyof typeof GetUserById200UserZodRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserById200UserZodRole = {
	Admin: 'Admin',
	Normal: 'Normal',
} as const;

export type GetUserById200UserZod = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role?: GetUserById200UserZodRole;
	savedMovies: string[];
};

export type GetUserById200 = {
	UserZod: GetUserById200UserZod;
};

export type GetUserById400 = {
	message: string;
};

export type GetUserById409 = {
	message: string;
};

export type GetUserById500 = {
	message: string;
};

export type UpdateUserBodyUser = {
	firstName?: string;
	lastName?: string;
	email?: string;
};

export type UpdateUserBody = {
	user: UpdateUserBodyUser;
};

export type UpdateUser200 = {
	firstName: string;
	lastName: string;
	email: string;
};

export type DeleteUser200 = {
	message: string;
};

export type DeleteUser400 = {
	message: string;
};

export type GetTrendings200Item = {
	searchTerm: string;
	/**
	 * @minimum 0
	 * @exclusiveMinimum
	 */
	movie_id: number;
	title: string;
	poster_path: string | null;
	vote_average: number;
};

export type IncrementMovieCountBodyMovie = {
	searchTerm: string;
	/**
	 * @minimum 0
	 * @exclusiveMinimum
	 */
	movie_id: number;
	title: string;
	poster_path: string | null;
	genres: string[];
	vote_average: number;
};

export type IncrementMovieCountBody = {
	movie: IncrementMovieCountBodyMovie;
};

export const movieFlixApi = () => {
	const helloWorld = <TData = AxiosResponse<HelloWorld200>>(
		options?: AxiosRequestConfig,
	): Promise<TData> => {
		return axios.get(`${API_URL}/hello_world`, options);
	};

	/**
	 * @summary Create a new User
	 */
	const createUser = <TData = AxiosResponse<CreateUser201>>(
		createUserBody: CreateUserBody,
		options?: AxiosRequestConfig,
	): Promise<TData> => {
		return axios.post(`${API_URL}/api/v1/users/`, createUserBody, options);
	};

	/**
	 * @summary Get info of an User
	 */
	const getUserById = <TData = AxiosResponse<GetUserById200>>(
		id: string,
		options?: AxiosRequestConfig,
	): Promise<TData> => {
		return axios.get(`${API_URL}/api/v1/users/${id}`, options);
	};

	/**
	 * @summary Update info of an User
	 */
	const updateUser = <TData = AxiosResponse<UpdateUser200>>(
		id: string,
		updateUserBody: UpdateUserBody,
		options?: AxiosRequestConfig,
	): Promise<TData> => {
		return axios.patch(
			`${API_URL}/api/v1/users/${id}`,
			updateUserBody,
			options,
		);
	};

	/**
	 * @summary Delete an User
	 */
	const deleteUser = <TData = AxiosResponse<DeleteUser200>>(
		id: string,
		options?: AxiosRequestConfig,
	): Promise<TData> => {
		return axios.delete(`${API_URL}/api/v1/users/${id}`, options);
	};

	/**
	 * @summary Get the 10 first movies trending
	 */
	const getTrendings = <TData = AxiosResponse<GetTrendings200Item[]>>(
		options?: AxiosRequestConfig,
	): Promise<TData> => {
		return axios.get(`${API_URL}/api/v1/metrics/`, options);
	};

	/**
	 * @summary Increment or register the number of times that the movie was searched
	 */
	const incrementMovieCount = <TData = AxiosResponse<void>>(
		incrementMovieCountBody: IncrementMovieCountBody,
		options?: AxiosRequestConfig,
	): Promise<TData> => {
		return axios.patch(
			`${API_URL}/api/v1/metrics/`,
			incrementMovieCountBody,
			options,
		);
	};

	return {
		helloWorld,
		createUser,
		getUserById,
		updateUser,
		deleteUser,
		getTrendings,
		incrementMovieCount,
	};
};
export type HelloWorldResult = AxiosResponse<HelloWorld200>;
export type CreateUserResult = AxiosResponse<CreateUser201>;
export type GetUserByIdResult = AxiosResponse<GetUserById200>;
export type UpdateUserResult = AxiosResponse<UpdateUser200>;
export type DeleteUserResult = AxiosResponse<DeleteUser200>;
export type GetTrendingsResult = AxiosResponse<GetTrendings200Item[]>;
export type IncrementMovieCountResult = AxiosResponse<void>;
