### **Data Pipeline Overview**

Our data pipeline describes the journey of an image from the user's upload to the final generated video. It's a multi-stage process involving the frontend, our backend server, and multiple AI models.

1. **Image Upload (Frontend):**
    
    - The user selects an image (e.g., `my_photo.jpeg`) from their device.
        
    - The **Next.js** frontend reads this image and converts it into a **base64 string**. This is a standard way to represent an image as text, making it easy to send over the internet in a JSON request.
        
2. **Mask Selection (Frontend & Backend):**
    
    - The user clicks on a point (e.g., coordinates X=150, Y=220) on the image displayed in the browser.
        
    - The frontend sends the original base64 image string and these coordinates to our backend's `/segment_image` endpoint.
        
    - The **FastAPI** backend receives this data, decodes the image, and feeds it into the **SAM (Segment Anything Model)**.
        
    - SAM identifies the object at the given coordinates and generates a **mask** (a black-and-white image where the selected object is white).
        
    - The backend converts this new mask image back into a base64 string and sends it to the frontend.
        
3. **Video Generation (Frontend & Backend):**
    
    - The frontend displays the returned mask so the user can confirm the selection.
        
    - When the user clicks "Animate!", the frontend sends the original base64 image and the base64 mask to the backend's `/generate_video` endpoint.
        
    - The backend receives both, decodes them, and feeds them into the **SVD (Stable Video Diffusion)** model. The mask tells SVD to only generate motion in the white areas.
        
    - If **"Enhanced Output"** is enabled, the resulting video frames are then passed to a **Real-ESRGAN** model for upscaling.
        
4. **Final Delivery (Backend & Frontend):**
    
    - The backend takes the final animated frames, compiles them into a video file (e.g., `.mp4`), and sends this file back to the browser.
        
    - The frontend receives the video file and displays it to the user for viewing and download.
