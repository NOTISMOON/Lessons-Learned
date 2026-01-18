
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
export const Auth = ({ children }: { children: React.ReactNode }) => {
    const isLogin = useSelector((state: any) => state.auth.isLogin);
    if(isLogin){
        return <>{children}</>;
    }else{
        return <Navigate to="/login" />
    }
    
}