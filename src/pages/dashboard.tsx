import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-50 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Dashboard - Laravel Backend with Next.js Frontend</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 dark:text-white bg-white dark:bg-black border-b border-gray-200 dark:border-gray-600">
                            You&apos;re logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
