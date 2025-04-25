import { LoginForm, SocialSignIn } from '@/app/(auth)/ClientAuthForm';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default async function SignUpPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sign In!!</CardTitle>
                <CardDescription>Sign In with your account</CardDescription>
            </CardHeader>
            <CardContent>
                <SocialSignIn />
                <Separator className="my-4" />
                <LoginForm />
            </CardContent>
        </Card>
    );
}
