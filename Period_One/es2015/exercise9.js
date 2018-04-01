class Shape {
    constructor(color){
      this._color = color;
    }  

    setColor(color)
    {
        this._color= color
    }

    color()
    {return this._color}

    
    area() {
      return undefined
    }
    perimeter() {
      return undefined
    }

    info(){

        console.log(`this object has a ${this.color()} color`)
    }
  }

  var testShape = new Shape('blue');
  testShape.setColor('Even more blue')
  testShape.setColor('Insanely blue')
  testShape.info();


  class Circle extends Shape{
        constructor(color,radius){
            super(color)
            this._radius = radius;
        }
        setColor(color){
            this.color = color
        }
        color(){
            return this._color
        }

        area() {
            super.area();
          }
          perimeter() {
            super.perimeter();
          }

          setRadius(radius){
              this._radius =radius;
          }

          radius(){
              return this._radius;
          }




  }

  testCircle = new Circle('blue,', 10);
  console.log(testCircle.radius());
  testCircle.setRadius(3333);
  console.log(testCircle.radius());
  testCircle.setColor('Screaming green');
  console.log(testCircle);
  console.log(testCircle.color)



  class Cylinder extends Circle{
        constructor(color,radius,height){
            super(color,radius)
            this._height =height;
        }

        setHeight(height){
            this._height= height
        }

        height(){
            return this._height
        }

        setColor(color){
            this._color = color
        }
        color(){
            return this._color
        }

        area() {
            super.area();
          }
          perimeter() {
            super.perimeter();
          }

          setRadius(radius){
              this._radius =radius;
          }

          radius(){
              return this._radius;
          }

          volume(){
              return (this._height  * Math.PI * this._radius)
          }

          info(){
              super.info();
          }

  }

  var testCylinder = new Cylinder('red', 10,10);
  console.log(testCylinder);
  testCylinder.setColor('green');
  testCylinder.setHeight(2222);
  testCylinder.setRadius(800);
  console.log(testCylinder);
  console.log(testCylinder.height());
  console.log(testCylinder.radius());
  console.log(testCylinder.color());
  console.log(testCylinder.volume());
  testCylinder.info();
  console.log(testCylinder.area())
  
  
  

