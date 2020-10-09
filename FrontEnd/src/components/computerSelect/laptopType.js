import img1 from './images/gaming.jpg'
import img2 from './images/thin.jpg'
import img3 from './images/convertible.jpg'
import img4 from './images/classic.jpg'


//an array will contain the data for our thumbnails
class LaptopType {

    static items = [
        {
            id: "1234",
            image: img1,
            title : "Gaming",
            device : "laptop",
            description: "Fear nothing! Great graphics, super speed, powerful performance and sweet sound put you at the helm of epic adventures where battlefield bliss is the new norm."
        },
        {
            id: "1235",
            image: img2,
            title : "Ultra-Thin",
            device : "laptop",
            description: "Thin on looks, but big on performance! Take these notebooks anywhere. Perfect for your on the go lifestyle!"
        },
        {
            id: "1236",
            image: img3,
            title : "Convertible",
            device : "laptop",
            description: "Versatile and robust, these laptops fit your every need. Revolutionary hinge technology allows for simple transition from laptop to tablet."
        },
        {
            id: "1237",
            image: img4,
            title : "Classic",
            device : "laptop",
            description: "Powerful performance meets timeless-tested appeal to ensure maximum productivity at work, at school, and at play."
        }
        ];
}

export default LaptopType;

