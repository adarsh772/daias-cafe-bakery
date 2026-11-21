// Matches strictly 6-digit filenames: 100001 through 100015
const imageModules = import.meta.glob(
  "../assets/1000[0-1][0-9].{jpg,jpeg,png,webp,JPG,JPEG,PNG}",
  { eager: true }
);

export const MENU_PAGES = Object.entries(imageModules)
  .map(([path, module]) => {
    // Strictly extracts the last 2 digits of a 6-digit 1000XX filename
    const match = path.match(/\/1000(\d{2})\./);
    const num = match ? parseInt(match[1], 10) : 0;

    return {
      id: `menu-page-${num}`,
      number: num,
      title: `Menu Page ${num}`,
      category: num <= 8 ? "Food Menu" : "Beverages & Bakery",
      image: module.default,
    };
  })
  .filter((item) => item.number >= 1 && item.number <= 15)
  .sort((a, b) => a.number - b.number);