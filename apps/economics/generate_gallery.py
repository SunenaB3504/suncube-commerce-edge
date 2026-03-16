import os

images_dir = r"C:\Users\Admin\Neil\economics-cbse-class-XII\public\assets\images\ncert"
html_path = r"C:\Users\Admin\Neil\economics-cbse-class-XII\public\debug.html"

images = [f for f in os.listdir(images_dir) if f.endswith('.png')]

with open(html_path, 'w', encoding='utf-8') as f:
    f.write("<html><body style='background: #ccc;'><h1>NCERT Extracted Images</h1>\n")
    for img in sorted(images):
        f.write(f"<div style='margin-bottom: 20px; border: 1px solid red;'>\n")
        f.write(f"<h3>{img}</h3>\n")
        f.write(f"<img src='assets/images/ncert/{img}' style='max-width: 800px;'/>\n")
        f.write(f"</div>\n")
    f.write("</body></html>")

print(f"Generated {html_path}")
