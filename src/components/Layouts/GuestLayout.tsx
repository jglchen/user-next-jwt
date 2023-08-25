import Head from 'next/head';
import UserContextPage from '@/components/Layouts/UserContextPage';

interface PropsType {
    children: React.ReactNode;
}

const GuestLayout = ({ children }: PropsType) => {
    return (
        <div>
            <Head>
                <title>Laravel API JWT Auth with Next.js Frontend</title>
            </Head>
            
            <UserContextPage>
                <div className="font-sans text-gray-900 antialiased">
                    {children}
                </div>
            </UserContextPage>
        </div>
    )
}

export default GuestLayout
