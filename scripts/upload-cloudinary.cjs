const path = require("path");
const fs = require("fs");
const { v2: cloudinary } = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("Missing Cloudinary credentials. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.");
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
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

const toPublicId = (filePath) => {
  const relative = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, "/");
  const ext = path.extname(relative);
  const withoutExt = relative.slice(0, -ext.length);

  return `arkrne/${withoutExt}`;
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
    const publicId = toPublicId(filePath);
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      overwrite: true,
      resource_type: "image",
    });

    console.log(`Uploaded ${filePath} -> ${result.public_id}`);
  }
};

uploadLocalImages().catch((error) => {
  console.error("Upload failed:", error);
  process.exit(1);
});
