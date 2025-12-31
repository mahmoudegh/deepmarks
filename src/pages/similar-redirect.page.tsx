import { useParams, Navigate } from "react-router-dom";

const SimilarRedirect = () => {
  const { id } = useParams();

  if (!id) return null; // safeguard

  return <Navigate to={`/results/${id}`} replace />;
};

export default SimilarRedirect;
