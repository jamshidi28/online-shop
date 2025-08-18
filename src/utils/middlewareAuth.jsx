export default async function middlewareAuth(req) {
    let strCookies = ""
    req.cookies.getAll().forEach((item) => {
        strCookies += `${item?.name}=${item?.value}; `;
    })


    const {
        data
    } = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: strCookies
            // به جای کدهای پایین strcookies 
            // `${req.cookies.get("accessToken")?.name}=${
            //     req.cookies?.get("accessToken")?.value}; ${
            //     req.cookies.get("refreshToken")?.name}=${
            //     req.cookies?.get("refreshToken")?.value}`
        }
    }).then(res => res.json());
    // console.log(data)
    // console.log(req.cookies.getAll())

    const { user } = data || {}

    return user;
}