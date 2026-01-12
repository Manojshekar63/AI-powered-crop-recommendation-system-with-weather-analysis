import { useEffect, useRef, useState } from 'react';
import { auth } from '@/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';

export default function PhoneAuth() {
	const [phone, setPhone] = useState('');
	const [otp, setOtp] = useState('');
	const [confirmation, setConfirmation] = useState<any>(null);
	const [user, setUser] = useState<any>(null);
	const recaptchaRef = useRef<RecaptchaVerifier | null>(null);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, setUser);
		return () => unsub();
	}, []);

	const ensureRecaptcha = async (): Promise<RecaptchaVerifier> => {
		if (recaptchaRef.current) return recaptchaRef.current;
		const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'invisible' });
		await verifier.render();
		recaptchaRef.current = verifier;
		return verifier;
	};

	const sendOtp = async () => {
		try {
			const trimmed = phone.trim();
			if (!/^\+\d{10,15}$/.test(trimmed)) {
				alert('Enter phone in E.164 format, e.g., +15551234567');
				return;
			}
			const appVerifier = await ensureRecaptcha();
			const confirmationResult = await signInWithPhoneNumber(auth, trimmed, appVerifier);
			setConfirmation(confirmationResult);
			alert('OTP sent. Check your SMS.');
		} catch (e: any) {
			console.error(e);
			alert(e?.message || 'Failed to send OTP');
			try { await recaptchaRef.current?.render(); } catch {}
		}
	};

	const verifyOtp = async () => {
		try {
			if (!confirmation) return alert('Send OTP first');
			await confirmation.confirm(otp);
			setOtp('');
			alert('Phone verified! Signed in.');
		} catch (e: any) {
			console.error(e);
			alert(e?.message || 'Invalid code');
		}
	};

	const handleSignOut = async () => {
		await signOut(auth);
	};

	return (
		<div className="max-w-sm w-full space-y-4">
			<div id="recaptcha-container" />
			{user ? (
				<div className="space-y-2">
					<p className="text-sm">Signed in: {user.phoneNumber || user.uid}</p>
					<Button onClick={handleSignOut} className="w-full">Sign out</Button>
				</div>
			) : (
				<div className="space-y-3">
					<label className="block text-sm">Phone (E.164, e.g. +15551234567)</label>
					<input className="w-full border rounded px-3 py-2" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+15551234567" />
					<Button onClick={sendOtp} className="w-full">Send OTP</Button>
					<label className="block text-sm">Verification code</label>
					<input className="w-full border rounded px-3 py-2" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="123456" />
					<Button onClick={verifyOtp} className="w-full">Verify & Sign In</Button>
				</div>
			)}
		</div>
	);
}


