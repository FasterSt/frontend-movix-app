import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LoginForm } from '../ClientAuthForm';

export default function LoginPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login!!</CardTitle>
                <CardDescription>Login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <Separator className="my-4" />
                <LoginForm />
            </CardContent>
            <CardFooter>
                <Button variant="outline">Login</Button>
            </CardFooter>
        </Card>
    );
}
