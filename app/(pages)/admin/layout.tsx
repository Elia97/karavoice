import { AuthGuard } from "@/components/auth-guard";
import { AdminSidebar } from "@/components/admin-sidebar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard requireAuth requireAdmin>
      <div className="flex min-h-screen bg-muted/30">
        <AdminSidebar />

        <div className="flex-1 p-8">{children}</div>
      </div>
    </AuthGuard>
  );
}
