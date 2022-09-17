import { Footer } from "../footer";

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  keywords?: string;
  imageFullUrl?: string;
}

export const AuthLayout: React.FC<Props> = ({
  children,
  title,
  pageDescription,
  keywords,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto flex max-w-7xl flex-[1_0_auto] items-center justify-center px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};
