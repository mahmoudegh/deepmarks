// import { createBrowserRouter, Navigate } from "react-router-dom";
// import RootLayout from "@/layouts/RootLayout";
// import SidebarLayout from "@/layouts/SidebarLayout";

// import OnboardingPage from "@/pages/onboarding.page";
// import ResultsPage from "@/pages/results.page";
// import FavoritePage from "@/pages/favorite.page";
// import SingleResultPage from "@/pages/single-result.page";
// import SimilarItemPage from "@/pages/similar-item.page";
// import AccountSettingsPage from "@/pages/account-settings.page";
// import ProjectsPage from "@/pages/projects.page";
// import SupportPage from "@/pages/support.page";

// import ProtectedRoute from "@/features/onboarding/components/ProtectedRoute";
// import SimilarRedirect from "./pages/similar-redirect.page";

// export const router = createBrowserRouter([
//   /* =========================
//      Public & main pages
//      (NO Sidebar)
//   ========================= */
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate to="/onboarding" />,
//       },
//       {
//         path: "onboarding",
//         element: <OnboardingPage />,
//       },
//       {
//         path: "results",
//         element: (
//           <ProtectedRoute>
//             <ResultsPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "results/:id",
//         element: (
//           <ProtectedRoute>
//             <SingleResultPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "results/:id/similar",
//         element: <SimilarRedirect />,
//       },
//       {
//         path: "results/:id/similar/:similarId",
//         element: (
//           <ProtectedRoute>
//             <SimilarItemPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "results/favorite",
//         element: (
//           <ProtectedRoute>
//             <FavoritePage />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },

//   /* =========================
//      Account pages
//      (WITH Sidebar)
//   ========================= */
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <SidebarLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "account-settings",
//         element: <AccountSettingsPage />,
//       },
//       {
//         path: "projects",
//         element: <ProjectsPage />,
//       },
//       {
//         path: "support",
//         element: <SupportPage />,
//       },
//     ],
//   },
// ]);

// src/router.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import SidebarLayout from "@/layouts/SidebarLayout";

import OnboardingPage from "@/pages/onboarding.page";
import ResultsPage from "@/pages/results.page";
import FavoritePage from "@/pages/favorite.page";
import SingleResultPage from "@/pages/single-result.page";
import SimilarItemPage from "@/pages/similar-item.page";
import AccountSettingsPage from "@/pages/account-settings.page";
import ProjectsPage from "@/pages/projects.page";
import SupportPage from "@/pages/support.page";

import ProtectedRoute from "@/features/onboarding/components/ProtectedRoute";
import SimilarRedirect from "./pages/similar-redirect.page";

export const AppRoutes = () => (
  <Routes>
    {/* Public & main pages */}
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/onboarding" />} />
      <Route path="onboarding" element={<OnboardingPage />} />
      <Route
        path="results"
        element={
          <ProtectedRoute>
            <ResultsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="results/:id"
        element={
          <ProtectedRoute>
            <SingleResultPage />
          </ProtectedRoute>
        }
      />
      <Route path="results/:id/similar" element={<SimilarRedirect />} />
      <Route
        path="results/:id/similar/:similarId"
        element={
          <ProtectedRoute>
            <SimilarItemPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="results/favorite"
        element={
          <ProtectedRoute>
            <FavoritePage />
          </ProtectedRoute>
        }
      />
    </Route>

    {/* Account pages with sidebar */}
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <SidebarLayout />
        </ProtectedRoute>
      }
    >
      <Route path="account-settings" element={<AccountSettingsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="support" element={<SupportPage />} />
    </Route>
  </Routes>
);
