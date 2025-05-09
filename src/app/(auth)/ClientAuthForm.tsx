'use client';

import dynamic from 'next/dynamic';

const LoginWithEmailForm = dynamic(
    () => import('@/components/auth/LoginWithEmailForm'),
    {
        ssr: false,
        loading: () => (
            <div className="flex flex-col items-center justify-center w-full h-full mt-5 gap-2 animate-pulse">
                <div className="flex flex-col w-full gap-2 mb-5">
                    <div className="w-10 p-1 rounded-md bg-gray-500"></div>
                    <div className="w-full px-2 py-4 bg-gray-700 rounded-md"></div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="w-10 p-1 rounded-md bg-gray-500"></div>
                    <div className="w-full px-2 py-4 bg-gray-700 rounded-md"></div>
                    <div className="w-24 p-1 rounded-md bg-gray-500"></div>
                </div>
                <div className="w-full px-2 py-4 bg-gray-700 rounded-md mt-10"></div>
            </div>
        ),
    },
);

const SocialSignIn = dynamic(() => import('@/components/auth/SocialSignIn'), {
    ssr: false,
    loading: () => (
        <div
            role="status"
            className="flex flex-col items-center justify-center w-full h-full gap-2 animate-pulse"
        >
            <div className="w-full px-2 py-4 bg-gray-700 rounded-md"></div>
            <div className="w-full px-2 py-4 bg-gray-700 rounded-sm"></div>
        </div>
    ),
});

export { LoginWithEmailForm, SocialSignIn };
