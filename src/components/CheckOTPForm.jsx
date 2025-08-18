import React from 'react'
import OTPInput from 'react-otp-input'

function CheckOTPForm({ otp, setOtp, onSubmit, time,onBack, onResendOtp,otpResponse }) {
    //  console.log(otpResponse)
    return (
        <div >

            <form className="space-y-4" onSubmit={onSubmit}>

                <div className='pt-3'>
                    <h3 className='flex justify-center pb-1'>کد تایید </h3>
                    <p className='flex justify-center text-sm text-gray-7 pb-2'
                    > {otpResponse?.data?.message} </p>
                   
                </div>

                <div className="relative w-full max-w-md">

                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span> </span>}
                        inputStyle={{
                            width: "2.5rem",
                            height: "1.5rem",
                            padding: "0.2rem 0.2rem",
                            border: "1px solid rgb(var(--color-gray-7))",
                            borderRadius: "0.2rem",
                            textAlign: "center"


                        }}
                        containerStyle="flex gap-x-2 justify-center flex-row-reverse"
                        renderInput={(props) => (
                            <input
                                {...props}
                                className={`${props.className}  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition`}
                            />
                        )}

                    />
                </div>
                <div className='flex items-center '>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99967 15.1666C4.04634 15.1666 0.833008 11.9533 0.833008 7.99992C0.833008 4.04659 4.04634 0.833252 7.99967 0.833252C11.953 0.833252 15.1663 4.04659 15.1663 7.99992C15.1663 11.9533 11.953 15.1666 7.99967 15.1666ZM7.99967 1.83325C4.59967 1.83325 1.83301 4.59992 1.83301 7.99992C1.83301 11.3999 4.59967 14.1666 7.99967 14.1666C11.3997 14.1666 14.1663 11.3999 14.1663 7.99992C14.1663 4.59992 11.3997 1.83325 7.99967 1.83325Z" fill="#717171" />
                        <path d="M10.4731 10.6199C10.3864 10.6199 10.2998 10.5999 10.2198 10.5466L8.1531 9.31326C7.63977 9.00659 7.25977 8.33326 7.25977 7.73992V5.00659C7.25977 4.73326 7.48643 4.50659 7.75977 4.50659C8.0331 4.50659 8.25977 4.73326 8.25977 5.00659V7.73992C8.25977 7.97992 8.45977 8.33326 8.66643 8.45326L10.7331 9.68659C10.9731 9.82659 11.0464 10.1333 10.9064 10.3733C10.8064 10.5333 10.6398 10.6199 10.4731 10.6199Z" fill="#717171" />
                    </svg>
                    <div>
                        {
                            time > 0 ? (
                            <p className='text-xs text-gray-8 px-1'>{time} تا دریافت مجدد کد</p>
                        ) : (
                                <button onClick={onResendOtp}>دریافت مجدد کد</button>)
                        }
                    </div>

                </div>
                <button type="submit" className="btn btn--primary">ثبت کد</button>

            </form>
        </div>
    )
}

export default CheckOTPForm
