import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ChatbotAssistant from "@/components/ChatbotAssistant";
import OfflineIndicator from "@/components/OfflineIndicator";
import { useEffect } from 'react';
import { importCsvToIndexedDb } from '@/utils/csvLoader';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn, SignIn, SignUp } from '@clerk/clerk-react';
import PhoneAuth from '@/components/PhoneAuth';
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const App = () => {
	useEffect(() => {
		// Kick off CSV import once at startup (no-op if already imported)
		importCsvToIndexedDb();
	}, []);

	const hasClerk = Boolean(clerkPubKey);

	const HeaderAuth = hasClerk ? (
		<div className="flex items-center justify-end p-2 gap-2">
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	) : null;

	const DashboardRoute = hasClerk ? (
		<>
			<SignedIn>
				<Dashboard />
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	) : (
		<Dashboard />
	);

	const AppShell = (
		<LanguageProvider>
			<TooltipProvider>
				<Toaster />
				<Sonner />
					<BrowserRouter>
						<div className="flex items-center justify-between p-2 gap-2">
							<Link to="/phone-auth">
								<Button size="sm" variant="outline">Phone Sign In</Button>
							</Link>
							{HeaderAuth}
						</div>
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/phone-auth" element={<PhoneAuth />} />
							<Route path="/dashboard" element={DashboardRoute} />
							{hasClerk && (
								<>
									<Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
									<Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
								</>
							)}
							{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
							<Route path="*" element={<NotFound />} />
						</Routes>
						{/* Floating chatbot visible on all pages */}
						<ChatbotAssistant />
						<OfflineIndicator />
					</BrowserRouter>
			</TooltipProvider>
		</LanguageProvider>
	);

	return (
		<QueryClientProvider client={queryClient}>
			{hasClerk ? (
				<ClerkProvider publishableKey={clerkPubKey as string}>{AppShell}</ClerkProvider>
			) : (
				<>{AppShell}</>
			)}
		</QueryClientProvider>
	);
};

export default App;
