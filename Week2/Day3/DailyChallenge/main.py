''' Daily Challenge - Circle '''

'''
The goal is to create a class that represents a simple circle.
A Circle can be defined by either specifying the radius or the diameter.
The user can query the circle for either its radius or diameter.

Other abilities of a Circle instance:
    - Compute the circle’s area
    - Print the attributes of the circle - use a dunder method
    - Be able to add two circles together, and return a new circle with the new radius - use a dunder method
    - Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
    - Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
    - Be able to put them in a list and sort them
    - Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

'''
import math
import turtle

class Circle:
    def __init__(self, radius = 0, diameter = 0):
        if radius == 0 and diameter != 0:
            self.diameter = diameter
            self.radius = self.diameter/2
        elif radius != 0 and diameter == 0:
            self.radius = radius
            self.diameter = self.radius * 2
        elif radius != 0 and diameter != 0 and radius * 2 == diameter:
            self.radius = radius
            self.diameter = diameter
        else : 
            raise ValueError('The radius needs to be diameter/2')   
        
    def area(self):
        return round(math.pi * self.radius**2, 2)
    
    def __str__(self):
        return f'Circle(radius= {self.radius}, diameter = {self.diameter}, area = {self.area()})'
    
    def __call__(self):
        area=self.area()
        print(f'The radius of the cercle is {self.radius}, its diameter is {self.diameter} and is area is {area}') # area is not working

    def __add__(self, other):
        if isinstance(other, Circle):
            if other.radius == other.diameter/2 :
                new_radius = self.radius + other.radius
                new_diameter = self.diameter + other.diameter
                new_circle=Circle(new_radius)
                new_area= new_circle.area()
                print(f'The new circle has a radius of {new_radius}, a diameter of {new_diameter} and its area is {new_area}')
                return Circle(new_radius,new_diameter)
            else: 
                raise ValueError('The radius needs to be diameter/2')
        else :
            raise TypeError('You have to add another Circle object')

    def __lt__(self,other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        else:
            raise TypeError('You have to add another Circle object')

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        else:
            raise TypeError('You have to add another Circle object')

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            raise TypeError('You have to add another Circle object')

    def list_circles(*circles):
        if all(isinstance(c, Circle) for c in circles):
            sorted_list=sorted(circles, key=lambda c:c.radius)
            print("The list below is sorted increasingly by radius")
            for circle in sorted_list:
                print(f'Circle(radius= {circle.radius}, diameter = {circle.diameter}, area = {circle.area()})')
            return sorted_list
        else:
            raise TypeError('You have to add another Circle object')
        
    @staticmethod
    def draw_circles(circles):
        """Bonus: Draw circles using the Turtle module."""
        screen = turtle.Screen()
        screen.setup(width=800, height=600)
        screen.title("Sorted Circles")
        pen = turtle.Turtle()
        pen.speed(0)
        pen.penup()

        for circle in sorted(circles):
            pen.goto(0, -circle.radius)
            pen.pendown()
            pen.circle(circle.radius)
            pen.penup()
            pen.goto(0, 0)

        turtle.done()


c1 = Circle(radius=20)
c2 = Circle(diameter=100)
c3 = c1 + c2  

print(c1)  
print(c2)
print(c3)

print("Area of c1:", c1.area())
print("Area of c2:", c2.area())
print("Area of c3:", c3.area())

print("Is c1 bigger than c2?", c1 > c2)
print("Are c1 and c2 equal?", c1 == c2)
print("Are c1 smaller than c3?", c1 < c3)


sorted_circles = Circle.list_circles(c3, c1, c2)

Circle.draw_circles(sorted_circles)