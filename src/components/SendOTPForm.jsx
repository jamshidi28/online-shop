

function SendOTPForm({ phoneNumber, onChange, onSubmit, isPending }) {


    return (
        <div >

            <form className="space-y-6" onSubmit={onSubmit}>
                <div >
                    <h3 className='flex justify-center py-2'>ورود/ثبت نام</h3>
                </div>
                <div>
                    <p className='flex justify-center text-xs text-gray-7'>با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</p>
                </div>

                <div className="relative w-full max-w-md">
                    <label className="absolute right-3 -top-2 bg-white px-2 text-xs text-gray-8 z-10">
                        شماره همراه
                    </label>
                    <input
                        inputMode="numeric"
                        autoComplete="off"
                        value={phoneNumber}
                        name="phonNumber"
                        onChange={onChange}
                        className="w-full border border-gray-8  rounded-lg py-2 px-4 text-left hover:bg-white  focus:border-primary outofill:bg-white"

                    />
                </div>

               <div>
                 {
                    isPending ? <p>losding...</p> : <button type="submit" className="btn btn--primary">ارسال کد</button>
                }
               </div>
                <p className='flex justify-center text-xs text-gray-8'>ورود و عضویت در ترخینه به منزله قبول  <span className="text-primary">قوانین و مقررات</span>  است.</p>
            </form>
        </div>
    )
}

export default SendOTPForm
