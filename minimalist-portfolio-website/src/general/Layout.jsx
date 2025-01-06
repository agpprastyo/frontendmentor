import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "../components/ErrorFallback.jsx";
import Header from "../components/Header.jsx";

export const Layout = ({children}) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="flex flex-col h-screen bg-very-light-gray">
                <Header/>
                <main className="flex-grow">{children}</main>

            </div>
        </ErrorBoundary>
    );
};
