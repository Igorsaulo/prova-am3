import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { Home } from '../pages';
import { ChallengeOne } from '../pages';
import { ChallengeTwo } from '../pages';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desafio1" element={<ChallengeOne />} />
            <Route path="/desafio2" element={<ChallengeTwo />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}