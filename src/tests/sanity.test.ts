import { describe, it, expect } from "vitest";
import { formatINR, normalizeIndianPhone, cn } from "../lib/utils";

describe("Phase 0 Environment & Utility Sanity Checks", () => {
  it("formats paisa to Indian Rupee currency correctly", () => {
    expect(formatINR(200000)).toBe("₹2,000");
    expect(formatINR(150000)).toBe("₹1,500");
    expect(formatINR(70000)).toBe("₹700");
  });

  it("normalizes Indian phone numbers to 10 digits", () => {
    expect(normalizeIndianPhone("9392201344")).toBe("9392201344");
    expect(normalizeIndianPhone("+91 9392201344")).toBe("9392201344");
    expect(normalizeIndianPhone("09392201344")).toBe("9392201344");
    expect(normalizeIndianPhone("939-220-1344")).toBe("9392201344");
  });

  it("merges Tailwind CSS classes cleanly without collision", () => {
    const result = cn("p-4 text-sm", "text-base", false && "hidden");
    expect(result).toBe("p-4 text-base");
  });
});
