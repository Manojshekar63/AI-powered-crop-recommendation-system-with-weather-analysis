import { bulkAddCrops, clearCrops, CropRow } from './db';

function parseNumber(value: string): number {
	const n = Number(value?.trim());
	return Number.isFinite(n) ? n : 0;
}

export async function importCsvToIndexedDb(forceReload = false): Promise<void> {
	try {
		const versionKey = 'csvImportedV1';
		if (!forceReload && localStorage.getItem(versionKey) === 'yes') return;

		const res = await fetch('/data/farm_data.csv');
		if (!res.ok) throw new Error('Failed to fetch CSV');
		const text = await res.text();

		const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
		// Attempt to detect header; skip first line if it contains letters
		const startIdx = /[a-zA-Z]/.test(lines[0]) ? 1 : 0;
		const rows: CropRow[] = [];
		for (let i = startIdx; i < lines.length; i++) {
			const cols = lines[i].split(',');
			if (cols.length < 9) continue;
			rows.push({
				soil_ph: parseNumber(cols[0]),
				nitrogen: parseNumber(cols[1]),
				phosphorus: parseNumber(cols[2]),
				potassium: parseNumber(cols[3]),
				soil_texture: String(cols[5] || '').trim(),
				rainfall: parseNumber(cols[6]),
				temperature: parseNumber(cols[7]),
				humidity: parseNumber(cols[8]),
				crop: String(cols[9] || '').trim(),
				yield: cols[10] != null ? parseNumber(cols[10]) : undefined,
			});
		}

		await clearCrops();
		if (rows.length) {
			await bulkAddCrops(rows);
		}
		localStorage.setItem(versionKey, 'yes');
	} catch (err) {
		console.error('CSV import failed', err);
	}
}



