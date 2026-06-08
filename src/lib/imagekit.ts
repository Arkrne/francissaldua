type ImageKitTransformOptions = {
  width?: number;
  quality?: number;
  version?: string;
};

const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
const IMAGEKIT_BASE = IMAGEKIT_URL_ENDPOINT
  ? IMAGEKIT_URL_ENDPOINT.replace(/\/$/, "")
  : "";

const buildTransform = (options?: ImageKitTransformOptions) => {
  const transforms = ["f-auto"];

  if (options?.width) {
    transforms.push(`w-${options.width}`);
  }

  if (options?.quality) {
    transforms.push(`q-${options.quality}`);
  } else {
    transforms.push("q-auto");
  }

  return transforms.join(",");
};

export const imagekitImageUrl = (src: string, options?: ImageKitTransformOptions) => {
  if (!IMAGEKIT_BASE) {
    return src;
  }

  if (src.startsWith(IMAGEKIT_BASE)) {
    return src;
  }

  const isRemote = src.startsWith("http://") || src.startsWith("https://");

  if (isRemote) {
    return src;
  }

  const normalized = src.startsWith("/") ? src : `/${src}`;
  const assetPath = `/arkrne${normalized}`;
  const encodedPath = assetPath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  const transform = buildTransform(options);
  const version = options?.version ? `&v=${encodeURIComponent(options.version)}` : "";

  return `${IMAGEKIT_BASE}${encodedPath}?tr=${transform}${version}`;
};

