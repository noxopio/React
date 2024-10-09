import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./routes/components/NavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContacScreen } from "./routes/ContacScreen"
import { UserPovider } from "./routes/context/UserPovider"
import { LoginScreen } from "./routes/context/LoginScreen"

export const App = () => {
    return (
        <UserPovider>
            <NavBar />
            <hr />
            <Routes>
                <Route path='/' element={<HomeScreen />}></Route>
                <Route path='/login' element={<LoginScreen />}></Route>
                <Route path='/about' element={<AboutScreen />}></Route>
                <Route path='/contact' element={<ContacScreen />}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>
            </Routes>
        </UserPovider>
    )
}
