import os
import glob
import shutil

brain_dir = r"C:\Users\Admin\.gemini\antigravity\brain\7e5d4298-4535-4140-a181-67a9615310c2"
dest_dir = r"C:\Users\Admin\Neil\economics-cbse-class-XII\public\assets\images\ncert"

os.makedirs(dest_dir, exist_ok=True)

media_files = glob.glob(os.path.join(brain_dir, "media__*.png"))
# Sort them by creation time (or modification time) to get the exact order of the sequence in the chat
media_files.sort(key=os.path.getmtime)

print(f"Found {len(media_files)} media files total.")

# Let's see all of them
for m in media_files:
    print(f"{os.path.basename(m)} - {os.path.getmtime(m)}")

# The user uploaded 6 images together at around 12:25:37+05:30 (approx timestamp 1771916137)
# Let's grab the last 6 files
latest_6 = media_files[-6:]
names = [
    "0_grey_screenshot.png", 
    "1_fig_4_4_aggregate_demand.png",
    "2_fig_4_5_aggregate_supply.png",
    "3_fig_4_6_equilibrium.png",
    "4_fig_4_7_equilibrium_fixed.png",
    "5_fig_4_8_paradox_thrift.png"
]

for i, src in enumerate(latest_6):
    dest = os.path.join(dest_dir, f"context_{names[i]}")
    shutil.copy2(src, dest)
    print(f"Copied to {dest}")
