'use client';

// import {
//     signInWithGithub,
//     signInWithGoogle,
// } from '@/app/auth/services/auth.api';
import { GithubButton, GoogleButton } from './socialButton/SocialButton';

export default function SocialSignIn() {
    const handleGithub = async () => {
        // const res = await signInWithGithub();
        console.log('Sign in with Github clicked');
    };

    const handleGoogle = async () => {
        // const res = await signInWithGoogle();
        console.log('Sign in with Google clicked');
    };

    return (
        <div className="flex flex-col gap-2">
            <GoogleButton onClick={handleGoogle} className="w-full gap-2" />
            <GithubButton onClick={handleGithub} className="w-full gap-2" />
        </div>
    );
}
