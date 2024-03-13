export const checkValidData = (email,passsword)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passsword)

    if(!isEmailValid) return "Email not valid"
    if(!isPasswordValid) return "Password not valid"

    return null;

}