import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { myValidation } from "../../components/Forms/validations";

export interface UserState {
    email: string
    firstName: string
    lastName: string
    phoneNum: string
    nickName: string
    address: string
    password: string
    loginErrors: {
        email: {
            clause: string
            valid: boolean
        }[],
        firstName: {
            clause: string
            valid: boolean
        }[],
        lastName: {
            clause: string
            valid: boolean
        }[],
        phoneNum: {
            clause: string
            valid: boolean
        }[],
        address : {
            clause: string
            valid: boolean
        }[],
        password : {
            clause: string
            valid: boolean
        }[]

    }
}

const initialState: UserState = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNum: "",
    nickName: "",
    address: "",
    password: "",
    loginErrors: {
        email: [
            {
                clause: "",
                valid: false
            }
        ],
        firstName : [
            {
                clause: "",
                valid: false
            },
        ],
        lastName : [
            {
                clause: "",
                valid: false
            },
        ],
        phoneNum : [
            {
                clause: "",
                valid: false
            },
        ],
        address : [
            {
                clause: "",
                valid: false
            },
        ],
        password: [
            {
                clause: "",
                valid: false
            }
        ]
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setEmailErrors: (state, action: PayloadAction<myValidation>) => {
            state.loginErrors.email = action.payload
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload
        },
        setFirstNameErrs: (state, action: PayloadAction<myValidation>) => {
            state.loginErrors.firstName = action.payload
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload
        },
        setLastNameErrs: (state, action: PayloadAction<myValidation>) => {
            state.loginErrors.lastName = action.payload
        },
        setPhoneNum: (state, action: PayloadAction<string>) => {
            state.phoneNum = action.payload
        },
        setPhoneNumErrs: (state, action: PayloadAction<myValidation>) => {
            state.loginErrors.phoneNum = action.payload
        },
        setAddr: (state, action: PayloadAction<string>) => {
            state.address = action.payload
        },
        setAddrErrs: (state, action: PayloadAction<myValidation>) => {
            state.loginErrors.address = action.payload
        },
        setNickName: (state, action: PayloadAction<string>) => {
            state.nickName = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setPasswordErrs: (state, action: PayloadAction<myValidation>) => {
            state.loginErrors.password = action.payload
        },
    }
})

export const { setEmail, setEmailErrors, setFirstName, setFirstNameErrs, setLastName, setLastNameErrs, setPassword, setPasswordErrs, setAddr, setAddrErrs, setPhoneNum, setPhoneNumErrs, setNickName } = userSlice.actions

export default userSlice.reducer
