export async function getImageVersion(imageType: string) {
  try {
    const res = await fetch("/version.json");
    if (!res.ok) throw new Error("Failed to fetch version.json");
    const data = await res.json();
    return data[imageType] || 1;
  } catch (error) {
    console.error("Error fetching image version:", error);
    return 1;
  }
}
