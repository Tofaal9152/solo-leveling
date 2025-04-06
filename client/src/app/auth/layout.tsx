"use client";

import IsAuthenticatedInAuth from "@/hooks/isAuthenticated";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <IsAuthenticatedInAuth>{children}</IsAuthenticatedInAuth>;
}
