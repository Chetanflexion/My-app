import { Routes, Route } from "react-router-dom"
import Forgot_password from "./forgot_password"

function define_routes() {
    return (
        <div className="Routes">
            <Routes>
                <Route path="forgot_password" element={<Forgot_password />} />
            </Routes>
        </div>
    )
}

export default define_routes;