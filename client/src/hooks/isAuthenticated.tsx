"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// For protected dashboard routes
export const IsAuthenticatedInDashboard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (!accessToken || !refreshToken) {
      router.replace("/auth/login");
    } else {
      setChecking(false); // allow rendering
    }
  }, [router]);

  if (checking) return null; // or a loading spinner

  return <>{children}</>;
};

// For login/register routes
const IsAuthenticatedInAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (accessToken && refreshToken) {
      router.replace("/");
    } else {
      setChecking(false); // allow rendering
    }
  }, [router]);

  if (checking) return null; // or a loading spinner

  return <>{children}</>;
};

export default IsAuthenticatedInAuth;
