import turtle
turtle.hideturtle()

def tree(branchLen,t):
    if branchLen > 10:
        t.forward(branchLen)
        t.right(20)
        tree(branchLen-15,t)
        t.left(40)
        tree(branchLen-15,t)
        t.right(20)
        t.backward(branchLen)

def main():
    turtle.Screen().bgcolor("purple")
    t = turtle.Turtle()
    myWin = turtle.Screen()
    t.left(90)
    t.up()
    t.backward(100)
    t.down()
    t.color("green")
    num = 20   
    while num < 100:
      print(num)
      tree(num,t)
      num = num + 1
    else:
      print("done")
    myWin.exitonclick()

main()
