import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function SignUpPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up!!</CardTitle>
        <CardDescription>Sign Up to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="my-4" />
        <LoginForm />
      </CardContent>
      <CardFooter>
        <Button variant="outline">Sign Up</Button>
      </CardFooter>
    </Card>
  );
}
