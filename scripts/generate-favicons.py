"""Build favicon.ico, apple-touch-icon.png, and favicon.svg from public/images/faruq.jpg."""
from __future__ import annotations

import base64
import io
from pathlib import Path

from PIL import Image, ImageDraw

SRC = Path("public/images/faruq.jpg")
OUT_DIR = Path("public")

# Match footer avatar crop (48px frame, -35px offset, --radius-lg on 48).
REF_SIZE = 48
REF_OFFSET = 35
REF_RADIUS = 16


def avatar_crop(size: int) -> Image.Image:
    img = Image.open(SRC).convert("RGB")
    new_w = size
    new_h = round(1080 * size / 472)
    resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    top = round(REF_OFFSET * size / REF_SIZE)
    crop = resized.crop((0, top, size, top + size))
    radius = max(2, round(REF_RADIUS * size / REF_SIZE))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size, size), radius=radius, fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(crop, (0, 0), mask)
    return out


def write_ico(path: Path, sizes: list[int]) -> None:
    images = [avatar_crop(s) for s in sizes]
    images[0].save(
        path,
        format="ICO",
        sizes=[(s, s) for s in sizes],
        append_images=images[1:],
    )


def main() -> None:
    write_ico(OUT_DIR / "favicon.ico", [16, 32, 48])
    avatar_crop(180).save(OUT_DIR / "apple-touch-icon.png", format="PNG")

    png128 = avatar_crop(128)
    buf = io.BytesIO()
    png128.save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    rx = round(REF_RADIUS * 128 / REF_SIZE)
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
  <defs>
    <clipPath id="squircle">
      <rect width="128" height="128" rx="{rx}" ry="{rx}"/>
    </clipPath>
  </defs>
  <image href="data:image/png;base64,{b64}" width="128" height="128" clip-path="url(#squircle)" preserveAspectRatio="xMidYMid slice"/>
</svg>
"""
    (OUT_DIR / "favicon.svg").write_text(svg, encoding="utf-8")
    print("Wrote favicon.ico, apple-touch-icon.png, favicon.svg")


if __name__ == "__main__":
    main()