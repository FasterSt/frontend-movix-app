'use client';

import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@/components/auth/LoginForm'), {
    ssr: false,
    loading: () => <div>Cargando formulario ...</div>,
});

// Remove this
// const SignUpForm = dynamic(() => import('@/components/auth/SignUpForm'), {
//     ssr: false,
//     loading: () => <div>Cargando formulario ...</div>,
// });

const SocialSignIn = dynamic(() => import('@/components/auth/SocialSignIn'), {
    ssr: false,
    loading: () => <div>Cargando formulario ...</div>,
});

export { LoginForm, SocialSignIn };
