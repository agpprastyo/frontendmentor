import {Route, Routes} from "react-router-dom";
import {RoutePaths} from "./RoutePaths.jsx";
import {Home} from "../home/Home.jsx";
import {NotFound} from "./NotFound.jsx";
import {Layout} from "./Layout.jsx";

import ContactMe from "../contact/ContactMe.jsx";
import Portfolio from "../portfolio/Portfolio.jsx";
import Details from "../portfolio/Details.jsx";


export const Router = () => (
    <Routes>
        <Route
            path={RoutePaths.HOME}
            element={
                <Layout>
                    <Home/>
                </Layout>
            }
        />
        <Route
            path={RoutePaths.PORTFOLIO}
            element={
                <Layout>
                    <Portfolio/>
                </Layout>
            }
        />
        <Route path="/portfolio/:slug" element={<Layout><Details/></Layout>}/>
        {/*<Route*/}
        {/*    path={RoutePaths.DETAIL}*/}
        {/*    element={*/}
        {/*        <Layout>*/}
        {/*            <Details/>*/}
        {/*        </Layout>*/}
        {/*    }*/}
        {/*/>*/}

        <Route
            path={RoutePaths.CONTACT_ME}
            element={
                <Layout>
                    <ContactMe/>
                </Layout>
            }
        />
        <Route
            path="*"
            element={
                <Layout>
                    <NotFound/>
                </Layout>
            }
        />
    </Routes>
);
