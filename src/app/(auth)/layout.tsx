import '@/app/globals.css';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <section className="flex flex-col w-full px-4">
                    <div className="w-full after:block after:content-[''] after:rounded-lg after:my-0.5 after:absolute after:h-[3px] after:bg-sky-600 after:w-36">
                        <h1 className="text-2xl font-bold">Login</h1>
                    </div>
                    <main className="flex flex-wrap w-full gap-4 my-8 justify-center items-center">
                        {children}
                    </main>
                </section>
            </body>
        </html>
    );
}
