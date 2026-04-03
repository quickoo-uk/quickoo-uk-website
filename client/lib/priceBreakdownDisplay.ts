/**
 * User-facing label for a quote price_breakdown line (API may return long distance copy).
 */
export function displayPriceBreakdownDescription(description: string): string {
  const d = description.trim().toLowerCase();
  if (d.includes("distance pricing")) {
    return "Base price";
  }
  if (d.includes("distance") && (d.includes("per mi") || d.includes("per mile"))) {
    return "Base price";
  }
  return description.trim();
}
