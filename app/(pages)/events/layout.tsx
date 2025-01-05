import { EventProvider } from "@/app/context-api/providers";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <EventProvider>{children}</EventProvider>
    </main>
  );
}
