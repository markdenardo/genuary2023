import turtle

def draw_square(some_turtle):

    for i in range (1,5):
        some_turtle.forward(200)
        some_turtle.right(90)

def draw_art():
    window = turtle.Screen()
    window.bgcolor("blue")
    #Turtle Brad
    brad = turtle.Turtle()
    brad.shape("turtle")
    brad.color("red")
    brad.speed(6)
    brad.pensize(12.25)
    for i in range(1,37):
        draw_square(brad)
        brad.right(10)
    #Turtle Angie
    angie = turtle.Turtle()
    angie.shape("turtle")
    angie.color("green")
    angie.speed(100)
    angie.pensize(2)
    size=1
    while (True):
        angie.forward(size)
        angie.right(91)
        size = size + 1

    window.exitonclick()

draw_art()
