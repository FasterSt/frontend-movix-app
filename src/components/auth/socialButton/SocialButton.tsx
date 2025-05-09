'use client';
import GithubIcon from '@/assets/svg/GitHubSVG';
import GoogleIcon from '@/assets/svg/GoogleSVG';
import { Button } from '@/components/ui/button';

export function SocialButton({
    Icon,
    message,
    className,
    onClick,
}: {
    Icon: React.FC;
    message: string;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Button onClick={onClick} className={className}>
            <Icon /> {message}
        </Button>
    );
}

export function GithubButton({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) {
    return (
        <SocialButton
            Icon={GithubIcon}
            message="Login with GitHub"
            className={className}
            onClick={onClick}
        />
    );
}

export function GoogleButton({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) {
    return (
        <SocialButton
            Icon={GoogleIcon}
            message="Login with Google"
            className={className}
            onClick={onClick}
        />
    );
}
