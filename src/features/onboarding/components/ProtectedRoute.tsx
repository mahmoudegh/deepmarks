// src/components/ProtectedRoute.tsx
import { type FC, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { authStore } from "@/features/onboarding/state/auth.state";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const snapshot = useSnapshot(authStore.store);

  if (!snapshot.isLoggedIn) {
    // user is not logged in → redirect to onboarding
    return <Navigate to="/onboarding" replace />;
  }

  // user is logged in → render the page
  return <>{children}</>;
};

export default ProtectedRoute;
