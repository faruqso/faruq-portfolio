/** A deterministic, decorative QR-style pattern as SVG markup (25×25 modules, three finder squares). */
export function qrPattern(seed = 7, ink = '#0b1020'): string {
	const n = 25;
	let s = seed;
	const rand = () => (s = (s * 9301 + 49297) % 233280) / 233280;
	const inFinder = (x: number, y: number) => (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
	const cells: string[] = [];
	for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (!inFinder(x, y) && rand() > 0.52) cells.push(`M${x} ${y}h1v1h-1z`);
	const finder = (x: number, y: number) =>
		`<rect x="${x + 0.55}" y="${y + 0.55}" width="5.9" height="5.9" rx="1.5" fill="none" stroke="${ink}" stroke-width="1.1"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3" rx=".6"/>`;
	return `${finder(0, 0)}${finder(n - 7, 0)}${finder(0, n - 7)}<path d="${cells.join('')}"/>`;
}
