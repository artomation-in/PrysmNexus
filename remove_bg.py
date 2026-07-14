import sys
from PIL import Image

def remove_white_bg(image_path, output_path, tolerance=25):
    img = Image.open(image_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is close to white
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            # Make the pixel transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg(sys.argv[1], sys.argv[2])
