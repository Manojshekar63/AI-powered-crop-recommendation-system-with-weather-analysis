import { openDB, IDBPDatabase } from 'idb';

export interface CropRow {
	soil_ph: number;
	nitrogen: number;
	phosphorus: number;
	potassium: number;
	oranic_carbon?: number;
	soil_texture: string;
	rainfall: number;
	temperature: number;
	humidity: number;
	crop?: string;
	yield?: number;
}

const DB_NAME = 'crop-canvas-db';
const DB_VERSION = 1;
const STORE_NAME = 'crops';

let dbPromise: Promise<IDBPDatabase> | null = null;

export function getDb(): Promise<IDBPDatabase> {
	if (!dbPromise) {
		dbPromise = openDB(DB_NAME, DB_VERSION, {
			upgrade(db) {
				if (!db.objectStoreNames.contains(STORE_NAME)) {
					const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
					store.createIndex('by_crop', 'crop');
				}
			}
		});
	}
	return dbPromise;
}

export async function clearCrops(): Promise<void> {
	const db = await getDb();
	await db.clear(STORE_NAME);
}

export async function bulkAddCrops(rows: CropRow[]): Promise<void> {
	const db = await getDb();
	const tx = db.transaction(STORE_NAME, 'readwrite');
	for (const row of rows) {
		await tx.store.add(row as any);
	}
	await tx.done;
}

export async function getAllCrops(): Promise<CropRow[]> {
	const db = await getDb();
	return (await db.getAll(STORE_NAME)) as any;
}



