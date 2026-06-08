const path = require("path");
const fs = require("fs");
const ImageKit = require("imagekit");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || process.env.IMAGEKIT_URL_ENDPOINT;
const IMAGEKIT_PUBLIC_KEY = process.env.IMAGEKIT_PUBLIC_KEY;
const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;

if (!IMAGEKIT_URL_ENDPOINT || !IMAGEKIT_PUBLIC_KEY || !IMAGEKIT_PRIVATE_KEY) {
  console.error("Missing ImageKit credentials. Set NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT, IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY.");
  process.exit(1);
}

const imagekit = new ImageKit({
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
});

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif", ".svg"]);

const listFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listFiles(fullPath);
    }
    return [fullPath];
  });
};

const uploadLocalImages = async () => {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error("Public directory not found:", PUBLIC_DIR);
    process.exit(1);
  }

  const files = listFiles(PUBLIC_DIR).filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()));

  if (files.length === 0) {
    console.log("No images found in public/. Nothing to upload.");
    return;
  }

  console.log(`Uploading ${files.length} image(s) from public/ ...`);

  for (const filePath of files) {
    const relative = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, "/");
    const folderPath = path.dirname(relative);
    const folder = folderPath === "." ? "/arkrne" : `/arkrne/${folderPath}`;
    const fileName = path.basename(relative);
    const fileData = fs.readFileSync(filePath);

    const result = await imagekit.upload({
      file: fileData,
      fileName,
      folder,
      useUniqueFileName: false,
      overwriteFile: true,
    });

    console.log(`Uploaded ${filePath} -> ${result.filePath}`);
  }
};

uploadLocalImages().catch((error) => {
  console.error("Upload failed:", error);
  process.exit(1);
});
