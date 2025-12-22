import React from 'react';
import { AuthProvider as OidcProvider, useAuth as useOidcAuth, AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
    // Points to the Authentik Application
    authority: "http://auth.localhost/application/o/omniorder/",
    client_id: "omniorder-web",
    // Upon login, redirect to the dashboard
    redirect_uri: window.location.origin + "/admin/dashboard",
    // Clean up the URL after the code exchange
    onSigninCallback: () => {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <OidcProvider {...oidcConfig}>
            {children}
        </OidcProvider>
    );
};

// Compatibility Hook: Maps OIDC state to the interface the rest of the app expects
export const useAuth = () => {
    const auth = useOidcAuth();

    return {
        // Map OIDC 'access_token' to the generic 'token' used by fetch calls
        token: auth.user?.access_token || null,

        // Expose auth state
        isAuthenticated: auth.isAuthenticated,
        isLoading: auth.isLoading,
        user: auth.user,

        // Map generic actions to OIDC methods
        login: () => auth.signinRedirect(),
        logout: () => auth.signoutRedirect(),

        // Expose raw auth object for advanced usage
        ...auth
    };
};