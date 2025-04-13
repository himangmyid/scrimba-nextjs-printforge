// app\page.tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">Welcome to PrintForge</h1>
      <p className="text-lg mb-8">Your one-stop solution for all printing needs.</p>
 
      <Button variant="default">Get Started</Button>
    </div>
  );
}
    
