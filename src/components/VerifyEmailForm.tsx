import { useState, useContext } from 'react';
import secureLocalStorage  from  'react-secure-storage';
import createAxios from '@/lib/axios';
import Button from '@/components/Button';
import { UserContextType } from '@/lib/types';
import { UserContext } from '@/lib/context';

const VerifyEmailForm = () => {
    const userContext: UserContextType = useContext(UserContext);
    const [status, setStatus] = useState<string | null>(null);
    const axios = createAxios(userContext ? userContext.authToken: '');

    const resendEmailVerification = () => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status));
    }

    const logout = async () => {
        await axios
            .post('/logout')
            .then(res => {
                if (res.data){
                    // Remove all saved data from secureLocalStorage
                    secureLocalStorage.clear();
                    // Remove all saved data from sessionStorage
                    sessionStorage.clear();
                    userContext.userlLogout();
                }
            })
        .catch(error => {
           throw error;
        });
        window.location.pathname = '/login';
   };

   return (
        <>
        <div className="mb-4 text-sm text-gray-600">
            Thanks for signing up! Before getting started, could you
            verify your email address by clicking on the link we just
            emailed to you? If you didn&rsquo;t receive the email, we will
            gladly send you another.
        </div>

        {status === 'verification-link-sent' && (
            <div className="mb-4 font-medium text-sm text-green-600">
                A new verification link has been sent to the email
                address you provided during registration.
            </div>
        )}

        <div className="mt-4 flex items-center justify-between">
            <Button
                onClick={() => resendEmailVerification()}>
                Resend Verification Email
            </Button>

            <button
                type="button"
                className="underline text-sm text-gray-600 hover:text-gray-900"
                onClick={logout}>
                Logout
            </button>
        </div>
        </>
   );
}  

export default VerifyEmailForm;