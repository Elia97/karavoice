import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
      <p className="ml-4 text-xl">Caricamento...</p>
    </div>
  );
};

export default Loading;
