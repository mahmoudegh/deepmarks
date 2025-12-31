// import { createBrowserRouter, Navigate } from "react-router-dom";
// import RootLayout from "@/layouts/RootLayout";
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
//       {
//         path: "account-settings",
//         element: (
//           <ProtectedRoute>
//             <AccountSettingsPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "projects",
//         element: (
//           <ProtectedRoute>
//             <ProjectsPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "support",
//         element: (
//           <ProtectedRoute>
//             <SupportPage />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);

import { createBrowserRouter, Navigate } from "react-router-dom";
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

export const router = createBrowserRouter([
  /* =========================
     Public & main pages
     (NO Sidebar)
  ========================= */
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/onboarding" />,
      },
      {
        path: "onboarding",
        element: <OnboardingPage />,
      },
      {
        path: "results",
        element: (
          <ProtectedRoute>
            <ResultsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "results/:id",
        element: (
          <ProtectedRoute>
            <SingleResultPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "results/:id/similar",
        element: <SimilarRedirect />,
      },
      {
        path: "results/:id/similar/:similarId",
        element: (
          <ProtectedRoute>
            <SimilarItemPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "results/favorite",
        element: (
          <ProtectedRoute>
            <FavoritePage />
          </ProtectedRoute>
        ),
      },
    ],
  },

  /* =========================
     Account pages
     (WITH Sidebar)
  ========================= */
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <SidebarLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "account-settings",
        element: <AccountSettingsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "support",
        element: <SupportPage />,
      },
    ],
  },
]);
