#version 150

//recieve color from vertex shader
in vec4 fragmentColor;

// Ouput data
out vec4 color;

void main(){

	color = fragmentColor;

}