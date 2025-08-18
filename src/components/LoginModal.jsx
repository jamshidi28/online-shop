'use client'

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { checkOtp, getOtp } from '@/services/authServices';
import CheckOTPForm from './CheckOTPForm';
import { useRouter } from 'next/navigation';
import SendOTPForm from './SendOTPForm';

const RESEND_TIME = 60

function LoginModal({ isOpen, setIsModalOpen, setIsLoggedIn }) {
    const [phoneNumber, setPhonNumber] = useState("");
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState("");
    const [time, setTime] = useState(RESEND_TIME);
    const { data: otpResponse, error, isPending, mutateAsync: mutategetOtp } = useMutation(
        { mutationFn: getOtp })
    const { mutateAsync: mutateCheckOtp } = useMutation({ mutationFn: checkOtp })
    const router = useRouter()


    const phoneNumberHandler = (e) => {
        setPhonNumber(e.target.value);
    };

    const sendOtpHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await mutategetOtp({ phoneNumber })
            // console.log(data)
            toast.success(data.message);
            setStep(2);
            setTime(RESEND_TIME);
            setOtp("")
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    const checkOtpHadler = async (e) => {
        e.preventDefault();
        try {
            const data = await mutateCheckOtp({ phoneNumber, otp })
            // console.log(data)
            toast.success(data.message)
            router.push("/profile")
            setIsLoggedIn(true)
            setIsModalOpen(false)

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [time]);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (<SendOTPForm
                    phoneNumber={phoneNumber}
                    onChange={phoneNumberHandler}
                    onSubmit={sendOtpHandler}
                    isPending={isPending}
                />);
            case 2:
                return (
                    <CheckOTPForm
                        onBack={() => setStep((t) => t - 1)}
                        otp={otp}
                        setOtp={setOtp}
                        onSubmit={checkOtpHadler}
                        time={time}
                        onResendOtp={sendOtpHandler}
                        otpResponse={otpResponse}
                    />
                );
            default:
                return null;
        }
    }


    if (!isOpen) return null;
    return (


        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* بک‌دراپ */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
            />

            <div className="relative w-full sm:max-w-sm space-y-3 p-5 bg-white rounded-xl shadow-drop-2">
                <div className='space-y-2 flex justify-between items-center'>
                    <div>
                        {
                            step === 2 && (
                                <button onClick={() => setStep(s => s - 1)}>
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.909609 17.67C0.719609 17.67 0.529609 17.6 0.379609 17.45C0.0896094 17.16 0.0896094 16.68 0.379609 16.39L6.89961 9.87002C7.37961 9.39002 7.37961 8.61002 6.89961 8.13002L0.379609 1.61002C0.0896094 1.32002 0.0896094 0.84002 0.379609 0.55002C0.669609 0.26002 1.14961 0.26002 1.43961 0.55002L7.95961 7.07002C8.46961 7.58002 8.75961 8.27002 8.75961 9.00002C8.75961 9.73002 8.47961 10.42 7.95961 10.93L1.43961 17.45C1.28961 17.59 1.09961 17.67 0.909609 17.67Z" fill="#717171" />
                                    </svg>
                                </button>
                            )
                        }

                    </div>

                    {/*    logo      */}
                    <div >
                        logo
                    </div>

                    {/* close button */}
                    <div>
                        <button onClick={() => setIsModalOpen((c) => !c)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.31348" y="7.41431" width="2" height="16" rx="1" transform="rotate(-45 5.31348 7.41431)" fill="#717171" />
                                <rect x="16.3135" y="6" width="2" height="16" rx="1" transform="rotate(45 16.3135 6)" fill="#717171" />
                            </svg>
                        </button>
                    </div>

                </div>
                {renderStep()}


            </div>
        </div>
    )
}

export default LoginModal
