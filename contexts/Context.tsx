import { onAuthStateChanged, User } from 'firebase/auth'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export const AuthUserContext = createContext<{ user: User | null, setUser: Dispatch<SetStateAction<User | null>> }>({
    user: null,
    setUser: () => null
})
export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    return (
        <AuthUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthUserContext.Provider>
    )

}


