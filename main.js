function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(360, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("#90ee90")
    rect(0, 0, 640, 20)
    rect(0, 460, 640, 20)
    rect(0, 0, 20, 480)
    rect(620, 0, 20, 480)
    fill("#ff0012")
    circle(0, 0, 150)
    circle(0, 460, 150)
    circle(620, 0, 150)
    circle(620, 460, 150)
}

function take_snapshot() {
    save('student_name.png');
}
