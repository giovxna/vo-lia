import React from 'react'
import Home from '../pages/Home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function Router() {
    return (
        <BrowserRouter>

            <Routes>
                <Route index element={<Home />} />
            </Routes>

        </BrowserRouter>
    );
}
