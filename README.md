# A new three year project consists of four main elements.

- Scene
- Objects - The object in a three.js world is called a Mesh.
- Camera
- Renderer

You are now inside your room and holding a camera in your hand.Inside your room you have a ball and the computer screen. Right behind you is your phone. If you want to take a picture from the camera, logically we will have the elements within the range of vision of this camera. In this case, it is the ball and the computer screen. The phone will not appear in the picture because it is not within the range of the camera's vision, but it is still inside the room. Okay, any camera takes a picture when we press a button on the camera. Assume that the button is in this place. Then the final image will be the ball and the computer screen.

Your room is the scene, the place where this photo was taken from the place where the action happened. The objects are everything in your room or in the scene. And the number of objects in this example is three objects the ball. The computer screen and the phone.

The camera is the same camera with which the scene was shot, and the renderer is the process of drawing the image taken from the camera onto the canvas. Once you press the button on the camera, the photo will be taken. Then the WebGL renderer will draw this image on the canvas.

## What is the scale?

The scale makes me stretch or shrink the mesh.

## Rotation

Now we want to clarify the difference whether the value of the rotation is negative or positive.

Let's now rotate the cube on the x axis.

Imagine that the red line is the stick that will pass through the cube.

Now we will start to rotate the cube counterclockwise.

And that's mean that the rotation value is positive.

Then the cube will rotate like this.

Now, if the rotation value is negative, then I will start to move clockwise.

Then the cube rotate in the opposite direction of the previous rotation direction.

And the same thing on the y axis.

This is how the cube will rotate when I start to rotate counterclockwise.

And this is the rotation direction when I start to rotate clockwise.

And let's try that on the Z axis.

If I rotate the cube counterclockwise.

And in case I rotated the cube clockwise.

![Alt text](/01_hello-cube/images/Screenshot%202024-04-30%20at%207.52.36 AM.png "a title")
