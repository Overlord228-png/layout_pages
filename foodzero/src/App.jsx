/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [toggleState, setToggleState] = useState(false);
    const handleToggleState = (value) => {
    setToggleState(value);
};

    return (
        <>
            <Navbar toggleState={toggleState} handleToggleState={handleToggleState} />
                <Navigation
                    toggleState={toggleState}
                    handleToggleState={handleToggleState}
                />
                <main>
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="about" element={<About />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </main>
            <Footer/>
        </>
    );
}

export default App;
