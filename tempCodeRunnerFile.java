class Circle{
    private static int count;
    public Circle() {
        count++;
    }
    public int getCount(){
        return this.count;
    }
}

public class Main{
    public static void main(String[] args) {
        Circle c1 = new Circle();
        Circle c2 = new Circle();
        Circle c3 = new Circle();

        System.out.println(c1.getCount());
        System.out.println(c2.getCount());
        System.out.println(c3.getCount());
    }
}