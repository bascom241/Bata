import {create} from "zustand";
import axiosInstance from "../lib/axios";

interface AuthState {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    login: (formData: {email: string; password: string}) => Promise<void>;
    logging: boolean;
}


const authKey = "authToken";

export const useAuthStore = create<AuthState>((set)=> ({
    logging: false,
    isAuthenticated: false,
    setIsAuthenticated: (value: boolean) => set({isAuthenticated: value}),
    login: async (formData: {email: string; password: string}) => {
        set({logging: true});
        try  {
            const response = await axiosInstance.post("/auth/login", formData);
            console.log("Login response:", response);
            const {token} = response.data.token;
            localStorage.setItem(authKey, token);
            window.location.href = "/";
            set({isAuthenticated: true, logging: false});
            
        } catch (error) {
            set({logging: false, isAuthenticated: false});
            console.error("Login failed", error);
            throw error;
       
        }
    }
}))