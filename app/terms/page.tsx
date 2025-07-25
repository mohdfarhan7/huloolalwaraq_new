import Navbar from '@/components/navbar';
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <div className="pt-32 pb-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-deepgreen mb-6">Terms of Service</h1>
        <p className="text-lg text-steel mb-8">This is a placeholder for the Terms of Service. Please update with your actual terms and conditions.</p>
      </div>
    </div>
  );
} 