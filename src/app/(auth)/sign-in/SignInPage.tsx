import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LoginWithEmailForm, SocialSignIn } from '../ClientAuthForm';

export default function SignInPage() {
    return (
        <Card className="w-80 min-w-72 bg-white shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
            <CardHeader>
                <CardTitle>Sign In!!</CardTitle>
                <CardDescription>Sign In with your account</CardDescription>
            </CardHeader>
            <CardContent>
                <SocialSignIn />
                <Separator className="my-4" />
                <LoginWithEmailForm />
            </CardContent>
        </Card>
    );
}
