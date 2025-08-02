import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-auth-background flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 auth-gradient rounded-full opacity-20 auth-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 auth-gradient rounded-full opacity-15 auth-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 auth-gradient rounded-full opacity-10 auth-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-md mx-auto">
        <Card className="bg-auth-card border-auth-border shadow-2xl">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 auth-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>

            {/* Form content */}
            {children}
          </CardContent>
        </Card>

        {/* Bottom decoration */}
        <div className="mt-6 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-auth-border to-transparent"></div>
        </div>
      </div>
    </div>
  );
};