# Living Photo (Artifex) Pilot
### **Project Name: Artifex**

We're building a web application that transforms static images into captivating, partially animated videos, often called cinemagraphs.

At its core, **Artifex** is a creative tool that gives users precise control over generative AI. Instead of animating the entire image, our app allows the user to select a specific region, bringing only that part to life while the rest remains perfectly still.

---

### **Key Features**

- **Regional Animation:** The main feature. Users can upload an image and use a simple click-to-select tool to choose which object or area they want to animate.
    
- **Two Creative Modes:**
    
    - **Photo Mode:** Designed for realistic photographs, perfect for animating elements like water, clouds, fire, or hair.
        
    - **Living Drawings Mode:** A unique mode specifically for sketches, cartoons, and children's drawings, allowing users to bring their creations to life.
        
- **Enhanced Output:** An optional "HD Quality" toggle that uses a secondary AI model to upscale the final video, making it crisper and smoother for a professional look.
    

---

### **User Workflow**

1. **Upload:** The user uploads a photo or a drawing.
    
2. **Select:** They click on the part of the image they want to animate. The app shows a preview of the selected mask.
    
3. **Animate:** The user clicks the "Animate!" button.
    
4. **View & Download:** Our backend AI pipeline generates the video, which is then displayed to the user for viewing and download.
