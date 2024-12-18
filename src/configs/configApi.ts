import { cookies } from "next/headers";
import { NEXT_PUBLIC_BACKEND_URL } from "../../config";

const refreshToken = async () => {
    const refreshToken = cookies().get('refresh_token');
    if (!refreshToken) {
        throw new Error('No refresh token');
    }

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh-token`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            refresh_token: refreshToken.value,
        })
    })

    if (!response.ok) {
        throw new Error('Error refreshing token');
    }
}

export const fetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const fetchOptions: RequestInit = {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };
    const token = cookies().get('access_token');
    if (token) {
        fetchOptions.headers = {
            ...fetchOptions.headers,
            Authorization: `Bearer ${token.value}`,
        };
    }
    const response = await fetch(url, options);

    if (response.status === 401) {
        try {
            await refreshToken();
            const token2 = cookies().get('access_token');
            console.log('Token1', token);
            console.log('Token2', token2);
        } catch (error) {
            console.error('Error refreshing token', error);
        }
    }

    return await response.json();
};