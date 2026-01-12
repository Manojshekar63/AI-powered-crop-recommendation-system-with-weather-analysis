import { useEffect, useState } from 'react';

export default function OfflineIndicator() {
	const [isOffline, setIsOffline] = useState(!navigator.onLine);

	useEffect(() => {
		const onOffline = () => setIsOffline(true);
		const onOnline = () => setIsOffline(false);
		window.addEventListener('offline', onOffline);
		window.addEventListener('online', onOnline);
		return () => {
			window.removeEventListener('offline', onOffline);
			window.removeEventListener('online', onOnline);
		};
	}, []);

	if (!isOffline) return null;

	return (
		<div style={{
			position: 'fixed',
			bottom: 12,
			left: 12,
			padding: '8px 12px',
			background: '#1f2937',
			color: 'white',
			borderRadius: 6,
			boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
			zIndex: 1000,
		}}>
			You are offline. Showing cached/offline data.
		</div>
	);
}



